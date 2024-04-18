import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Bubble, GiftedChat, Send, InputToolbar, Composer } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize chat with initial messages
    setMessages([
      {
        _id: 1,
        text: 'Hello, How are you !',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://picsum.photos/140/140',
        },
      },
    ]);
  }, []);

  const onSend = async (newMessages = []) => {
    if (newMessages.length === 0) {
      console.warn("No message to send!");
      return;
    }

    // Extract user's message
    const userMessage = newMessages[0];

    // Update chat with user's message
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, [userMessage])
    );

    setIsLoading(true);

    try {
      // Replace with your Rasa API endpoint
      const response = await fetch('http://0.0.0.0:8081/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const rasaResponse = await response.json();
      // Update messages with Rasa response
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [mapMessage(rasaResponse[0])])
      );
    } catch (error) {
      console.error('Network Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderSend = (props) => (
    <Send {...props}>
      <View>
        <MaterialCommunityIcons
          name="send-circle"
          style={{ marginBottom: 5, marginRight: 5 }}
          size={32}
          color="black"
        />
      </View>
    </Send>
  );

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#FFC178',
        },
      }}
      textStyle={{
        right: {
          color: 'black',
        },
      }}
    />
  );

  const scrollToBottomComponent = () => (
    <FontAwesome name='angle-double-down' size={22} color='#333' />
  );

  return (
    <View style={{ flex: 1, marginBottom: 50, backgroundColor: "#041C32" }}>
      {isLoading && (
        <View style={{ alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#fff" style={{ marginBottom: 10 }} />
          <Text style={{ color: '#fff' }}>Sending...</Text>
        </View>
      )}
      <GiftedChat
        messages={messages}
        user={{ _id: 2 }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        onSend={onSend}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{ backgroundColor: 'white' }}
            renderComposer={(composerProps) => (
              <Composer
                {...composerProps}
                textInputStyle={{ color: 'black' }}
              />
            )}
          />
        )}
      />
    </View>
  );
};

export default ChatBot;

function mapMessage(message) {
  return {
    _id: message.id,
    text: message.text,
    createdAt: new Date(message.createdTime),
    user: mapUser(),
  };
}

function mapUser() {
  return {
    _id: 1,
    name: 'React Native',
    avatar: 'https://picsum.photos/140/140',
  };
}

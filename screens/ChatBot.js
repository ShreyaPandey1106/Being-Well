import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send,  InputToolbar, Composer} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatBot= () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        quickReplies: {
          type: 'radio', // or 'radio'
          values: [
            { title: 'Yes', value: 'yes' },
            { title: 'Yes, let me show you with a picture!', value: 'yes_picture' },
            { title: 'Nope. What?', value: 'no' },
          ],
        },
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://picsum.photos/140/140',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'User',
          avatar: 'https://picsum.photos/140/140',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
    
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="black"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
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
  };
  const handleQuickReply = (value) => {
    // Update the input text with the selected quick reply value
    const newMessage = {
      _id: Math.random().toString(),
      text: value,
      createdAt: new Date(),
      user: { _id: 2 },
    };

    // Update the input text with the selected value
    

    // Append the new message to the chat
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, [newMessage])
      
    );
    
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <View style={{flex: 1, marginBottom: 50, backgroundColor:"#041C32"}}>
    <GiftedChat
      messages={messages}
      user={{
        _id: 2,
      }}
      onQuickReply={(replies) => handleQuickReply(replies[0]?.title)}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      renderInputToolbar={(props) => (
        <InputToolbar
          {...props}
          containerStyle={{ backgroundColor: 'white' }} // Set the background color
          renderComposer={(composerProps) => (
            <Composer
              {...composerProps}
              textInputStyle={{ color: 'black' }} // Set the text color
            />
          )}
          onSend={(messages) => onSend(messages)}
        />
      )}
    />
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

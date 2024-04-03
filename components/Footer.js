// Footer.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


const Footer = () => {
  const [activePage, setActivePage] = useState('Home');
  const navigation = useNavigation();
  const onPageChange = (page) => {
    setActivePage(page);
    // Implement navigation logic based on the selected page
    console.log(page)
    navigation.navigate(page)
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPageChange('Home')}>
        <Icon name="home" size={24} color={activePage === 'Home' ? '#FFC178' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange('todo')}>
        <Icon name="list" size={24} color={activePage === 'todo' ? '#FFC178' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange('bot')}>
        <Icon name="chat" size={24} color={activePage === 'bot' ? '#FFC178' : 'white'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPageChange('user')}>
        <Icon name="person" size={24} color={activePage === 'user' ? '#FFC178' : 'white'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#041C32",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
  },
});

export default Footer;

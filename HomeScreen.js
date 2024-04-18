// App.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

import HomeCard from '../components/HomeCard';
import SmallCard from '../components/SmallCard';


const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
    
        <Text style={styles.greeting}>Hello!</Text>
        <Text style={styles.userName}>Rachel Green</Text>
        {/* Tabs */}
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.leftbutton} onPress={()=>{}}>
        <Text style={styles.Buttontext}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightbutton} onPress={()=>{}}>
        <Text style={styles.rightButtontext}>Productivity</Text>
        </TouchableOpacity>
      
        </View>
      </View>
      
      <ImageBackground
        source={require('../assets/home.png')}
        style={styles.backgroundImage}
      >
       <View style={styles.daily}>
        <HomeCard txt={"Daily Progress"}/> 
       </View>
       <Text style={styles.categories}> Categories</Text>
       <View style={styles.flexContainer}>
      <View style={styles.row}>
        <View style={styles.box}>
           <SmallCard txt={"Stress"}/> 
         </View>
         <View style={styles.box}>
           <SmallCard txt={"Sleep"}/> 
         </View>
      </View>
      <View style={styles.row}>
      <View style={styles.box}>
           <SmallCard txt={"Positivity"}/> 
         </View>
         <View style={styles.box}>
           <SmallCard txt={"Health"}/> 
         </View>
      </View>
    </View>
    
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#04293A"
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'normal',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
  },
  userName:{
    fontSize: 24,
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: 'normal',
   
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 30,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  tab: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progress: {
    marginTop: 24,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backgroundImage: {
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  categories: {
    marginTop: 16,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  leftbutton: {
    alignItems: 'center',
    backgroundColor: '#FFC178',
    paddingHorizontal: 40,
    paddingVertical: 5, 
    borderRadius: 50
  },
  rightbutton: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 5, 
    borderRadius: 50,
    borderColor: Color.colorSilver,
    borderWidth: 0.9
    
  },
  buttonView:{
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16
  },
  Buttontext:{
    fontSize: 18,
    fontWeight: 'normal',
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandSemiBold,
  },
  rightButtontext:{
    fontSize: 18,
    fontWeight: 'normal',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
  },
  daily: {
     height: "40%",
     marginTop: "5%",
     marginHorizontal:"5%",
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: "45%",
    height: "45%",
    marginHorizontal: 10
  },
  categories:{
    fontSize: 30,
    fontWeight: 'normal',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
    position: "absolute",
    top: "35%",
    left: "25%"
  }
});

export default HomeScreen;

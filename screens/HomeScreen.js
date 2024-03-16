// App.js

import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Hello {"\n"}Rachel Green</Text>
        {/* Tabs */}
        <View style={styles.tabs}>
        <Text style={styles.tab}>Overview</Text>
        <Text style={styles.tab}>Productivity</Text>
      </View>
        
      </View>
      
      <ImageBackground
        source={require('../assets/home.png')}
        style={styles.backgroundImage}
      >
      

      {/* Daily Progress */}
      <View style={styles.progress}>
        <Text style={styles.progressText}>Daily Progress</Text>
        <Text style={styles.progressPercentage}>70%</Text>
      </View>

      {/* Category Metrics */}
      
      <View style={styles.categories}>
        <Text style={styles.category}>Stress</Text>
        <Text style={styles.progressPercentage}>20%</Text>
        {/* Repeat for other categories */}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
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
    top: 90,
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
});

export default HomeScreen;

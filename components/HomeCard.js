import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Sliders from './Sliders';
import { Color, FontFamily } from '../GlobalStyles';


const HomeCard = ({txt}) => {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.text}>{txt}</Text>
        <Sliders co={"#ffc178"} si={15}/> 
       </View>
    </>
  );
}

const styles = StyleSheet.create({
card: {
    backgroundColor: 'rgba(10, 55, 75, 0.66)',
    padding: "5%",
    overflow: "hidden",
    borderRadius: 50,  
 },
 text:{
    fontSize: 23,
    fontWeight: 'normal',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
    overflow:"hidden",
    margin: "1%"
 }
});
export default HomeCard;
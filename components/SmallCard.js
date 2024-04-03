import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Sliders from './Sliders';
import { Color, FontFamily } from '../GlobalStyles';


const SmallCard = ({txt}) => {
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.text}>{txt}</Text>
        <Sliders co={"#064663"} si={10}/> 
       </View>
    </>
  );
}

const styles = StyleSheet.create({
card: {
    backgroundColor: 'rgba(6, 70, 99, 0.4)' ,
    padding: "10%",
    overflow: "hidden",
 },
 text:{
    fontSize: 18,
    fontWeight: 'normal',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
    overflow:"hidden",
    margin: "1%"
 }
});
export default SmallCard;
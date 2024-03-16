import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={[styles.input,styles.inputFlex]}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 35,
    backgroundColor: Color.colorAliceblue_200,
    borderRadius: Border.br_11xl,
    width: 300,
    left: 30,
    marginTop: 7
  },
  iconStyle: {
    //padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 47,
    position: "absolute",
    padding: 5
  },
  inputFlex:{
   
      textAlign: "left",
      left: 47,
    
  },
  inputField: {
    padding: 10,
    // marginTop: 5,
    // marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
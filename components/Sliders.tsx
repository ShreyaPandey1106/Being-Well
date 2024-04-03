import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from '@rneui/themed';
import { Color, FontFamily } from '../GlobalStyles';

type SlidersComponentProps = {};

const Sliders: React.FunctionComponent<SlidersComponentProps> = (props) => {
const [value, setValue] = useState(0);
const [vertValue, setVertValue] = useState(0);

const interpolate = (start: number, end: number) => {
  let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
  return Math.ceil((1 - k) * start + k * end) % 256;
};

const color = () => {
  return props.co ;
};

return (
  <>
    

    <View style={[styles.contentView]}>
    <Text style={styles.text}> {value*10}%</Text>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={10}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: 'white' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              
              size={props.si}
              reverse
              containerStyle={{ bottom: props.si, right:props.si  }}
              color={color()}
            />
          ),
        }}
      />
     
    </View>
    
  </>
);
};

const styles = StyleSheet.create({
contentView: {
  padding: 10,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'stretch',
},
text:{
  paddingTop: "4%", 
  fontSize: 18,
    fontWeight: 'normal',
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandSemiBold,
  textAlign: "right"
}

});

export default Sliders;
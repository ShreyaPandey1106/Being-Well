import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../navigation/AuthProvider";


const LoginScreen = ({navigation}) => {
  const [email, setEmail]= React.useState();
    const [password, setPassword]= React.useState();
    const {login}= React.useContext(AuthContext)

  return (
    
    <View style={styles.loginScreen} >
      <View style={styles.androidSmall8}>

      <Text style={styles.login}>{`LOGIN `}</Text>
      <Text style={[styles.beingWell, styles.beingWellClr]}>BEING WELL</Text>
      <Text
        style={[styles.pleaseEnterYour, styles.beingWellTypo]}
      >{`Please enter your login details 
to continue...  `}</Text>
        <View style={styles.form}>
        <FormInput
         labelValue={email}
         onChangeText={(userEmail)=>setEmail(userEmail)}
         placeholderText="Email"
         iconType='user'
         keyboardType= 'email-address'
         autoCapitalize= 'none'
         autoCorrect= {false}
         />
         <FormInput
         labelValue={password}
         onChangeText={(userPassword)=>setPassword(userPassword)}
         placeholderText="Password"
         iconType='lock'
         secureTextEntry={true}
         />
         <View style={styles.formbutton}>
         <FormButton
         buttonTitle="Sign In"
         onPress= {()=>login(email,password)}
        />
        </View>
        </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  form:{
    position: "absolute",
    top: 250

  },
  formbutton:{
    marginLeft: "30%"
  },

  beingWellClr: {
    color: Color.colorAliceblue_100,
    position: "absolute",
  },
  beingWellTypo: {
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  androidSmall8Child: {
    top: 253,
  },
  androidSmall8Item: {
    top: 290,
  },
  password: {
    top: 296,
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 47,
    position: "absolute",
  },
  email: {
    top: 259,
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 47,
    position: "absolute",
  },
  androidSmall8Inner: {
    top: 350,
    left: 105,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSandybrown,
    width: 150,
    height: 40,
    position: "absolute",
  },
  login: {
    top: 358,
    left: 152,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    color: Color.colorGray_200,
    position: "absolute",
  },
  beingWell: {
    top: 119,
    left: 72,
    fontSize: FontSize.size_13xl,
    letterSpacing: 3.2,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  pleaseEnterYour: {
    top: 184,
    fontSize: FontSize.size_xl,
    color: Color.colorSandybrown,
    width: 300,
    left: 30,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  byContinuingYou: {
    top: 590,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    left: 47,
    color: Color.colorAliceblue_100,
  },
  androidSmall8: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 640,
    marginHorizontal:"6%",
    marginVertical: "25%",
    overflow: "hidden",
  },
  loginScreen:{
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: "100%",
  }
});

export default LoginScreen;

import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../navigation/AuthProvider";

const OnboardingScreen = ({navigation}) => {
  const{googleLogin}=React.useContext(AuthContext)
  return (
    <View style={styles.androidSmall2}>
      <Image
        style={styles.androidSmall2Child}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={styles.beingWell}>BEING WELL</Text>
      <Text style={[styles.beginYourOwn, styles.beginYourOwnFlexBox]}>
        Begin your own journey.
      </Text>
      <Text style={[styles.byContinuingYou, styles.beginYourOwnFlexBox]}>
        By continuing you agree to the Terms and Condition
      </Text>
      
      
      <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
      <View style={[styles.androidSmall2Item, styles.androidLayout]} />
      <Text style={[styles.createAccount, styles.loginTypo]}>
        
        Create Account
      </Text>

      </TouchableOpacity>

      
      
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
      <View style={[styles.androidSmall2Inner, styles.androidLayout]} />
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </TouchableOpacity>
      
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  beginYourOwnFlexBox: {
    textAlign: "left",
    color: Color.colorAliceblue_100,
    position: "absolute",
  },
  androidLayout: {
    height: 40,
    width: 300,
    borderRadius: Border.br_11xl,
    left: 50,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 50,
    width: 50,
    top: 500,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  androidSmall2Child: {
    top: 50,
    left: 100,
    width: 200,
    height: 200,
    position: "absolute",
  },
  beingWell: {
    top: 265,
    left: 80,
    fontSize: FontSize.size_13xl,
    letterSpacing: 3.2,
    textAlign: "center",
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  beginYourOwn: {
    top: 310,
    left: 87,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  byContinuingYou: {
    top: 496,
    left: "15%",
    fontSize: 11,
    fontFamily: FontFamily.quicksandRegular,
  },
  androidSmall2Item: {
    top: 350,
    backgroundColor: Color.colorSandybrown,
    shadowColor: "rgba(255, 193, 120, 0.48)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
  },
  androidSmall2Inner: {
    top: 406,
    backgroundColor: Color.colorDarkslategray_100,
  },
  rectangleIcon: {
    left: 170,
  },
  androidSmall2Child1: {
    left: 210,
  },
  createAccount: {
    top: 353,
    left: "30%",
    color: Color.colorGray_200,
  },
  login: {
    top: 413,
    left: "40%",
    color: "#d9d9d9",
  },
  lineView: {
    top: 471,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    width: 301,
    height: 1,
    left: 50,
    position: "absolute",
  },
  androidSmall2: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width:"100%",
    height: "100%",
    overflow: "hidden",

    
  },
});

export default OnboardingScreen;

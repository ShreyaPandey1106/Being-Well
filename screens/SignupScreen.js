import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [contact, setContact] = React.useState();
  const [cname, setCname] = React.useState();
  const [ccontact, setCcontact] = React.useState();
  const [password, setPassword] = React.useState();
  
  const {register}= React.useContext(AuthContext);

  return (
    <View style={styles.signup}>
      <View style={styles.androidSmall7}>
        <Text style={styles.createAccount}>Create account</Text>
        
        <View style={[styles.androidSmall7Child1, styles.groupItemLayout]} />
        <View style={styles.firstSet}>
          <FormInput
            labelValue={name}
            onChangeText={(userName) => setName(userName)}
            placeholderText="Name"
            iconType='user'
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
        <View style={styles.firstSetAll}>
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType='mail'
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
        <View style={styles.firstSetAll}>
          <FormInput
           labelValue={password}
           onChangeText={(userPassword) => setPassword(userPassword)}
           placeholderText="Password"
           iconType="lock"
           secureTextEntry={true}
   
          />
        </View>
      
        <View style={styles.firstSetAll}>
          <FormInput
            labelValue={contact}
            onChangeText={(userContact) => setContact(userContact)}
            placeholderText="Contact Number  "
            iconType='phone'
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
        
        <View style={styles.rectangleParent}>
        <View style={styles.lastSetAll}>
          <FormInput
            labelValue={cname}
            onChangeText={(closeName) => setCname(closeName)}
            placeholderText="Name"
            iconType='user'
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
        <View style={styles.lastSetAll}>
          <FormInput
            labelValue={ccontact}
            onChangeText={(closeContact) => setCcontact(closeContact)}
            placeholderText="Contact Number  "
            iconType='phone'
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
        </View>
        <Text style={[styles.whoIsClosest, styles.createTypo]}>
          Who is closest to you?
        </Text>
        
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.androidSmall7Child2, styles.lineViewLayout]} />
        <View
          style={styles.formButton}>
            <FormButton
          buttonTitle="Sign Up"
          onPress= {()=>{
            
            register(email,password)}}
         /></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formButton :{
    top: 550,
    left: 100,
    position: "absolute"
  },
  groupItemLayout: {
    height: 30,
    width: 300,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  lastSetAll:{
   marginLeft: "-10%"
  },
  firstSet: {
    marginTop: 80
  },
  firstSetAll: {
    marginTop: 5
  },
  nameFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  createTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  youTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorAliceblue_100,
  },
  groupLayout: {
    height: 93,
    width: 300,
    position: "absolute",
  },
  youPosition: {
    left: 9,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 24,
    width: 24,
    backgroundColor: Color.colorAliceblue_100,
    left: 0,
    position: "absolute",
  },
  neverTypo: {
    color: Color.colorWhite,
    left: 33,
    textAlign: "left",
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 301,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 31,
    position: "absolute",
  },
  createAccount: {
    top: 25,
    left: 63,
    fontSize: FontSize.size_13xl,
    color: Color.colorAliceblue_100,
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  androidSmall7Child: {
    top: 100,
    backgroundColor: Color.colorAliceblue_200,
    width: 300,
    borderRadius: Border.br_11xl,
    left: 30,
  },
  androidSmall7Item: {
    top: 138,
    backgroundColor: Color.colorAliceblue_200,
    width: 300,
    borderRadius: Border.br_11xl,
    left: 30,
  },
  androidSmall7Inner: {
    top: 176,
    backgroundColor: Color.colorAliceblue_200,
    width: 300,
    borderRadius: Border.br_11xl,
    left: 30,
  },
  rectangleView: {
    top: 214,
    backgroundColor: Color.colorAliceblue_200,
    width: 300,
    borderRadius: Border.br_11xl,
    left: 30,
  },
  rectanglePressable: {
    top: 676,
    left: 113,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSandybrown,
    width: 150,
    height: 40,
    position: "absolute",
  },
  androidSmall7Child1: {
    top: 286,
    width: 300,
    borderRadius: Border.br_11xl,
    left: 30,
    backgroundColor: Color.colorDarkslategray_100,
  },
  name: {
    top: 105,
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 47,
  },
  email: {
    top: 143,
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 47,
  },
  password: {
    top: 181,
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 47,
  },
  contactNo: {
    top: 219,
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 47,
  },
  groupChild: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorAliceblue_200,
    width: 300,
    borderRadius: Border.br_11xl,
  },
  groupItem: {
    top: 39,
    left: 0,
    backgroundColor: Color.colorAliceblue_200,
    width: 300,
    borderRadius: Border.br_11xl,
  },
  name1: {
    top: 5,
    left: 14,
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  contactNo1: {
    top: 45,
    left: 16,
    color: Color.colorGray_200,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  rectangleParent: {
    top: 380,
    height: 69,
    left: 31,
    width: 300,
    position: "absolute",
  },
  create: {
    top: 684,
    left: 158,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorGray_200,
  },
  haveYouEver: {
    top: 289,
    left: 82,
    color: Color.colorAliceblue_100,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  whoIsClosest: {
    top: 330,
    left: 87,
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    backgroundColor: "rgba(230, 241, 247, 0.7)",
    left: 0,
    top: 0,
  },
  howYouAre: {
    top: 7,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
  },
  shareWhatYou: {
    top: 27,
    fontSize: 12,
    fontWeight: "300",
    fontFamily: FontFamily.quicksandLight,
    color: "rgba(4, 28, 50, 0.6)",
  },
  rectangleGroup: {
    top: 423,
    left: 30,
  },
  groupChild1: {
    top: 0,
  },
  groupChild2: {
    top: 59,
  },
  groupChild3: {
    top: 29,
  },
  byMyself: {
    top: 1,
  },
  never: {
    top: 59,
  },
  byDoctor: {
    top: 31,
  },
  rectangleContainer: {
    top: 317,
    left: 128,
    width: 104,
    height: 83,
    position: "absolute",
  },
  lineView: {
    top: 320,
  },
  androidSmall7Child2: {
    top: 542,
  },
  androidSmall7: {
    flex: 1,
    width: "100%",
    height: 749,
    overflow: "hidden",
    marginLeft: "7%",
    backgroundColor: Color.colorDarkslategray_100,
  },
  signup: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",

    backgroundColor: Color.colorDarkslategray_100,
  },
});

export default SignupScreen;

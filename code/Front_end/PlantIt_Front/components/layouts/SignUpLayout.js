import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import ButtonBrown from '../items/ButtonBrown';


function SignUpLayout(){
    const image = require("./images/signUp.png");
    return(
        <ImageBackground source={image} style ={styles.container}>
            
            <View style={styles.container2}>
                <TitleTextView title="Sign Up" heightFromTop="-190%" lengthLeft="-30%"></TitleTextView>
                
            </View>

            
            <TextInput01 text={"Password"} heightFromTop="35%"></TextInput01>
            <TextInput01 text={"Username"} heightFromTop="-1%"></TextInput01>
            <TextInput01 text={"Email"} heightFromTop="2%"></TextInput01>

            <StatusBar style="auto" />

            <ButtonWhite text={"sign up"} heightFromTop="330%" lengthLeft="17%"></ButtonWhite>

        </ImageBackground>
        
     );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      
      
      
    },

    container2:{
        flexDirection: "row",
        gap:"2rem",
        
    },
  });

  export default SignUpLayout ;
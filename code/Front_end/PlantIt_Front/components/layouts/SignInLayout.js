import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import ButtonBrown from '../items/ButtonBrown';


function SignInLayout(){
    const image = require("./images/signIn.png");
    return(
        <ImageBackground source={image} style ={styles.container}>
            
            <View style={styles.container2}>
                <TitleTextView title="Sign In" heightFromTop="-240%" lengthLeft="-30%"></TitleTextView>
                
            </View>

            

            <TextInput01 text={"Email"} heightFromTop="-3%"></TextInput01>
            <TextInput01 text={"Password"} heightFromTop="2%"></TextInput01>

            <StatusBar style="auto" />

            <ButtonBrown text={"sign in"} heightFromTop="120%" lengthLeft="17%"></ButtonBrown>

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

  export default SignInLayout ;
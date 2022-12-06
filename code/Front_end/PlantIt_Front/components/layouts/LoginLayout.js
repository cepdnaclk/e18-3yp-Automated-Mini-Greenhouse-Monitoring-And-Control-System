import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';

function LoginLayout(){
    const image = require("./images/logInScreen.png");
    return(
        <ImageBackground source={image} style ={styles.container}>
            <ButtonWhite text='Sign Up' heightFromTop="650%" ></ButtonWhite>
            <ButtonWhite text='Sign In' heightFromTop="750%" ></ButtonWhite>

            <View style={styles.container2}>
                <TitleTextView title="PlantIt." heightFromTop="-375%"></TitleTextView>
                <TitleTextView title="        " heightFromTop="-375%"></TitleTextView>
            </View>

            <StatusBar style="auto" />

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

  export default LoginLayout ;
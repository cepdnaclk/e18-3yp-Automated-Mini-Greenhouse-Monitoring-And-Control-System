import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';


function LoginLayout({navigation}){
    const image = require("./images/logInScreen.png");
    return(
        <ImageBackground source={image} style ={styles.container} >
            <ButtonWhite text='Sign Up' heightFromTop="650%" location={() => navigation.navigate('SignUp')} ></ButtonWhite>
            <ButtonWhite text='Sign In' heightFromTop="750%" location={() => navigation.navigate('SignIn')} ></ButtonWhite>

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
    //   resizeMode:'cover'
    },



    container2:{
        flexDirection: "row",
        gap:"2rem",
        

    },
  });

  export default LoginLayout ;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';

function SignInLayout(){
    const image = require("./images/signIn.png");
    return(
        <ImageBackground source={image} style ={styles.container}>
            
            <View style={styles.container2}>
                <TitleTextView title="Sign In" heightFromTop="-350%"></TitleTextView>
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

  export default SignInLayout ;
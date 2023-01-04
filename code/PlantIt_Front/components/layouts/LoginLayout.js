import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';


function LoginLayout({navigation}){
    const image = require("./images/logInScreen.jpg");
    return(
        <ImageBackground source={image} style ={styles.container} >
            
            

            <View style={styles.container2} >
                <TitleTextView title="PlantIt." heightFromTop="0%" ></TitleTextView>
                
                
            </View>

            <View style={styles.container3} >
                
            <ButtonWhite text='Sign Up' heightFromTop="0%" location={() => navigation.navigate('SignUp')} ></ButtonWhite>
            <ButtonWhite text='Sign In' heightFromTop="0%" location={() => navigation.navigate('SignIn')} ></ButtonWhite>
    
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
        //flexDirection: "row",
        //gap:"2rem",
        marginTop:"15%",
        marginLeft:"10%",
        justifyContent:"flex-start",
        alignSelf:"flex-start",
        
        
    },

    container3:{
        flex: 1,
      //backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      width:"60%",
      height:"100%",
      margin:"40%",
      borderColor:"#ffff",
      borderWidth:5,
      paddingTop:"8%",
      paddingBottom:"8%",
      justifyContent:"space-around",
      //opacity:0.5,
      backgroundColor:"rgba(0,0,0,0.4)"
      

    },
  });

  export default LoginLayout ;
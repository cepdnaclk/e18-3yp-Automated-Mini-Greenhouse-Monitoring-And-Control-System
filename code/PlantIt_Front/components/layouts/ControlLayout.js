import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import ButtonBrown from '../items/ButtonBrown';
import ControlCard from '../items/ControlCard';


function ControlLayout({navigation}){
    const image = require("./images/control.png");
    return(
        <ImageBackground source={image} style ={styles.container}>
            
            <View style={styles.container2}>
               <ControlCard text={"Soil moisture (gcm3)"} heightFromTop="3%"></ControlCard>
               <ControlCard text={"Tempurature (C)"} heightFromTop="7%"></ControlCard>
               <ControlCard text={"Humidity (gcm3)"} heightFromTop="11%"></ControlCard>
               <ControlCard text={"Lighting (Hours)"} heightFromTop="15%"></ControlCard>
            
               <View style={styles.container3}>
                    <ButtonBrown text={"Back"} heightFromTop="150%" location={() => navigation.navigate('DashBoard')} ></ButtonBrown>
                    {/* <ButtonWhite text={"Setup"} heightFromTop="150%"></ButtonWhite> */}
                </View>
            
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
        flexDirection: "column",
        gap:"2rem",
        
    },

    container3:{
        paddingTop:80,
        
        flexDirection: "row",

        //backgroundColor:"red",

        justifyContent:"space-between"
        
        
        
    },
  });

  export default ControlLayout ;
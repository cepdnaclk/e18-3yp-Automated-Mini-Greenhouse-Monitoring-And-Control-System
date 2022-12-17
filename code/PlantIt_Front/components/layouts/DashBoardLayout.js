import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground, ScrollView} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import LogoutButton from '../items/LogoutButton'
import ControlCard from '../items/ControlCard';
import DashboardCard from '../items/DashboardCard';
import { AuthContext } from '../context/AuthContext';
import {React,useContext} from 'react';

function DashBoardLayout({navigation}){
    const image = require("./images/Dashboard.png");
    const imageIcon1= require("./images/temperature-low.png");
    const imageIcon2= require("./images/humidityImage.png");
    const imageIcon3= require("./images/heightImage.png");
    const imageIcon4= require("./images/lightHours.png");
    const imageIcon5= require("./images/soilMoistureImage.png");

    const {userInfo,logout} = useContext(AuthContext);

    return(

        <ImageBackground source={image} style ={styles.container}>
            
            <View style={styles.container2}>

                <DashboardCard icon={imageIcon1} currentVal="1.111" highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-17%"></DashboardCard>
                <DashboardCard icon={imageIcon2} currentVal="1.111" highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-16%"></DashboardCard>
                <DashboardCard icon={imageIcon3} currentVal="1.111" highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-15%"></DashboardCard>
                <DashboardCard icon={imageIcon4} currentVal="1.111" highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-14%"></DashboardCard>
                <DashboardCard icon={imageIcon5} currentVal="1.111" highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-13%"></DashboardCard>
            
               <View style={styles.container3}>
                    <LogoutButton text={"Exit"} heightFromTop="100%" onPress={logout} ></LogoutButton>
                    <ButtonWhite text={"Control"} heightFromTop="100%" location={() => navigation.navigate('Control')} ></ButtonWhite> 
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

  export default DashBoardLayout ;
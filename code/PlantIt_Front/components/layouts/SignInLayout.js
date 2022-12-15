import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Keyboard,ImageBackground,Alert} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import SignInButton from '../items/SignInButton'
import React, { useContext ,useEffect } from 'react';
import Loader from '../items/Loader/Loader';
 import { AuthContext } from '../context/AuthContext';

function SignInLayout({navigation}){
    const image = require("./images/signIn.png");

    const {userInfo} = useContext(AuthContext);

    const [inputs,setInputs] = React.useState({
        email:'',
        password:'',
    });

    const [errors,setErrors] = React.useState({});
    const [loading,setLoading] = React.useState(false);

     const {UserLogin}  = useContext(AuthContext);

    const validate = () =>{
        Keyboard.dismiss();
        let valid = true
        //  console.log("innnn")
         if(!inputs.email){
               handleError("Please input email","email" )
               valid = false;
         } 
         
         if(!inputs.password){
           handleError("Please input a password","password" )
           valid = false;
         } 
         if (valid){
               login();
               
         }
    };

   const login=()=> {
       setLoading(true);
       setTimeout(() =>{
           setLoading(false);

           try {              
                UserLogin(inputs.email,inputs.password);


           } catch (error) {
               Alert.alert('Error','Something went Wrong')
               
           }
       },3000);
    }
       

       

   const handleOnChange = (text,input) => {
        setInputs(prevState =>({...prevState,[input]:text}))
    }

    const handleError = (errorMessage, input) =>{
        setErrors(prevState =>({...prevState, [input]:errorMessage}))
    }


    return(
        <ImageBackground source={image} style ={styles.container}>

        <Loader visible ={loading} />
            
            <View style={styles.container2}>
                <TitleTextView title="Sign In" heightFromTop="-240%" lengthLeft="-30%"></TitleTextView>
                
            </View>

            

            <TextInput01
                placeholder="Enter Your email" 
                text={"Email"}
                error={errors.email}
                heightFromTop="-3%"
                onForcus={() =>{
                    handleError(null,'email');
                }}
                onChangeText={text =>handleOnChange(text,'email')}
            />


            <TextInput01 
                placeholder="Enter Your Password" 
                text={"Password"} 
                error={errors.password}
                heightFromTop="2%"
                onForcus={() =>{
                    handleError(null,'password');
                }}
                password
                onChangeText={text =>handleOnChange(text,'password')}
            />

            <StatusBar style="auto" />

            <SignInButton text={"sign in"}
            heightFromTop="120%" 
            lengthLeft="17%" 
            onPress ={validate}
            />

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
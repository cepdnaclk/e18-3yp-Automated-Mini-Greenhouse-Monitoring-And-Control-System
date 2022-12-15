import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground, Keyboard,Alert} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import React, { useContext } from 'react';
import ButtonBrown from '../items/ButtonBrown';
import Signupbutton from '../items/Signupbutton'
import Loader from '../items/Loader/Loader';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';
// import { text } from 'express';


function SignUpLayout({navigation}){
    const image = require("./images/signUp.png");
    const val = useContext(AuthContext);

    // -------------------------------------

     const [inputs,setInputs] = React.useState({
         name:'',
         password:'',
         macID:'',
         email:'',

     });

     const [errors,setErrors] = React.useState({});
     const [loading,setLoading] = React.useState(false);

     const {UserRegister}  = useContext(AuthContext);

     const validate = () =>{
         Keyboard.dismiss();
         let valid = true
        //  console.log("innnn")
          if(!inputs.email){
                handleError("Please input email","email" )
                valid = false;
          } else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError("Please input valid email","email" )
            valid = false;
          } if(!inputs.name){
            handleError("Please input a user name","name" )
            valid = false;
          }
          if(!inputs.macID){
            handleError("Please input a macAddress","macID" )
            valid = false;
          }
          if(!inputs.password){
            handleError("Please input a password","password" )
            valid = false;
          } else if(inputs.password.length<5){
            handleError('Min Passwords length of 5','password')
            valid = false
          }
          if (valid){
                register();
          }
     };

    const register=()=> {
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);

            try {              
                UserRegister(inputs.name,inputs.email,inputs.macID,inputs.password);
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

    //  console.log(inputs)

    // ------------------------------------------
    return(
        <ImageBackground source={image} style ={styles.container}>

            <Loader visible ={loading} />
            
            <View style={styles.container2}>
                <TitleTextView title="Sign Up"
                heightFromTop="-190%"
                lengthLeft="-30%"
                />
                
                
            </View>

            
             {/* <TextInput01 
            placeholder="Enter Your Password" 
            text={"Password"} 
            heightFromTop="35%" 
            password
            />  */}

            <TextInput01 
            placeholder="Enter Your name" 
            text={"User Name"} 
            heightFromTop="12%"
            error={errors.name}
            onForcus={() =>{
                handleError(null,'name');
            }}
            onChangeText={text =>handleOnChange(text,'name')}
            />

            <TextInput01 
            placeholder="Enter Your Email" 
            text={"Email"} 
            heightFromTop="14%"
            error={errors.email}
            onForcus={() =>{
                handleError(null,'email');
            }}
            onChangeText={text =>handleOnChange(text,'email')}
            />

            <TextInput01 
            placeholder="Enter Your Device MacAdress" 
            text={"MacAddress"} 
            heightFromTop="16%" 
            error={errors.macID}
            onForcus={() =>{
                handleError(null,'macID');
            }}
            onChangeText={text =>handleOnChange(text,'macID')}
            />

            <TextInput01 
            placeholder="Enter Your Password" 
            text={"Password"} 
            heightFromTop="18%" 
            error={errors.password}
            onForcus={() =>{
                handleError(null,'password');
            }}
            password
            onChangeText={text =>handleOnChange(text,'password')}
            />
            
            <StatusBar style="auto" />

            

            <Signupbutton
            text={"sign up"} 
            heightFromTop="330%" 
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

  export default SignUpLayout ;
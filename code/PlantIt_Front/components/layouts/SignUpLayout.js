import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground, Keyboard,Alert,ScrollView, KeyboardAvoidingView, Dimensions} from 'react-native';
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
const PasswordValid = require('../../features/Validate/PasswordValid')



function SignUpLayout({navigation}){
    //const image = require("./images/signUp.png");
    const { height, width } = Dimensions.get('window');
    const image = require("./images/logInScreen.jpg");
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
         const validPassword = PasswordValid(inputs.password)
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
          if(!inputs.password ){
            
            handleError("Please input a password","password" )
            valid = false;
          } 
           else if(!validPassword){
             handleError('Please input a valid password','password')
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

        //<KeyboardAvoidingView style={{flex:1}}>
         // <ScrollView contentContainerStyle={{flex:1}}>
          <ScrollView styles={{flex:1}}>
         <View style={{height:height}}>
        <ImageBackground source={image} style ={styles.container} >

            <Loader visible ={loading} />
           
            <View style={styles.container3} >
                <TitleTextView title="Sign Up..." heightFromTop="0%" ></TitleTextView>
                
                
            </View>

            
             {/* <TextInput01 
            placeholder="Enter Your Password" 
            text={"Password"} 
            heightFromTop="35%" 
            password
            />  */}

            <View style={styles.container2}>
            <TextInput01 
            placeholder="Enter Your name" 
            placeholderTextColor="#808080"
            text={"User Name"} 
            heightFromTop="0%"
            error={errors.name}
            onForcus={() =>{
                handleError(null,'name');
            }}
            onChangeText={text =>handleOnChange(text,'name')}
            />

            <TextInput01
             
            placeholder="Enter Your Email"
            placeholderTextColor="#808080" 
            text={"Email"} 
            heightFromTop="0%"
            error={errors.email}
            onForcus={() =>{
                handleError(null,'email');
            }}
            onChangeText={text =>handleOnChange(text,'email')}
            />

            <TextInput01 
            placeholder="Enter Your Device Number"
            placeholderTextColor="#808080" 
            text={"Device Number"} 
            heightFromTop="0%" 
            error={errors.macID}
            onForcus={() =>{
                handleError(null,'macID');
            }}
            onChangeText={text =>handleOnChange(text,'macID')}
            />

            <TextInput01 
            placeholder="Enter Your Password"
            placeholderTextColor="#808080" 
            text={"Password"} 
            heightFromTop="0%" 
            error={errors.password}
            onForcus={() =>{
                handleError(null,'password');
            }}
            password
            onChangeText={text =>handleOnChange(text,'password')}
            />
            
            </View>
            <StatusBar style="auto" />

            

            <Signupbutton
            text={"sign up"} 
            heightFromTop="30%" 
            lengthLeft="26%" 
            onPress ={validate}
            /> 
            
          
        </ImageBackground>
        </View>
        </ScrollView>
        //</KeyboardAvoidingView>
        
        
        
     );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      //position:"absolute",
      
      
      
      
      
    },

    container2:{
        flex: 0.85,
      //backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      width:"80%",
      marginTop:"20%",
      borderColor:"#ffff",
      borderWidth:5,
      justifyContent:"space-around",
      
      
      //opacity:0.5,
      backgroundColor:"rgba(0,0,0,0.7)",
      
      

    },

    container3:{
        flexDirection: "row",
        //gap:"2rem",
        marginTop:"0%",
        marginLeft:"10%",
        justifyContent:"flex-start",
        alignSelf:"flex-start",
        
        
    },
  });

  export default SignUpLayout ;
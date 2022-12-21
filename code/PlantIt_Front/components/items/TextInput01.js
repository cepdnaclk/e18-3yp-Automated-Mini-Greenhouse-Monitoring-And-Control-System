import { View, StyleSheet, Text , TextInput} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function TextInput01(
    {text,
    heightFromTop,
    error,
    password,
    onForcus = () => {},
    ...props
    
    }) {

        const[isForcused,setIsForcused] = React.useState(false)
        const[hidePassword,sethidePassword] = React.useState(password)
    return(
        <View style={[styles.container,
        {top:heightFromTop},
        {borderColor:error
        ? "#f71111"
        :isForcused
        ?"fcfcfc"
        :"#26190",},]}>



            <Text style={styles.box1}>{text}</Text>
            <TextInput
            {...props} 
            style={styles.input}
            autoCorrect={false}
            secureTextEntry={hidePassword}
            onFocus={()=>{
                onForcus();
                setIsForcused(true);
            }}

            onBlur={()=>{
                setIsForcused(false);
            }}
            />

            {password &&

            <Icon
            style={{fontSize:22,color:'white',top:'-85%'}}
            onPress={()=>sethidePassword(!hidePassword)}
            name={hidePassword?'eye-outline':'eye-off-outline'}
            
            />
            }

        
            {error &&
            <Text style={{color:"#e80606",fontSize:12,marginTop:3,top:'-59%',alignSelf:'flex-end',paddingRight:'5%'} }>{error}</Text>
            }
            
                

        </View>
        
            
        
    ); 
}

const styles = StyleSheet.create({
    
    container: {
        //flex: 0.15,
        backgroundColor: "#D28716",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:260,
        height:70,
        alignSelf:"center",
        borderRadius:15,
        
        
        
      },
    
    input:{
        borderWidth:0,
        borderColor: "#7777",
        paddingLeft:0,
        paddingBottom:0,
        width:230,
        
        //backgroundColor:"violet",
        color:"#FFFF",
        height:30,
        borderBottomColor:"#FFFF",
        borderBottomWidth:2,
        
        
    },

    box1:{
        //backgroundColor:"blue",
        alignSelf:"flex-start",
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:0,
        color:"#FFFF",
        fontSize:20
        
        
    },
    
    
    
  });
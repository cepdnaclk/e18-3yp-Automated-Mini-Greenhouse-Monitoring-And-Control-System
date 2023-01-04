import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ButtonWhite({text, heightFromTop , lengthLeft,onPress=()=>{}}) {
    return(
        <TouchableOpacity 
        onPress={onPress}
         >
           <View style ={[styles.button, {top : heightFromTop},{left:lengthLeft} ]}>
                <Text style={styles.buttonText}>{text}</Text>
           </View>
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({
    // ...
    button: {
      
      //backgroundColor: "#ffff",
      //borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 20,
      //top : "10%",
      // minWidth:"60%",
      justifyContent : "center",
      alignItems: "flex-end",
      borderWidth:3,
      borderColor:"#ffff",
      //padding:"%20",
      

      
    },
    buttonText: {
      fontSize: 18,
      color: "#ffff",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase"
    }
  });
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ButtonBrown({text, heightFromTop , lengthLeft, location}) {
    return(
        <TouchableOpacity onPress={() =>location?.()}>
           <View style ={[styles.button, {top : heightFromTop} , {left:lengthLeft}]}>
                <Text style={styles.buttonText}>{text}</Text>
           </View>
        </TouchableOpacity>
    ); 
}

const styles = StyleSheet.create({
    // ...
    button: {
      
      borderColor: "#ffff",
      borderWidth:3,
      paddingVertical: 10,
      paddingHorizontal: 20,
      top : "10%",
      // minWidth:"60%",
      justifyContent : "center",
      alignItems: "flex-end",
      //width:"90%"
      
    },
    buttonText: {
      fontSize: 18,
      color: "#FFFF",
      fontWeight: "bold",
      textAlign: "center",
      textTransform: "uppercase"
    }
  });
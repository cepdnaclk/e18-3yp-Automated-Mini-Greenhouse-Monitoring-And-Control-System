import { View, Button, StyleSheet, TouchableOpacity, Text} from "react-native";

export default function TitleTextView({title,heightFromTop}) {
    return(
        
           <View style ={styles.body }>
                <View style={styles.container}>
                    <Text style={[styles.titleText , {top : heightFromTop}]}>{title}</Text>
                </View>
           </View>
        
    ); 
}

const styles = StyleSheet.create({
    body:{
        textAlign: "center",
        justifyContent:"center",
        alignItems: "center"

    },

    container:{
        flexDirection: "column",
        gap:"1rem",
        flexWrap: "wrap"

    },

    titleText: {
      fontSize: 60,
      fontWeight: "bold",
      color: "white",

    },
    
  });
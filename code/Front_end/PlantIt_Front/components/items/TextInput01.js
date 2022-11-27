import { View, StyleSheet, Text,TextInput} from "react-native";

export default function TextInput01({title,heightFromTop}) {
    return(
        <View>
            <TextInput style ={styles.body }>
                
            </TextInput>
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
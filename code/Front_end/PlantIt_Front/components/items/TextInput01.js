import { View, StyleSheet, Text , TextInput} from "react-native";

export default function TextInput01({text}) {
    return(
        <View style={styles.container}>
            <Text style={styles.box1}>{text}</Text>
            <TextInput style={styles.input}></TextInput>
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
        height:80,
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
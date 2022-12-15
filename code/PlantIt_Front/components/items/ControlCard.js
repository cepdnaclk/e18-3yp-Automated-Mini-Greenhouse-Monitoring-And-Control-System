import { View, StyleSheet, Text , TextInput, Switch} from "react-native";

export default function ControlCard({text,heightFromTop}) {
    return(
        <View style={[styles.container,{top:heightFromTop}]}>
            <View style={styles.container2}>
                <Text style={styles.box1}>{text}</Text>
                <Switch ></Switch>
            </View>

            <View style={styles.container3} top={"1.5%"}>
                <Text style={styles.box2}>Low</Text>
                <Text style={styles.box2}>High</Text>
            </View>

            <View style={styles.container4}>
                <TextInput style={styles.input}></TextInput>
                <TextInput style={styles.input}></TextInput>
            </View>
            
        </View>
        
        
        
        
    ); 
}

const styles = StyleSheet.create({
    
    container: {
        //flex: 0.15,
        backgroundColor: "#FFFF",
        alignItems: 'center',
        //justifyContent: 'flex-start',
        width:300,
        height:120,
        alignSelf:"center",
        borderRadius:15,
        flexDirection:"column",
        paddingBottom:10,
        justifyContent: 'space-between'

      },

    container2: {
        //backgroundColor: "#FFFF",
        alignItems: 'center',
        justifyContent: 'space-between',
        width:290,
        height:35,
        alignSelf:"center",
        borderRadius:15,
        flexDirection:"row",
    },
    
    input:{
        paddingLeft:10,
        paddingBottom:0,
        width:130,
        
        backgroundColor:"#372604",
        color:"#FFFF",
        height:35,
        borderRadius:8
        //borderBottomColor:"#FFFF",
        //borderBottomWidth:2,
        
        
    },

    box1:{
        //backgroundColor:"blue",
        alignSelf:"flex-start",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:8,
        
        color:"#372604",
        fontSize:18,
        fontWeight:"500"
        
        
        
    },
    
    container3: {
        //backgroundColor: "purple",
        alignItems: 'center',
        justifyContent: 'space-between',
        width:300,
        height:30,
        alignSelf:"center",
        borderRadius:8,
        flexDirection:"row",
        
    },

    container4:{
        //backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'space-around',
        width:300,
        height:50,
        alignSelf:"center",
        borderRadius:8,
        flexDirection:"row",
    },

    box2:{
        //backgroundColor:"blue",
        alignSelf:"flex-start",
        paddingLeft:15,
        paddingRight:15,
        paddingTop:8,
        
        color:"#372604",
        fontSize:15,
        fontWeight:"300"
        
        
        
    }
    
  });
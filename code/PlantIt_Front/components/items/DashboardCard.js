import { View, StyleSheet, Text , TextInput, Switch,Image} from "react-native";

export default function DashboardCard({highVal,lowVal,currentVal,optVal,heightFromTop,icon}) {
    return(
        <View style={[styles.container,{top:heightFromTop}]}>
            <Image source={icon} style={styles.container2} resizeMode="center">
                
                
            </Image>

            <View style={styles.container3} top={"1.5%"}>
                <Text style={styles.box2}>Current:{currentVal}</Text>

                <View style={styles.container4}>
                    <Text style={styles.box2}>High: {highVal}</Text>
                    
                    <Text style={styles.box2}>Low: {lowVal}</Text>
                   
                    <Text style={styles.box2}>Opt: {optVal}</Text>
                    
                </View>
                
            </View>

            
            
        </View>
        
        
        
        
    ); 
}

const styles = StyleSheet.create({
    
    container: {
        //flex: 0.15,
        backgroundColor:"rgba(0,0,0,0.8)",
        alignItems: 'center',
        //justifyContent: 'flex-start',
        width:350,
        height:80,
        alignSelf:"center",
        borderRadius:10,
        flexDirection:"row",
        paddingBottom:10,
        justifyContent: 'space-around',
        borderColor:"white",
        borderWidth:1

      },

    container2: {
        //backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center',
        width:50,
        height:50,
        alignSelf:"center",
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
        width:270,
        height:90,
        alignSelf:"center",
        borderRadius:8,
        flexDirection:"column",
        
    },

    container4:{
        //backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'space-between',
        width:270,
        height:50,
        alignSelf:"center",
        borderRadius:8,
        flexDirection:"row",
    },

    box2:{
        //backgroundColor:"blue",
        alignSelf:"flex-start",
        
        paddingTop:8,
        
        color:"white",
        fontSize:15,
        fontWeight:"300"
        
        
        
    }
    
  });
import { View ,StyleSheet, useWindowDimensions,ActivityIndicator,Text } from "react-native";
import React from "react";

const Loader = ({visible=false}) =>{
    const {height,width} = useWindowDimensions();
    return (
        visible && (
        <View style ={[style.container,{height,width}]}>       
            <View style={style.loader}>
                <ActivityIndicator size="large" color="blue" />
                <Text style={{marginRight:10,fontSize:16}}>Loading...</Text>
            </View>
        </View>
        )    
   )
}

const style = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
    },
    loader:{
        height:70,
        backgroundColor:'rgb(255,255,255)',
        marginHorizontal:50,
        borderRadius: 5,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
});

export default Loader;


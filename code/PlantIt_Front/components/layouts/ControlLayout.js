import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground,Keyboard} from 'react-native';
import SetupButton from "../items/SetupButton" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import ButtonBrown from '../items/ButtonBrown';
import ControlCard from '../items/ControlCard';
import { useState,useEffect,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";
import { BASE_URL } from "../../config";
import { useSelector,useDispatch } from 'react-redux';
import { setID } from '../redux/action';
import {PlantReducer} from '../redux/reducers'


function ControlLayout({navigation}){
    const image = require("./images/control.png");

    const {id} =useSelector(state =>state.PlantReducer);
    const dispatch = useDispatch();

    const [controlInput,setcontrolInput] = useState({
        minTemp:"",
        maxTemp:"",
        minHumidity:"",
        maxHumidity:"",
        minSoilmoisute:"",
        maxSoilmoisute:"",
        minlightingHours:"",
        maxlightingHours:""
    })
    const [submitData,setsubmitData] = useState({})
    const [fetchedData,setfetchedData] = useState({

        minTemp:"",
        maxTemp:"",
        minHumidity:"",
        maxHumidity:"",
        minSoilMoisture:"",
        maxSoilMoisture:"",
        minLightingHours:"",
        maxLightingHours:""
    })

    console.log("iD = "+id);

    
    const [errors,setErrors] = useState({});
    const {userInfo} = useContext(AuthContext);
    //  console.log(controlInput.minTemp)

     const validate = () =>{
        Keyboard.dismiss();
        let valid = true
          console.log("innnn")
          console.log(controlInput)
        if(!isInteger(controlInput.minSoilmoisute) && controlInput.minSoilmoisute!= ''){
               handleError("Please input valid minSoilmoisture","minSoilmoisture" )
               console.log('soilmoisture')
               valid = false;
        } 
        console.log(valid)

        if(!isInteger(controlInput.maxSoilmoisute) && controlInput.maxSoilmoisute!= ''){
            handleError("Please input valid maxSoilmoisture","maxSoilmoisute" )
            valid = false;
        }
        
        console.log(valid)

        if(!isInteger(controlInput.minTemp) && controlInput.minTemp!= ''){
            handleError("Please input valid email","email" )
            valid = false;
        }
        
        if(!isInteger(controlInput.maxTemp) && controlInput.maxTemp!= ''){
            handleError("Please input valid email","email" )
            valid = false;
        }
        
        if(!isInteger(controlInput.minlightingHours) && controlInput.minlightingHours!= ''){
            handleError("Please input valid email","email" )
            valid = false;
        }
        
        if(!isInteger(controlInput.maxlightingHours) && controlInput.maxlightingHours!= ''){
            handleError("Please input valid email","email" )
            valid = false;
        }
        
        if(!isInteger(controlInput.minHumidity) && controlInput.minHumidity!= ''){
            handleError("Please input valid email","email" )
            valid = false;
        }
        
        if(!isInteger(controlInput.maxHumidity) && controlInput.maxHumidity!= ''){
            handleError("Please input valid email","email" )
            valid = false;
        }
         
        
         
         if (valid){

               update();   
         }
    };

    const handleError = (errorMessage,input) =>{
        setErrors(prevState =>({...prevState, [input]:errorMessage}))
    }

    const isInteger =(value) => {
        if(parseInt(value,10).toString()===value) {
            return true
          }
          return false;
      }

      const update=()=> {
        console.log('update In')
        if(controlInput.minTemp != ''){
            setsubmitData(prevState =>({...prevState,'minTemp':controlInput.minTemp}))
            console.log("submitdata"+submitData.minTemp)
        }
        if(controlInput.maxTemp != ''){
            setsubmitData(prevState =>({...prevState,'maxTemp':controlInput.maxTemp}))
        }
        if(controlInput.minHumidity != ''){
            setsubmitData(prevState =>({...prevState,'minHumidity':controlInput.minHumidity}))
        }
        if(controlInput.maxHumidity != ''){
            setsubmitData(prevState =>({...prevState,'maxHumidity':controlInput.maxHumidity}))
        }
        if(controlInput.minSoilmoisute != ''){
            setsubmitData(prevState =>({...prevState,'minSoilMoisture':controlInput.minSoilmoisute}))
        }
        if(controlInput.maxSoilmoisute != ''){
            setsubmitData(prevState =>({...prevState,'maxSoilMoisture':controlInput.maxSoilmoisute}))
        }
        if(controlInput.minlightingHours != ''){
            setsubmitData(prevState =>({...prevState,'minLightingHours':controlInput.minlightingHours}))
        }
        if(controlInput.maxlightingHours != ''){
            setsubmitData(prevState =>({...prevState,'maxLightingHours':controlInput.maxlightingHours}))
        }
     }

     // {
    //     "_id": "639e3f41eab3f38b241bba59",
    //     "user": "6395a92ef9fd358128fab7d3",
    //     "minTemp": "1",
    //     "maxTemp": "2",
    //     "minHumidity": "3",
    //     "maxHumidity": "4",
    //     "minSoilMoisture": "5",
    //     "maxSoilMoisture": "6",
    //     "minLightingHours": "7",
    //     "maxLightingHours": "8",
    //     "createdAt": "2022-12-17T22:14:25.765Z",
    //     "updatedAt": "2022-12-17T22:14:25.765Z",
    //     "__v": 0
    // }

     useEffect(() =>{
        if(id){
            putdata()
        }
        else if(id == undefined){
            postdata()
        }

        // const id = setTimeout(() => {
        //     setCountdown(prev => prev + 1);
        //     // if(countdown ==1000){
        //     //     setCountdown(0);
        //     // }

        // }, 5000);
        },[update]);


        async function putdata (){
            const token = userInfo.token;
            console.log("put data")
            // console.log(`${BASE_URL}/plantData/${id}`)
            // fetchPlantdata ()
            // console.log(fetchedData._id)
            // console.log(submitData)
            // const url = "${BASE_URL}/plantData/"
            
            // http://18.143.147.105:5000/api/plantData/63a04d4315c9821f5883ff5a
            await axios
            .put(
                `${BASE_URL}/plantData/${id}`,
                submitData,
                {
                    
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token,
                    },
                    transformResponse:(res)=> {
                        return JSON.parse(res)
                    },
                    responseType: 'json'
                }
                )
            .then(res =>{
                 let sensorInfo1 = res.data;
                //  console.log("here")
                //  console.log(sensorInfo1)
                 

            }).catch(err =>{
                console.log(err.res)
            })
     }

     async function postdata (){
        const token = userInfo.token;
        console.log("post data")
        
        await axios
        .post(
            `${BASE_URL}/plantData/`,
            submitData,
            {
                
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
                },
                transformResponse:(res)=> {
                    return JSON.parse(res)
                },
                responseType: 'json'
            }
            )
        .then(res =>{
             let sensorInfo1 = res.data;
            //  console.log("here")
              console.log(sensorInfo1)
             

        }).catch(err =>{
            console.log(err.res)
        })
 }


    return(
        <ImageBackground source={image} style ={styles.container}>
            
            <View style={styles.container2}>
               <ControlCard text={"Soil moisture (gcm3)"} heightFromTop="3%" controlInput={controlInput} setcontrolInput={setcontrolInput} type1='minSoilmoisute' type2='maxSoilmoisute'></ControlCard>
               <ControlCard text={"Tempurature (C)"} heightFromTop="7%" controlInput={controlInput} setcontrolInput={setcontrolInput} type1='minTemp' type2='maxTemp'></ControlCard>
               <ControlCard text={"Humidity (gcm3)"} heightFromTop="11%" controlInput={controlInput} setcontrolInput={setcontrolInput}type1='minHumidity' type2='maxHumidity'></ControlCard>
               <ControlCard text={"Lighting (Hours)"} heightFromTop="15%" controlInput={controlInput} setcontrolInput={setcontrolInput}type1='minlightingHours' type2='maxlightingHours'></ControlCard>
            
               <View style={styles.container3}>
                    <ButtonBrown text={"Back"} heightFromTop="150%" location={() => navigation.navigate('DashBoard')} ></ButtonBrown>
                    <SetupButton text={"Setup"} heightFromTop="150%" onPress = {validate}></SetupButton> 
                </View>
            
            </View>


            <StatusBar style="auto" />

            

        </ImageBackground>
        
     );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      
      
      
    },

    container2:{
        flexDirection: "column",
        gap:"2rem",
        top:'0%'
        
    },

    container3:{
        paddingTop:80,
        
        flexDirection: "row",

        //backgroundColor:"red",

        justifyContent:"space-between"
        
        
        
    },
  });

  export default ControlLayout ;
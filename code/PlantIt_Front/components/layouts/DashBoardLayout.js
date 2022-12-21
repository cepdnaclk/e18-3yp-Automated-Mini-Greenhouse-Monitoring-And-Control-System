import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,ImageBackground, ScrollView,Dimensions} from 'react-native';
import ButtonWhite from "../items/ButtonWhite" ;
import TitleTextView from '../items/TitleTextView';
import TextInput01 from '../items/TextInput01';
import LogoutButton from '../items/LogoutButton'
import ControlCard from '../items/ControlCard';
import DashboardCard from '../items/DashboardCard';
import {React,useContext,useEffect,useState} from 'react';
import axios from "axios";
import { BASE_URL } from "../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';
import {LineChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import { useSelector,useDispatch } from 'react-redux';
import { setID } from '../redux/action';
import {PlantReducer} from '../redux/reducers'

function DashBoardLayout({navigation}){
    const image = require("./images/Dashboard.png");
    const imageIcon1= require("./images/temperature-low.png");
    const imageIcon2= require("./images/humidityImage.png");
    const imageIcon3= require("./images/heightImage.png");
    const imageIcon4= require("./images/lightHours.png");
    const imageIcon5= require("./images/soilMoistureImage.png");


    const [countdown, setCountdown] = useState(0);

    const {id} =useSelector(state =>state.PlantReducer);
    const dispatch = useDispatch();

    const {userInfo,logout} = useContext(AuthContext);
    // const[sensorInfo,setSensorInfo] = useState([]);
    const[sensorInfo,setSensorInfo] = useState({

        temperature:'',
        humidity:'',
        plantHeight:'',
        soilmoisture:'',
        lightDuration:''
    });
    
    
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

     useEffect(() =>{
        fetchdata()
         fetchPlantdata()


        const id = setTimeout(() => {
            setCountdown(prev => prev + 1);
            // if(countdown ==1000){
            //     setCountdown(0);
            // }

        }, 5000);
        },[countdown]);

        async function fetchdata (){
            const token = userInfo.token;
            
    
            await axios
            .get(
                `${BASE_URL}/sensorData/latest`,
                {
                    
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token,
                    },
                    transformResponse:(res)=> {
                        return JSON.parse(res)
                    },
                    responseType: 'json'
                },
                )
            .then(res =>{
                 let sensorInfo1 = res.data;
                //  console.log('--------------------------------------------')
                // console.log(sensorInfo1)
                 
                 setSensorInfo(sensorInfo1[0]);
                 
                //   console.log("Sensor Info")
                //    console.log(sensorInfo1[0])
                 

            }).catch(err =>{
                console.log(err.res)
            })

        // axios({
        //     method: 'get',
        //     url: `${BASE_URL}/sensorData/latest`,
        //     data: {},
        //     config: { headers: {'Authorization': 'Bearer '+token }}
        //     })
        //     .then(function (res) {
        //         //handle success
        //         let sensorInfo = res.data;
        //         setSensorInfo(sensorInfo);
        //         AsyncStorage.setItem('sensorInfo', JSON.stringify(sensorInfo));
        //         console.log(sensorInfo);
        //     })
        //     .catch(function (err) {
        //         //handle error
        //         console.log(err)
        //     });
     }

     async function fetchPlantdata (){
        const token = userInfo.token;
        

        await axios
        .get(
            `${BASE_URL}/plantData`,
            {
                
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
                },
                transformResponse:(res)=> {
                    return JSON.parse(res)
                },
                responseType: 'json'
            },
            )
        .then(res =>{
             let sensorInfo1 = res.data;
            //  console.log(sensorInfo1)
             
              setfetchedData(sensorInfo1[0]);
              dispatch(setID(sensorInfo1[0]._id))
              // console.log(fetchedData)
            //  console.log("Sensor Info")
            //  console.log(sensorInfo1[0].temperature)
             

        }).catch(err =>{
            console.log(err.res)
        })
 }
     async function retrieveData() {
        try {
         let value = await AsyncStorage.getItem("sensorInfo").temperature;
         if (value !== null) {
          //you have your data in value variable
          return value;
         }
        }
        catch (error) {
        // Error retrieving data
        }
        
        
        }

        function Logout(){
            dispatch(setID(undefined))
            logout()
        } 




    return(

        <ImageBackground source={image} style ={styles.container}>
            
            <View style={styles.container2}>

                 {/* {sensorInfo.map((sensor) =>(    
                <DashboardCard icon={imageIcon1} currentVal={sensor.temperature} highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-17%"></DashboardCard>
                ))}
                {sensorInfo.map((sensor) =>(   
                <DashboardCard icon={imageIcon2} currentVal={sensor.humidity} highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-16%"></DashboardCard>
                ))}
                {sensorInfo.map((sensor) =>(  
                <DashboardCard icon={imageIcon3} currentVal={sensor.soilmoisture} highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-15%"></DashboardCard>
                ))}
                {sensorInfo.map((sensor) =>(  
                <DashboardCard icon={imageIcon4} currentVal={sensor.temperature} highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-14%"></DashboardCard>
                ))}
                {sensorInfo.map((sensor) =>(  
                <DashboardCard icon={imageIcon5} currentVal={sensor.temperature} highVal={"1.111"} lowVal="1.111" optVal={"1.111"} heightFromTop="-13%"></DashboardCard>
                
                ))} */}
                {sensorInfo && fetchedData?(
                    <>
                <DashboardCard icon={imageIcon1} currentVal={sensorInfo.temperature} highVal={fetchedData.maxTemp} lowVal={fetchedData.minTemp} optVal={"1.111"} heightFromTop="10%"></DashboardCard>
                <DashboardCard icon={imageIcon2} currentVal={sensorInfo.humidity} highVal={fetchedData.maxHumidity} lowVal={fetchedData.minHumidity} optVal={"1.111"} heightFromTop="11%"></DashboardCard>
                <DashboardCard icon={imageIcon3} currentVal={sensorInfo.plantHeight} highVal={fetchedData.maxHumidity} lowVal={fetchedData.minHumidity} optVal={"1.111"} heightFromTop="12%"></DashboardCard>
                <DashboardCard icon={imageIcon5} currentVal={sensorInfo.soilmoisture} highVal={fetchedData.maxSoilMoisture} lowVal={fetchedData.minSoilMoisture} optVal={"1.111"} heightFromTop="13%"></DashboardCard>
                <DashboardCard icon={imageIcon4} currentVal={sensorInfo.lightDuration} highVal={fetchedData.maxLightingHours} lowVal={fetchedData.minLightingHours} optVal={"1.111"} heightFromTop="14%"></DashboardCard>
                </>
                ):(
                //     !fetchedData?(
                //     <>
                //     <DashboardCard icon={imageIcon1} currentVal={sensorInfo.temperature} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-17%"></DashboardCard>
                //     <DashboardCard icon={imageIcon2} currentVal={sensorInfo.humidity} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-16%"></DashboardCard>
                //     <DashboardCard icon={imageIcon3} currentVal={sensorInfo.plantHeight} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-15%"></DashboardCard>
                //     <DashboardCard icon={imageIcon5} currentVal={sensorInfo.soilmoisture} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-14%"></DashboardCard>
                //     <DashboardCard icon={imageIcon4} currentVal={sensorInfo.lightDuration} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-13%"></DashboardCard>
                //     </> 
                // ):
                // (
                    <>
                    <DashboardCard icon={imageIcon1} currentVal={''} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-17%"></DashboardCard>
                    <DashboardCard icon={imageIcon2} currentVal={''} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-16%"></DashboardCard>
                    <DashboardCard icon={imageIcon3} currentVal={''} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-15%"></DashboardCard>
                    <DashboardCard icon={imageIcon5} currentVal={''} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-14%"></DashboardCard>
                    <DashboardCard icon={imageIcon4} currentVal={''} highVal={''} lowVal={''} optVal={"1.111"} heightFromTop="-13%"></DashboardCard>
                    </>
                )
                    
                }
                </View>
                { <View top={"11%"}>
                        
                        <LineChart
                            data={{
                            labels: ["0", "1", "2", "3", "4", "5"],
                            datasets: [
                                {
                                data: [
                                    0.3 * 100,
                                    0.3 * 100,
                                    0.5 * 100,
                                    0.3 * 100,
                                    0.2 * 100,
                                    0.3 * 100,
                                ]
                                }
                            ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={200}
                            yAxisLabel=""
                            yAxisSuffix="%"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => "#372604",
                            labelColor: (opacity = 1) => "#372604",
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                            }}
                            bezier
                            style={{
                            marginVertical: 8,
                            borderRadius: 16
                            }}
                        />
                </View> }

               <View style={styles.container3}>
                    <LogoutButton text={"Exit"} heightFromTop="-1%" onPress={Logout} ></LogoutButton>
                    <ButtonWhite text={"Control"} heightFromTop="-1%" location={() => navigation.navigate('Control')} ></ButtonWhite>
                    <ButtonWhite text={"CHAT"} heightFromTop="-1%" location={() => navigation.navigate('Chat')}></ButtonWhite> 
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
        
    },

    container3:{
        paddingTop:80,
        width:350,
       // backgroundColor:"green",
        
        flexDirection: "row",

        //backgroundColor:"red",

        justifyContent:"space-around"
        
        
        
    },
  });

  export default DashBoardLayout ;
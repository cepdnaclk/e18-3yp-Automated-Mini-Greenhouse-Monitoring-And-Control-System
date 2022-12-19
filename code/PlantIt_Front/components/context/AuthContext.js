import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React,{createContext,useEffect,useState} from "react";
import { BASE_URL } from "../../config";

export const AuthContext = createContext();
 
export const Authprovider = ({children}) =>{
    

    const[userInfo,setUserInfo] = useState({})
    const[sensorInfo,setSensorInfo] = useState({})
    const [splashLoading,setSplashLoading] = useState(false)

    const UserRegister = (name,email,macID,password) =>{
        //  console.log(name)
        //  console.log(email)
        //  console.log(macID)
        //  console.log(password)

         console.log(`${BASE_URL}users/`)
 
        let body ={
            name:name,
            email:email,
            macID:macID,
            password:password
        }
        axios
        .post(`${BASE_URL}/users/`,body)
        .then(res =>{
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            console.log(userInfo);
        })
        .catch(e =>{
            console.log(`register error ${e}`);
        });
    };

    const UserLogin = (email,password) =>{
        // console.log(name)
         console.log(email)
        // console.log(macID)
        console.log(password)

        console.log(`${BASE_URL}users/`)
 
        let body ={
            email:email,
            password:password
        }
        axios
        .post(`${BASE_URL}/users/login`,body)
        .then(res =>{
            let userInfo = res.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            console.log(userInfo);
        })
        .catch(e =>{
            console.log(`Login error ${e}`);
        });
    };

    const logout =() =>{
        AsyncStorage.removeItem('userInfo')
        setUserInfo({})
    }

    //--------------------------------------------------
    const GetSensorData = () =>{
        // console.log(name)
        //  console.log(email)
        // console.log(macID)
        // console.log(password)

        console.log(`${BASE_URL}sensorData/latest`)
 
        axios
        .get(
            `${BASE_URL}/users/login`,
            {},
            {
                headers: {Authorization: `Bearer ${userInfo.token}`},
            },
            )
        .then(res =>{
            let sensorInfo = res.data;
            setSensorInfo(sensorInfo);
            AsyncStorage.setItem('sensorInfo', JSON.stringify(sensorInfo));
            console.log(sensorInfo);
        });
    };
    //--------------------------------------------------

    const isLoggedIn = async() => {
        try {
            setSplashLoading(true);

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if(userInfo){
                setUserInfo(userInfo);
            }

            setSplashLoading(false);
        } catch (error) {
            console.log(`is Logged in error ${e}`)
        }
    };

    useEffect(() =>{
        isLoggedIn();
    },[]);


    return(
    <>
    <AuthContext.Provider 
    value={{
        UserRegister,
        UserLogin,
        userInfo,
        logout,
        sensorInfo,
        splashLoading
        }}>
            {children}
        </AuthContext.Provider>
    </>
    )
}
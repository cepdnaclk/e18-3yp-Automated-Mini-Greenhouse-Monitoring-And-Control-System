/// New File Navigation Didnt Connect to App.js .. 
import SignInLayout from "./components/layouts/SignInLayout";
import SignUpLayout from "./components/layouts/SignUpLayout";
import LoginLayout from "./components/layouts/LoginLayout";
import DashBoardLayout from "./components/layouts/DashBoardLayout";
import ControlLayout from "./components/layouts/ControlLayout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
import SplashScreen from "./components/layouts/SplashScreen";

const Stack = createNativeStackNavigator();

const Navigation = () =>{
    const {userInfo,splashLoading} = useContext(AuthContext);
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="LogIn">

            {splashLoading?(
                <Stack.Screen
                name="Splash Screen"
                component={SplashScreen}
                options = {{headerShown:false}}
            />
            ):
                userInfo.token ? (
                    <>
                    <Stack.Screen 
                    name='DashBoard' 
                    component={DashBoardLayout}
                    />
            
                    <Stack.Screen 
                    name='Control' 
                    component={ControlLayout}
                    />  
                    
                    </>
                    ):(
                    <>
                    <Stack.Screen 
                    name='SignIn' 
                    component={SignInLayout}
                    />
                    
                    <Stack.Screen 
                    name='SignUp' 
                    component={SignUpLayout}
                    />
        
                    <Stack.Screen 
                    name='LogIn' 
                    component={LoginLayout}
                    />
                      
                    </>  
                    )}
            
            {/* {userInfo.token ? (
            <>
            <Stack.Screen 
            name='DashBoard' 
            component={DashBoardLayout}
            />
    
            <Stack.Screen 
            name='Control' 
            component={ControlLayout}
            />  
            
            </>
            ):(
            <>
            <Stack.Screen 
            name='SignIn' 
            component={SignInLayout}
            />
            
            <Stack.Screen 
            name='SignUp' 
            component={SignUpLayout}
            />

            <Stack.Screen 
            name='LogIn' 
            component={LoginLayout}
            />
              
            </>  
            )} */}
            
          

          

          

            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Navigation;
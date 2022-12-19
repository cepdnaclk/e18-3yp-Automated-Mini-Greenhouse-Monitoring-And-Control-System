import TextInput01 from './components/items/TextInput01';

import ControlCard from './components/items/ControlCard';

import DashboardCard from './components/items/DashboardCard';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginLayout from './components/layouts/LoginLayout'
import SignInLayout from './components/layouts/SignInLayout';
import DashBoardLayout from './components/layouts/DashBoardLayout';
import SignUpLayout from './components/layouts/SignUpLayout';
import ControlLayout from './components/layouts/ControlLayout';
import { Authprovider } from './components/context/AuthContext';
import Navigation from './Navigation'
import { Provider } from 'react-redux';
import { Store } from './components/redux/store';



export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    
    //<LoginLayout></LoginLayout>
    //<TextInput01 text={"ishta"}></TextInput01>
    //<SignInLayout></SignInLayout>
    //<SignUpLayout></SignUpLayout>
    //<ControlLayout></ControlLayout>
    //<ControlCard text={"Soil moisture (gcm3)"}></ControlCard>
    
    //<DashboardCard highVal={"1.111"} lowVal={"1.111"} currentVal={"1.111"} optVal={"1.333"}></DashboardCard>
    <>
    {/* <DashBoardLayout></DashBoardLayout> */}

    <Authprovider>
      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="LogIn">
          <Stack.Screen name='LogIn' component={LoginLayout}/>
          <Stack.Screen name='SignIn' component={SignInLayout}/>
          <Stack.Screen name='SignUp' component={SignUpLayout}/>
          <Stack.Screen name='DashBoard' component={DashBoardLayout}/>
          <Stack.Screen name='Control' component={ControlLayout}/>
        </Stack.Navigator>
      </NavigationContainer> */}
      <Provider store ={Store}>
      <Navigation>

      </Navigation>
      </Provider>
    </Authprovider>
    </>

  );
}



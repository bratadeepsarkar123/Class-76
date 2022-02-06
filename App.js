import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {CreateStackNavigator} from '@react-navigation/stack'


import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const Stack = createStackNavigator();

function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Home" screenOptions={{
        headerShown:false
      }}>

        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="meteroid" component={MeteorScreen}/>
        <Stack.Screen name="IssLocation" component ={IssLocationScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App();

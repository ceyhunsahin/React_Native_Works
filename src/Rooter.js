import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './pages2/First';
import Second from './pages2/Second';


// ...



const Stack = createStackNavigator();
//Stack.Screen gosterecegimiz sayfalari belirtir

function Router() {
  return (
    <NavigationContainer 
        >
      <Stack.Navigator 
        
        screenOptions = {{
            headerShown : true,
            gestureEnabled : false,
            //initialRouteName : 'SecondPage'
        }}>
        
        <Stack.Screen 
            name="FirstPage" 
            component={First} 
            options={{ title: 'Ceyhun' }}
            
        />
        <Stack.Screen 
            name="SecondPage" 
            component={Second}
            options={{ title: 'Zehra' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
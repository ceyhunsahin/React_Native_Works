
/*const first = ()=> {
  return (
    <SafeAreaView>
      <Text style = {{padding : 20}}>First</Text>
    </SafeAreaView>
    
    )
}

const second = ()=> {
  return (
    <SafeAreaView>
      <Text style = {{padding : 20}}>Second</Text>
    </SafeAreaView>
    
    )
}*/





            {/* <Tab.Navigator initialRouteName="PostPage" tabBarOptions={{ activeTintColor: 'purple' }}>  */}

            {/* once postpage i yuklemek istiyor ama bulamadigindan friendspage i yukluyor, initial a maincomp desek ve yukarida da inittial e de postpage desek once postpage gelir */}



import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Friends, Timeline, Post } from './pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainComponent() {
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={Timeline} />
            <Stack.Screen name="PostPage" component={Post} />
        </Stack.Navigator>
    )
}

function Router2() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="MainComponentPage" tabBarOptions={{ activeTintColor: 'purple' }}>
                <Tab.Screen
                    name="FriendsPage"
                    component={Friends}
                    options={{ title: 'Arkadaşlar' }}
                />
                <Tab.Screen
                    name="MainComponentPage"
                    component={MainComponent}
                    options={{ title: 'Ana Sayfa' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


export default Router2;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './app/screens/profileHeader';
import Album from './app/screens/albumScreen'
import Review from './app/screens/reviewScreen'
import Welcome from './app/screens/Welcome';
import Dairy from './app/screens/diaryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import colors from './app/config/colors'


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function AlbumStackScreen() {
  return (
    <HomeStack.Navigator 
      
      screenOptions={{
        headerShown: false,
        // animationEnabled='false',
        // gestureDirection: 'vertical',
        // animationTypeForReplace:'pop',
      }}>
      <HomeStack.Screen name="Album" component={Album} />
      <HomeStack.Screen name="Review" component={Review} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Album') {
              iconName = 'album'
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Diary') {
              return <AntDesign name='book' size={size} color={color} />
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: { 
            backgroundColor: colors.nav,
            borderTopWidth: 0,
           },
        }}
        // barStyle={{ backgroundColor: colors.dark }}
        >
        <Tab.Screen name="Album" component={AlbumStackScreen} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Diary" component={Dairy}/>
      </Tab.Navigator>
    </NavigationContainer>
    // <Welcome/>
    // <Profile />
    // <Album />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './app/screens/profileHeader';
import Album from './app/screens/albumScreen'
import Welcome from './app/screens/Welcome';

export default function App() {
  return (
    // <Welcome/>
    // <Profile />
    <Album />
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

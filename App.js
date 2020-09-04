import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import WelcomeScreen from './ap/screen/WelcomeScreen';
import ViewImageScreen from './ap/screen/ViewImageScreen';
import Main from './component/MainComponent';

export default function App() {
  return (
    <Main />
     //<ViewImageScreen />
  // <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
});

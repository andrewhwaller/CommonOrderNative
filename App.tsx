import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import { tailwind } from './tailwind';
import TheWelcomeScreen from './components/TheWelcomeScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    'LusitanaBold': require('./assets/fonts/Lusitana-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>
  } else {
    return (
      <View style={styles.container}>
        <View style={tailwind('px-6')}>
          <TheWelcomeScreen />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

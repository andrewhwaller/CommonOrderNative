import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tailwind from "tailwind-rn";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>react native app, i guess</Text>
      <Text style={tailwind('mt-3 text-red-500')}>so anyways</Text>
      <TouchableOpacity activeOpacity={0.75} style={tailwind('items-center px-6 py-3 border border-transparent rounded-md bg-indigo-600')}>
        <Text style={tailwind('text-base font-medium text-white')}>Button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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

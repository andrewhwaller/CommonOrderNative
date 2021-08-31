import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { tailwind } from '../tailwind';

export default function App() {
  return (
    <View style={tailwind('flex flex-col')}>
      <Text style={[tailwind('text-3xl text-red-700 font-semibold mb-5'), { fontFamily: 'LusitanaBold'}]}>Welcome to Common Order!</Text>
      <Text style={tailwind('mt-4 text-lg leading-6 text-gray-900')}>Common Order is a growing online repository of doctrinal and liturgical resources from the historical Presbyterian tradition.</Text>
      <View style={tailwind('mt-8 flex flex-col justify-center')}>
        <TouchableOpacity activeOpacity={0.75} style={tailwind('items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800')}>
          <Text style={tailwind('text-base font-medium text-white')}>Browse the library</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.75} style={tailwind('mt-3 items-center px-5 py-3 border border-gray-200 text-base font-medium rounded-md bg-white')}>
          <Text style={tailwind('text-base font-medium text-blue-gray-600 ')}>Learn more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

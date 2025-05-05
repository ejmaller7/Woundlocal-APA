import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button title="Scan Graft ID" onPress={() => navigation.navigate('Scan')} />
      <Button title="Take Photo" onPress={() => navigation.navigate('Photo')} />
      <Button title="Input Measurements" onPress={() => navigation.navigate('Measurements')} />
      <Button title="View History" onPress={() => navigation.navigate('History')} />
    </View>
  );
}
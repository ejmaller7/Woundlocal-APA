import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function MeasurementForm() {
  return (
    <View>
      <TextInput placeholder="Length (cm)" />
      <TextInput placeholder="Width (cm)" />
      <TextInput placeholder="Depth (cm)" />
      <Button title="Save Measurements" onPress={() => {}} />
    </View>
  );
}

import React from 'react';
import {Button, Text, View} from 'react-native';
import {MapScreenProps} from '../routes';

export function MapScreen({navigation}: MapScreenProps): JSX.Element {
  return (
    <View>
      <Text>Map</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

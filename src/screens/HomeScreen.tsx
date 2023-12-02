/**
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {HomeScreenProps} from '../routes';

export function HomeScreen({navigation}: HomeScreenProps): JSX.Element {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
    </View>
  );
}

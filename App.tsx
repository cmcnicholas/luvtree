/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {RootStackParamList} from './src/routes';
import {HomeScreen} from './src/screens/HomeScreen';
import {MapScreen} from './src/screens/MapScreen';
import customTheme from './theme';

const theme = {
  ...DefaultTheme,
  ...customTheme.colors,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Map'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

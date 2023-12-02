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
import {theme as customTheme} from './src/theme';

const theme = {
  ...DefaultTheme,
  ...customTheme,
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
            options={{
              title: 'Home',
              headerShown: false,
              headerShadowVisible: false,
              statusBarColor: 'transparent',
              statusBarTranslucent: true,
            }}
          />
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{
              title: 'Map',
              headerShown: false,
              headerShadowVisible: false,
              statusBarColor: 'transparent',
              statusBarTranslucent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

import React from 'react';
import {HomeScreenProps} from '../routes';
import {ImageBackground, Image, StyleSheet} from 'react-native';
import {Surface, Button, Text} from 'react-native-paper';

export function HomeScreen({navigation}: HomeScreenProps): JSX.Element {
  return (
    <Surface style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/images/person_hugged_by_tree.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        {/* Centered Logo */}
        <Surface style={styles.logoContainer}>
          <Image
            source={require('../assets/images/luv_tree_shadow.png')}
            fadeDuration={1000}
            resizeMethod="auto"
            resizeMode="contain"
            style={styles.logo}
          />
        </Surface>
      </ImageBackground>

      {/* Bottom-docked Sign In Button */}
      <Button
        mode="contained"
        style={styles.signInButton}
        onPress={() => navigation.navigate('Map')}>
        <Text style={styles.signInText}>Sign In</Text>
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    width: 250,
  },
  signInButton: {
    margin: 20,
    borderRadius: 10,
  },
  signInText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

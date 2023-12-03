import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';

type HeaderProps = {
  title: string;
  onBackPress: () => void;
};

export function Header({title, onBackPress}: HeaderProps): JSX.Element {
  return (
    <View style={styles.container}>
      <IconButton icon="back" onPress={onBackPress} />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

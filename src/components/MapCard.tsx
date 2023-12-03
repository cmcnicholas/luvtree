import React from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {formatTimeAgo} from '../formatters/TimeAgo';

type MapCardProps = {
  title: string;
  user: string;
  date: string;
  source: ImageSourcePropType;
  onPress: () => void;
};

export function MapCard({
  title,
  user,
  date,
  source,
  onPress,
}: MapCardProps): JSX.Element {
  return (
    <Card mode="elevated" style={styles.card} onPress={onPress}>
      <Card.Title
        title={`“${title}”`}
        titleVariant="titleLarge"
        style={styles.title}
      />
      <Card.Content style={styles.content}>
        <Text variant="bodyMedium" style={styles.user}>
          {user}
        </Text>
        <Text variant="bodyMedium" style={styles.date}>
          {formatTimeAgo(new Date(date))}
        </Text>
      </Card.Content>
      <Card.Cover source={source} style={styles.cover} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 300,
    maxWidth: 500,
    marginHorizontal: 5,
    marginStart: 10,
    marginEnd: 10,
  },
  title: {
    marginTop: 10,
  },
  content: {
    flexDirection: 'row', // Set the direction to row for horizontal arrangement
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'flex-start',
    marginBottom: 15,
    marginTop: -10,
  },
  user: {
    color: 'blue',
  },
  date: {
    color: 'rgb(80, 80, 80)',
    marginLeft: 10,
  },
  cover: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

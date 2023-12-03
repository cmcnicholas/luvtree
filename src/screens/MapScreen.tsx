import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {mapStyle} from '../assets/mapStyle';
import {MapCard} from '../components/MapCard';
import {MapScreenProps} from '../routes';
import {Marker} from 'react-native-maps';

const data = [
  {
    id: '1',
    title: 'Wonderful Willow',
    user: 'TantricTreeGuy',
    date: new Date(2023, 2, 3, 14, 21),
    image: require('../assets/images/cards/001.jpg'),
    lonLat: {
      latitude: 37.78865,
      longitude: -122.4394,
    },
  },
  {
    id: '2',
    title: 'Perdy Pine',
    user: 'LadyWhoLikesTrees',
    date: new Date(2022, 11, 18, 12, 35),
    image: require('../assets/images/cards/002.jpg'),
    lonLat: {
      latitude: 37.78425,
      longitude: -122.4124,
    },
  },
  {
    id: '3',
    title: 'Bostin Birch',
    user: 'Tr33',
    date: new Date(2023, 3, 29, 11, 57),
    image: require('../assets/images/cards/003.jpg'),
    lonLat: {
      latitude: 37.78525,
      longitude: -122.4524,
    },
  },
  {
    id: '4',
    title: 'Cute Connifer',
    user: 'JustBill',
    date: new Date(2023, 3, 16, 19, 41),
    image: require('../assets/images/cards/004.jpg'),
    lonLat: {
      latitude: 37.78625,
      longitude: -122.4364,
    },
  },
  {
    id: '5',
    title: 'Saucey Spruce',
    user: 'Pauline420',
    date: new Date(2023, 0, 22, 22, 56),
    image: require('../assets/images/cards/005.jpg'),
    lonLat: {
      latitude: 37.79725,
      longitude: -122.4374,
    },
  },
  {
    id: '6',
    title: "Oak'standing",
    user: 'HardWood',
    date: new Date(2021, 1, 11, 29, 33),
    image: require('../assets/images/cards/006.jpg'),
    lonLat: {
      latitude: 37.78525,
      longitude: -122.4224,
    },
  },
  {
    id: '7',
    title: 'Magic Maple',
    user: 'CheekyTeaky',
    date: new Date(2023, 7, 10, 1, 44),
    image: require('../assets/images/cards/007.jpg'),
    lonLat: {
      latitude: 37.78125,
      longitude: -122.4374,
    },
  },
  {
    id: '8',
    title: 'Super Sycamore',
    user: 'BalsaBoi',
    date: new Date(2023, 8, 8, 7, 17),
    image: require('../assets/images/cards/008.jpg'),
    lonLat: {
      latitude: 37.79825,
      longitude: -122.3324,
    },
  },
  {
    id: '9',
    title: 'Ace Acacia',
    user: 'FigLeaf69',
    date: new Date(2020, 5, 1, 20, 12),
    image: require('../assets/images/cards/009.jpg'),
    lonLat: {
      latitude: 37.72825,
      longitude: -122.1324,
    },
  },
  // Add more data as needed
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MapScreen({navigation}: MapScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78625,
          longitude: -122.4364,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        customMapStyle={mapStyle}>
        {data.map(post => (
          <Marker
            coordinate={post.lonLat}
            image={require('../assets/images/map_icon.png')}
          />
        ))}
      </MapView>
      <Image
        source={require('../assets/images/luv_tree_shadow.png')}
        fadeDuration={1000}
        resizeMethod="auto"
        resizeMode="contain"
        style={styles.logo}
      />
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MapCard
            title={item.title}
            user={item.user}
            date={item.date}
            source={item.image}
          />
        )}
        style={styles.cards}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: 10,
    width: '100%',
    height: 60,
  },
  cards: {
    position: 'absolute',
    bottom: 10,
  },
});

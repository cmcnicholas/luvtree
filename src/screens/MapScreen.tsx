import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle} from '../assets/mapStyle';
import {MapCard} from '../components/MapCard';
import {useAppDispatch, useAppSelector} from '../hooks';
import {PostModel} from '../models/posts/PostModel';
import {loadPosts} from '../reducers/mapReducer';
import {MapScreenProps} from '../routes';

export function MapScreen({navigation}: MapScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.map.posts);

  useEffect(() => {
    dispatch(loadPosts());
    // empty array, called once in its lifetime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPostPress = (post: PostModel) => {
    navigation.push('Post', {
      post,
    });
  };

  return (
    <View style={styles.container}>
      {/* Google Map */}
      <MapView
        initialRegion={{
          latitude: 37.78625,
          longitude: -122.4364,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        customMapStyle={mapStyle}>
        {posts.map(post => (
          <Marker
            key={post.id}
            coordinate={post.lonLat}
            image={require('../assets/images/map_icon.png')}
            onPress={() => onPostPress(post)}
          />
        ))}
      </MapView>

      {/* Logo Image */}
      <Image
        source={require('../assets/images/luv_tree_shadow.png')}
        fadeDuration={1000}
        resizeMethod="auto"
        resizeMode="contain"
        style={styles.logo}
      />

      {/* List of Cards */}
      <FlatList
        data={posts}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MapCard
            key={item.id}
            title={item.title}
            user={item.user}
            date={item.date}
            source={item.image}
            onPress={() => onPostPress(item)}
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

import React, {useMemo, useState} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../hooks';
import {PostScreenProps} from '../routes';
import {Appbar, Text} from 'react-native-paper';
import {likePost} from '../reducers/mapReducer';

export function PostScreen({navigation, route}: PostScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(state => state.map.posts);
  const post = useMemo(
    () => posts.find(p => p.id === route.params.id),
    [posts, route.params],
  );
  const [scaleValue] = useState(new Animated.Value(1));

  const onBackPressed = () => navigation.pop();

  const onThumbUpPress = () => {
    if (post) {
      dispatch(likePost(post.id));
    }
  };

  const onThumbUpPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.2, // Increase when pressed
      useNativeDriver: true,
    }).start();
  };

  const onThumbUpPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, // Reset when released
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header>
        <Appbar.BackAction onPress={onBackPressed} />
        <Appbar.Content title={post?.title ?? 'Unknown'} />
      </Appbar.Header>

      <ScrollView style={styles.scrollContainer}>
        {/* Photo of User */}
        <View style={styles.photoContainer}>
          <Image
            /* should be a fallback image/placeholder */
            source={post?.image ?? require('../assets/images/cards/001.jpg')}
            style={styles.photo}
          />
          <Image
            source={require('../assets/images/luv_tree.png')}
            fadeDuration={1000}
            resizeMethod="auto"
            resizeMode="contain"
            style={styles.logo}
          />
          <TouchableOpacity
            activeOpacity={1}
            onPress={onThumbUpPress}
            onPressIn={onThumbUpPressIn}
            onPressOut={onThumbUpPressOut}>
            <Animated.Image
              source={require('../assets/images/thumb_up.png')}
              resizeMethod="auto"
              resizeMode="contain"
              style={{
                ...styles.thumbUp,
                transform: [
                  {translateX: -75},
                  {translateY: 120},
                  {scale: scaleValue},
                ],
              }}
            />
          </TouchableOpacity>
        </View>

        <Text variant="displayLarge" style={styles.user}>
          {post?.user ?? 'Unknown'}
        </Text>

        <Text variant="displaySmall" style={styles.likes}>
          Likes: {post?.likes ?? 'Unknown'}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  photoContainer: {
    position: 'relative',
    marginBottom: 70,
  },
  photo: {
    width: '100%',
  },
  logo: {
    position: 'absolute',
    top: 10,
    width: '100%',
    height: 80,
  },
  thumbUp: {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    width: 150,
  },
  user: {
    textAlign: 'center',
  },
  likes: {
    textAlign: 'center',
    color: 'blue',
  },
});

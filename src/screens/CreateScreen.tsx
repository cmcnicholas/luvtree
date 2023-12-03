import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {Appbar, Button, Text, TextInput} from 'react-native-paper';
import {useAppDispatch} from '../hooks';
import {PostModel} from '../models/posts/PostModel';
import {addPost} from '../reducers/mapReducer';
import {CreateScreenProps} from '../routes';

export function CreateScreen({
  navigation,
  route,
}: CreateScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>();
  const [photoUri, setPhotoUri] = useState<ImageSourcePropType>();

  const onBackPressed = () => navigation.pop();

  const onTitleChanged = (value: string) => setTitle(value);

  const onPhotoPressed = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      maxHeight: 1000,
      maxWidth: 1000,
      quality: 0.7,
    });

    if (result.errorCode) {
      console.error(
        'Camera result failed',
        result.errorCode,
        result.errorMessage,
      );
      return;
    }

    if (result.didCancel) {
      return;
    }

    const firstAsset = result.assets?.at(0);
    if (!firstAsset?.uri) {
      return;
    }

    setPhotoUri({
      uri: firstAsset.uri,
      width: firstAsset.width,
      height: firstAsset.height,
      scale: 1.0,
    });
  };

  const onSavePressed = () => {
    if (!photoUri || !title) {
      return;
    }

    const post: PostModel = {
      id: new Date().getTime().toString(),
      date: new Date().toISOString(),
      image: photoUri,
      likes: 0,
      lonLat: {
        latitude: route.params.lat,
        longitude: route.params.lng,
      },
      title,
      user: 'ItsYew',
    };

    dispatch(addPost(post));

    navigation.pop();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header>
        <Appbar.BackAction onPress={onBackPressed} />
        <Appbar.Content title="Create Post" />
      </Appbar.Header>

      <ScrollView style={styles.scrollContainer}>
        {/* Title */}
        <Text variant="labelMedium" style={styles.titleLabel}>
          Title
        </Text>
        <TextInput onChangeText={onTitleChanged} />

        {/* Image Picker */}
        <Text variant="labelMedium" style={styles.photoLabel}>
          Photo
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onPhotoPressed}
          style={styles.imagePreviewContainer}>
          <Image
            source={photoUri ?? require('../assets/images/image.png')}
            style={styles.imagePreview}
          />
        </TouchableOpacity>

        {/* Save */}
        <Button
          mode="contained"
          onPress={onSavePressed}
          style={styles.save}
          labelStyle={styles.saveLabel}>
          Post Tree 🌳
        </Button>
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
    padding: 20,
  },
  titleLabel: {},
  photoLabel: {
    marginTop: 20,
  },
  imagePreviewContainer: {
    maxWidth: 200,
    maxHeight: 200,
  },
  imagePreview: {
    maxWidth: 200,
    maxHeight: 200,
  },
  save: {
    marginTop: 20,
    width: 200,
  },
  saveLabel: {
    fontSize: 20,
  },
});

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostModel} from './models/posts/PostModel';

export type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Post: {
    post: PostModel;
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type MapScreenProps = NativeStackScreenProps<RootStackParamList, 'Map'>;

export type PostScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Post'
>;

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Post: {
    id: string;
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

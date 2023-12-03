import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Post: {
    id: string;
  };
  Create: {
    lat: number;
    lng: number;
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

export type CreateScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Create'
>;

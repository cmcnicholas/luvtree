import {ImageSourcePropType} from 'react-native';

export type PostModel = {
  id: string;
  title: string;
  user: string;
  date: string;
  image: ImageSourcePropType;
  lonLat: {
    latitude: number;
    longitude: number;
  };
};

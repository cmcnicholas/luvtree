import {PostModel} from '../models/posts/PostModel';

// hard coded data, should be from an api 🤷🏼‍♀️
export const posts: PostModel[] = [
  {
    id: '1',
    title: 'Wonderful Willow',
    user: 'TantricTreeGuy',
    date: new Date(2023, 2, 3, 14, 21).toISOString(),
    image: require('../assets/images/cards/001.jpg'),
    lonLat: {
      latitude: 37.78865,
      longitude: -122.4394,
    },
    likes: 34,
  },
  {
    id: '2',
    title: 'Perdy Pine',
    user: 'LadyWhoLikesTrees',
    date: new Date(2022, 11, 18, 12, 35).toISOString(),
    image: require('../assets/images/cards/002.jpg'),
    lonLat: {
      latitude: 37.78425,
      longitude: -122.4124,
    },
    likes: 12,
  },
  {
    id: '3',
    title: 'Bostin Birch',
    user: 'Tr33',
    date: new Date(2023, 3, 29, 11, 57).toISOString(),
    image: require('../assets/images/cards/003.jpg'),
    lonLat: {
      latitude: 37.78525,
      longitude: -122.4524,
    },
    likes: 0,
  },
  {
    id: '4',
    title: 'Cute Connifer',
    user: 'JustBill',
    date: new Date(2023, 3, 16, 19, 41).toISOString(),
    image: require('../assets/images/cards/004.jpg'),
    lonLat: {
      latitude: 37.78625,
      longitude: -122.4364,
    },
    likes: 156,
  },
  {
    id: '5',
    title: 'Saucey Spruce',
    user: 'Pauline420',
    date: new Date(2023, 0, 22, 22, 56).toISOString(),
    image: require('../assets/images/cards/005.jpg'),
    lonLat: {
      latitude: 37.79725,
      longitude: -122.4374,
    },
    likes: 1,
  },
  {
    id: '6',
    title: "Oak'standing",
    user: 'HardWood',
    date: new Date(2021, 1, 11, 29, 33).toISOString(),
    image: require('../assets/images/cards/006.jpg'),
    lonLat: {
      latitude: 37.78525,
      longitude: -122.4224,
    },
    likes: 0,
  },
  {
    id: '7',
    title: 'Magic Maple',
    user: 'CheekyTeaky',
    date: new Date(2023, 7, 10, 1, 44).toISOString(),
    image: require('../assets/images/cards/007.jpg'),
    lonLat: {
      latitude: 37.78125,
      longitude: -122.4374,
    },
    likes: 1589,
  },
  {
    id: '8',
    title: 'Super Sycamore',
    user: 'BalsaBoi',
    date: new Date(2023, 8, 8, 7, 17).toISOString(),
    image: require('../assets/images/cards/008.jpg'),
    lonLat: {
      latitude: 37.79825,
      longitude: -122.3324,
    },
    likes: 87,
  },
  {
    id: '9',
    title: 'Ace Acacia',
    user: 'FigLeaf69',
    date: new Date(2020, 5, 1, 20, 12).toISOString(),
    image: require('../assets/images/cards/009.jpg'),
    lonLat: {
      latitude: 37.72825,
      longitude: -122.1324,
    },
    likes: 13,
  },
  // Add more data as needed
];

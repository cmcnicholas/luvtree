import {createSlice} from '@reduxjs/toolkit';
import {PostModel} from '../models/posts/PostModel';
import {posts} from './mapReducerStateData';

type MapState = {
  posts: PostModel[];
};

const initialState: MapState = {
  posts: [],
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    loadPosts: state => {
      state.posts = posts;
      return state;
    },
  },
});

export const {loadPosts} = mapSlice.actions;
export const reducer = mapSlice.reducer;

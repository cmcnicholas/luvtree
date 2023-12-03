import {PayloadAction, createSlice} from '@reduxjs/toolkit';
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
    likePost: (state, action: PayloadAction<string>) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) {
        post.likes += 1;
      }
      state.posts = state.posts;
    },
    addPost: (state, action: PayloadAction<PostModel>) => {
      state.posts.push(action.payload);
    },
  },
});

export const {loadPosts, likePost, addPost} = mapSlice.actions;
export const reducer = mapSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id: 5,
      title: 'Post 5',
      image:
        'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
    },
    {
      id: 4,
      title: 'Post 4',
      image:
        'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
    },
    {
      id: 3,
      title: 'Post 3',
      image:
        'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
    },
    {
      id: 2,
      title: 'Post 2',
      image:
        'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
    },
    {
      id: 1,
      title: 'Post 1',
      image:
        'https://gdb.voanews.com/3a322c39-beb7-4d60-acc7-03096fdbacce_w408_s.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda minima adipisci aliquid cum. Ut fugiat necessitatibus, tempora quos atque consequuntur minus architecto, labore voluptatum cupiditate, sequi expedita quis praesentium?',
    },
  ],
  postForView: null,
  freshPosts: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    editPost: (state, action) => {
      //editPost
    },
    getPost: (state, action) => {
      state.postForView = state.list.find((item) => item.id === action.payload);
    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 3);
    },
    addPost: (state, action) => {
      // add new post by data
    },
  },
});

export const { setPosts, editPost, getPost, getFreshPosts, addPost } =
  postsSlice.actions;

export const selectPosts = (state) => state.posts.list;
export const selectPostForView = (state) => state.posts.postForView;
export const selectFreshPosts = (state) => state.posts.freshPosts;

export default postsSlice.reducer;

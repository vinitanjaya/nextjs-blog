// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchPosts = createAsyncThunk(
//   'posts/fetchPosts',
//   async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json()
//   }
// )

// interface PostsState {
//   data: any[]
//   loading: boolean
// }

// const initialState: PostsState = {
//   data: [],
//   loading: false,
// }

// const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     setPosts: (state, action) => {
//       state.data = action.payload
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state) => {
//         state.loading = true
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.loading = false
//         state.data = action.payload
//       })
//   },
// })

// export const { setPosts } = postsSlice.actions
// export default postsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { setPosts } = postsSlice.actions
export default postsSlice.reducer

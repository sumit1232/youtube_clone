import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  video: [],
  currentPlaying: null,
  searchTerm:"",
  serchResults:[],
  nextPageToker:null,
  recommendedVideo:[]
};

 const youtubeSlice = createSlice({
  name: 'youtubeApp',
  initialState,
  reducers: {}
})

export default youtubeSlice.reducer;
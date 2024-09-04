import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getMushrooms from '@/api/api';
import { Mushroom } from '@/types';

export interface MushroomsState {
  points: Mushroom[],
  statusGetMushrooms: 'ready' | 'loading' | 'failed',
}

const initialState: MushroomsState = {
  points: [],
  statusGetMushrooms: 'loading',
};

export const fetchMushrooms = createAsyncThunk(
  'mushrooms/getMushrooms',
  async () => {
    return await getMushrooms();
  }
);

export const mushroomsSlice = createSlice({
  name: 'mushrooms',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMushrooms.pending, state => {
      state.statusGetMushrooms = 'loading';
    });
    builder.addCase(fetchMushrooms.fulfilled, (state, action) => {
      state.statusGetMushrooms = 'ready';
      state.points = action.payload;
    });
    builder.addCase(fetchMushrooms.rejected, state => {
      state.statusGetMushrooms = 'failed';
      state.points = [];
    });
  },
});

export default mushroomsSlice.reducer;

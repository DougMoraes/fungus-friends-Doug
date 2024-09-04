import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import getMushrooms from '@/api/api';
import { Mushroom } from '@/types';

export interface MushroomsState {
  points: Mushroom[],
  initialPoints: Mushroom[],
  statusGetMushrooms: 'ready' | 'loading' | 'failed',
}

const initialState: MushroomsState = {
  points: [],
  initialPoints: [],
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
  reducers: {
    filterPoints: (state, action: PayloadAction<{filterName: keyof Mushroom, filterValue: string}>) => {
      state.points = state.points.filter((point: Mushroom) => {
        return point[action.payload.filterName] === action.payload.filterValue;
      });
    },
    resetMushrooms: (state) => {
      state.points = state.initialPoints;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMushrooms.pending, state => {
      state.statusGetMushrooms = 'loading';
    });
    builder.addCase(fetchMushrooms.fulfilled, (state, action) => {
      state.statusGetMushrooms = 'ready';
      state.points = action.payload;
      state.initialPoints = action.payload;
    });
    builder.addCase(fetchMushrooms.rejected, state => {
      state.statusGetMushrooms = 'failed';
      state.points = [];
      state.initialPoints = [];
    });
  },
});

export const { filterPoints, resetMushrooms } = mushroomsSlice.actions;

export default mushroomsSlice.reducer;

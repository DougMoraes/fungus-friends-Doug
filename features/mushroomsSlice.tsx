import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import getMushrooms from '@/api/api';
import { Filter, Mushroom, MushroomsStateType } from '@/types';

const initialState: MushroomsStateType = {
  points: [],
  initialMushrooms: [],
  activeFilters: [],
  statusGetMushrooms: 'loading',
};

export const fetchMushrooms = createAsyncThunk(
  'mushrooms/getMushrooms',
  async () => {
    return await getMushrooms();
  }
);

const addFilter = (state: MushroomsStateType, filter: Filter) => {
  state.activeFilters.push(filter);
}

const removeFilter = (state: MushroomsStateType, filter: Filter) => {
  const index = state.activeFilters.map(activeFilter => activeFilter.value).indexOf(filter.value);

  state.activeFilters.splice(index, 1);
};

const isFilterAlreadyActive = (state: MushroomsStateType, testedFilter: Filter) => {
  return state.activeFilters.find((filter) => filter.name === testedFilter.name && filter.value === testedFilter.value);
};

export const mushroomsSlice = createSlice({
  name: 'mushrooms',
  initialState,
  reducers: {
    filterPoints: (state, action: PayloadAction<Filter>) => {
      if (isFilterAlreadyActive(state, action.payload)) {
        removeFilter(state, action.payload);
      } else {
        addFilter(state, action.payload);
      }

      let newPoints: Mushroom[] = state.initialMushrooms;

      state.activeFilters.map((filter) => {
        newPoints = newPoints.filter((point: Mushroom) => {
          return point[filter.name] === filter.value;
        });
      });

      state.points = newPoints;
    },
    resetMushrooms: (state) => {
      state.points = state.initialMushrooms;
      state.activeFilters = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMushrooms.pending, state => {
      state.statusGetMushrooms = 'loading';
    });
    builder.addCase(fetchMushrooms.fulfilled, (state, action) => {
      state.statusGetMushrooms = 'ready';
      state.points = action.payload;
      state.initialMushrooms = action.payload;
    });
    builder.addCase(fetchMushrooms.rejected, state => {
      state.statusGetMushrooms = 'failed';
      state.points = [];
      state.initialMushrooms = [];
    });
  },
});

export const { filterPoints, resetMushrooms } = mushroomsSlice.actions;

export default mushroomsSlice.reducer;

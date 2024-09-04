import { configureStore } from '@reduxjs/toolkit';

import mushroomsReducer from '../features/mushroomsSlice';

export const MushroomsStore = configureStore({
  reducer: {
    mushrooms: mushroomsReducer,
  },
});

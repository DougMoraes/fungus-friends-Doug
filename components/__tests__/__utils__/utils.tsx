import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react-native";
import { ReactNode } from "react";
import { Provider } from 'react-redux';

import { MushroomsStateType } from "@/types";


export const getAsRegExp = (text: number | string) => {
  return new RegExp(text.toString(), 'i');
};

export const renderWithProviders = (ui: ReactNode, initialState: MushroomsStateType) => {
  const mockSlice = createSlice({
    name: 'mock',
    initialState: initialState,
    reducers: {},
  });

  const mockStore = configureStore({
    reducer: {
      mushrooms: mockSlice.reducer,
    },
  });

  return render(
    <Provider store={mockStore}>
      {ui}
    </Provider>
  );
};

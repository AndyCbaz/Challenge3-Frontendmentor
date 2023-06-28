import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

//Modelo
export interface IGlobalVar {
  email: string;
}
// Estado Inicial
const initialState: IGlobalVar = {
  email:''
};

export const globalSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setGlobalEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setGlobalEmail } = globalSlice.actions;

export const selectGlobalEmail = (state: RootState) => state.global.email;


export default globalSlice.reducer;

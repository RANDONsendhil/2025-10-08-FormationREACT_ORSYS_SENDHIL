import { createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { memes, images } from "../../db/db.json";
import { loadRessources } from "./asyncCaller";

interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState: IRessourcesState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadRessources.fulfilled, (s, a) => {
      s.memes=a.payload.memes;
      s.images=a.payload.images
    });
  },
});

// export const {} = ressources.actions
const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;

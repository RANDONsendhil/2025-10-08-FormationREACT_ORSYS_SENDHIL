import { createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { memes, images } from "../../db/db.json";

interface IResourcesState {
    memes: Array<MemeInterface>;
    images: Array<ImageInterface>;
}

const initialState: IResourcesState = {
    memes: memes,
    images: images,
};

const resources = createSlice({
    name: "resources",
    initialState,
    reducers: {},
});

// export const {} = resources.actions;

const resourcesReducer = resources.reducer;
export default resourcesReducer;

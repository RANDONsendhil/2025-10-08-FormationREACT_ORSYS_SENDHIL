import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";

import ressourcesReducer from "./resources";

const store = configureStore({
    reducer: combineReducers({
        current: currentReducer,
        ressources: ressourcesReducer,
    }),
});

export default store;

store.subscribe(() => {
    console.trace(store.getState());
});

// const meme = { ...emptyMeme };

// store.dispatch({ type: "curent/update", payload: meme });

// console.log(update(meme));

// store.dispatch(update({ ...meme, x: 125, y: 234 }));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

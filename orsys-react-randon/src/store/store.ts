import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";
import ressourcesReducer from "./resources";
import { loadRessources } from "./asyncCaller";

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
store.dispatch(loadRessources());
// store.dispatch(saveRessource());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

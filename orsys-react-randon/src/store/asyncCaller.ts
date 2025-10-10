import { createAsyncThunk } from "@reduxjs/toolkit";
import { REST_ADR, REST_RESOURCES } from "../config/constantes.js";
import type { MemeInterface } from "orsys-tjs-meme";

export const loadRessources = createAsyncThunk(
    "ressources/loadRessources",
    async () => {
        const pri = fetch(`${REST_ADR}${REST_RESOURCES.images}`);
        const prm = fetch(`${REST_ADR}${REST_RESOURCES.memes}`);
        const prall = await Promise.all([pri, prm]);
        return { images: await prall[0].json(), memes: await prall[1].json() };
    }
);

export const saveMeme = createAsyncThunk(
    "current/save",
    async (meme: MemeInterface) => {
        const prm = await fetch(
            `${REST_ADR}${REST_RESOURCES.memes}${
                undefined !== meme.id ? "/" + meme.id : ""
            }`,
            {
                method: undefined !== meme.id ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(meme),
            }
        );
        return await prm.json();
    }
);

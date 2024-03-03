import { createRef } from "@rbxts/react";
import { createProducer } from "@rbxts/reflex";

export interface FrameBool{
    Open : boolean
}

const initialState = {
    Open : false
}


export const FrameManager = createProducer(initialState, {
    PopFrame: (state, PopOut: boolean) => ({
        ...state,
        Open: PopOut, 
    }),
});
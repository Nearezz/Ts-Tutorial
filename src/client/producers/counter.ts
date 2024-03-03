import { number } from "@rbxts/react/src/prop-types";
import { createProducer } from "@rbxts/reflex";

export interface CountVal {
    Value : number
}
const initialState:CountVal = {
    Value : 0
};

export const CountNumberManager = createProducer(initialState,{
    increament: (state,Amount:number) => ({
        ...state,
        Value: state.Value + Amount
    })
})
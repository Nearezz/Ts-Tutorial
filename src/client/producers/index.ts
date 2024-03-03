import { InferState, combineProducers } from "@rbxts/reflex";
import { CountVal, CountNumberManager } from "./counter";
import { FrameBool,FrameManager } from "./FrameProducer";
export type RootProducer = typeof producer;

export type RootState = InferState<RootProducer>;

import { useProducer, useSelector, UseProducerHook, UseSelectorHook } from "@rbxts/react-reflex";

export const useRootProducer: UseProducerHook<RootProducer> = useProducer;
export const useRootSelector: UseSelectorHook<RootProducer> = useSelector;

export const producer = combineProducers({
    counter : CountNumberManager,
    FrameManager : FrameManager
})
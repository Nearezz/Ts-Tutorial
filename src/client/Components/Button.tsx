
import React, { useEffect, useState } from "@rbxts/react";
import { TweenService} from "@rbxts/services";
import { useMotion } from "client/Hooks/use-motion";
import { springs } from "../Utils/springs";
import { TweenOptions, tween } from "@rbxts/ripple";
import Ripple, { spring } from "@rbxts/ripple";
import { useLatestCallback, useUpdateEffect } from "@rbxts/pretty-react-hooks";
import { useProducer } from "@rbxts/react-reflex";
import { useRootSelector } from "client/producers";



import { RootProducer, producer } from "client/producers";
import { Producer } from "@rbxts/reflex";
import { useSelector } from "@rbxts/react-reflex";

interface Prop {
    onClick?: () => void;
    pos? :UDim2
    size? : UDim2
    count? : number
}


export function Button({pos,onClick}:Prop) {
    const [buttonPosition, buttonPositionMotion] = useMotion(0);
    const [buttonSize, buttonPositionSize] = useMotion(100);
    const FrameBool = useRootSelector((state) => state.FrameManager.Open);
    const count = useRootSelector((state) => state.counter.Value);
    const producer = useProducer<RootProducer>()
   
    useUpdateEffect(() => {
        if (FrameBool === true) {
            print("down");
            buttonPositionMotion.spring(10,springs.responsive)
            buttonPositionSize.spring(50,springs.responsive)
            print(buttonPosition.getValue())
        } else {
            print("up");
            buttonPositionMotion.spring(0,springs.responsive)
            buttonPositionSize.spring(100,springs.responsive)
            print(buttonPosition.getValue())
        }
    });

    return (
                <textbutton
                key={"Click me"}
                BackgroundTransparency={0}
                AnchorPoint={new Vector2(0.5,0.5)}
                // Size={buttonSize.map((Sigma)=> UDim2.fromOffset(0,0).Lerp(UDim2.fromOffset(1,1),Sigma))}
                Position={buttonPosition.map((alpha)=> UDim2.fromOffset(0,0).Lerp(UDim2.fromOffset(1,1),alpha))}
                BackgroundColor3={FrameBool ? new Color3(1, 0.05, 0.05) : new Color3(1, 1, 1)}
                Size={new UDim2(0,100,0,100)}
                Event={{
                    Activated: () => {
                        producer.increament(1)
                    },
                    MouseButton1Down: () => producer.PopFrame(true),
                    MouseButton1Up: () => producer.PopFrame(false),
                }}
             />
      
               

    );
}
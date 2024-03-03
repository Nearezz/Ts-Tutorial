import React, { useEffect, useState } from "@rbxts/react";



import { useProducer } from "@rbxts/react-reflex";
import { useRootSelector } from "client/producers";
import { RootProducer, producer } from "client/producers";

// BackgroundColor3={pressed ? new Color3(1, 0.05, 0.05) : new Color3(1, 1, 1)}

export function Frame() {
    const FrameBool = useRootSelector((state) => state.FrameManager.Open);
    const count = useRootSelector((state) => state.counter.Value);




    return(
        <frame Position={UDim2.fromScale(0.3,0.3)} key={"TestFrame"} AnchorPoint={new Vector2(0.5,0.5)} Size={new UDim2(0,100,0,100)}  BackgroundTransparency={0} BackgroundColor3={FrameBool ? new Color3(1, 0.05, 0.05) : new Color3(1, 1, 1)}  > 
            <textlabel 
                Text={FrameBool ? `I got clicked ${count} times` : 'Click me'}
                AnchorPoint={new Vector2(0.5,0.5)} Position={new UDim2(0.5,0,0.5,0)}
                TextSize={21}
                FontFace={new Font(Enum.Font.Cartoon.Name)}
            >
            </textlabel>
         </frame>
    )
}
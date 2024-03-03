import React, { useEffect, useState } from "@rbxts/react";
import { Button} from "./Button";


import { useProducer } from "@rbxts/react-reflex";
import { useRootSelector } from "client/producers";
import { RootProducer, producer } from "client/producers";
import { Frame } from "./Frame";

export function App() {
    const [pos,setPos] = useState(new UDim2(0.50,0,0.5,0)) // state variable for position

    return (  
        <screengui>
            <Frame></Frame>
            <frame Position={UDim2.fromScale(0.5,0.5)} >
                <Button pos={UDim2.fromScale(0.5,0.5)}>
                </Button>
            </frame>
        </screengui>
    
 )
}
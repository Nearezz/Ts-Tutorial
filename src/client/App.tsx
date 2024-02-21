import React, { useEffect, useState } from "@rbxts/react";
import { Button} from "./Button";


export function App() {
    const [pos,setPos] = useState(new UDim2(0.50,0,0.5,0))

    return <Button
    onClick={() => {
        setPos(new UDim2(math.random(-5,50)/100,0,math.random(-5,50)/100,0))
    }}
    pos={pos}

    />
    
}
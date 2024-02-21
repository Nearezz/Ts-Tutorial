
import React, { useEffect, useState } from "@rbxts/react";
import { TweenService} from "@rbxts/services";

interface Prop {
    onClick?: () => void;
    pos? :UDim2
}

export function Button({pos,onClick}:Prop) {
    const [pressed, setClicked] = useState(false);
    const [text,setText] = useState('Click Me')

    // useEffect(() => {
    //     if (pressed === true) {
    //         print("down");
    //     } else {
    //         print("up");
    //     }
    // }, [pressed]);

    return (
        <screengui key={"Button"}>
            <textbutton
                key={"Click me"}
                AnchorPoint={new Vector2(0.5,0.5)}
                Text={pressed ? 'I got clicked' : 'Click me'}
                Position={pos}
                Size={new UDim2(0, 100, 0, 100)}
                BackgroundColor3={pressed ? new Color3(1, 0.05, 0.05) : new Color3(1, 1, 1)}
                Event={{
                    Activated: onClick,
                    MouseButton1Down: () => setClicked(true),
                    MouseButton1Up: () => setClicked(false),
                }}
            />
        </screengui>
    );
}
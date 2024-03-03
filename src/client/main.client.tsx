import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { ReflexProvider } from "@rbxts/react-reflex";
import { producer } from "./producers";

import { App } from "./Components/App";

const root = createRoot(new Instance("Folder"));
const target = Players.LocalPlayer.WaitForChild("PlayerGui");

root.render(
	<StrictMode>
		<ReflexProvider producer={producer}>
			{createPortal(<App />, target)}
		</ReflexProvider>
	</StrictMode>,
);



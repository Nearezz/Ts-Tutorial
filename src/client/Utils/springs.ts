import { config, SpringOptions } from "@rbxts/ripple";


export const springs = {
	...config.spring,
	bubbly: { tension: 300, friction: 20, mass: 1.2 },
	responsive: { tension: 600, friction: 34, mass: 0.7 },
	wobbly : {tension:200,friction:100,mass:3.1}
	
} satisfies { [config: string]: SpringOptions };
import type { AddonOption, PlanOption } from "./types";
import iconArcade from "./assets/images/icon-arcade.svg";
import iconAdvanced from "./assets/images/icon-advanced.svg";
import iconPro from "./assets/images/icon-pro.svg";

export const planOptions: PlanOption[] = [
    {
        id: "arcade",
        label: "Arcade",
        priceMonthly: 9,
        priceYearly: 90,
        icon: iconArcade,
    },
    {
        id: "advanced",
        label: "Advanced",
        priceMonthly: 12,
        priceYearly: 120,
        icon: iconAdvanced,
    },
    {
        id: "pro",
        label: "Pro",
        priceMonthly: 15,
        priceYearly: 150,
        icon: iconPro,
    },
];

export const addonOptions: AddonOption[] = [
    {
        id: "service",
        title: "Online service",
        description: "Access to multiplayer games",
        priceMonth: 1,
        priceYear: 10,
    },
    {
        id: "storage",
        title: "Larger storage",
        description: "Extra 1TB of cloud save",
        priceMonth: 2,
        priceYear: 20,
    },
    {
        id: "profile",
        title: "Customizable profile",
        description: "Custom theme on your profile",
        priceMonth: 2,
        priceYear: 20,
    },
];

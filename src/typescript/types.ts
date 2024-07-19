export type SocialsSizeTypes = "big" | "standard" | "small";

export const projectTypes = [
    "All projects",
    "Landing Page",
    "Business card website",
    "Webflow",
    "Online stores"
] as const;

export type IProjectType = typeof projectTypes[number];
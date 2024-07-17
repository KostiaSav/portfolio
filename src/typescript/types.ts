export type SocialsSizeTypes = "big" | "standard" | "small";

export const projectTypes = [
    "All projects",
    "Landing Page",
    "Business card website",
    "Personal website",
    "Corporate website",
    "Online stores"
] as const;

export type IProjectType = typeof projectTypes[number];
export const BREAKPOINT_MOBILE = "mobile";
export const BREAKPOINT_TABLET = "tablet";
export const BREAKPOINT_DESKTOP = "desktop";
export const BREAKPOINT_DESKTOP_LG = "desktop-lg";
export const BREAKPOINTS = [
    { name: BREAKPOINT_MOBILE, query: "(max-width: 767px)", minWidth: 0 },
    { name: BREAKPOINT_TABLET, query: "(max-width: 959px)", minWidth: 768 },
    { name: BREAKPOINT_DESKTOP, query: "(max-width: 1279px)", minWidth: 960 },
    {
        name: BREAKPOINT_DESKTOP_LG,
        query: "(min-width: 1280px)",
        minWidth: 1280,
    },
];

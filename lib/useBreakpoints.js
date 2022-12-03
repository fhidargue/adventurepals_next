import { useEffect, useState } from 'react';

const BREAKPOINTS = {
    mobile: 0,
    mobileLg: 450,
    tablet: 768,
    desktop: 1024,
    desktopLg: 1290,
};

const useBreakpoints = () => {
    const getScreen = () => {
        const width = window.innerWidth;
        if (width < BREAKPOINTS.mobileLg) {
            return 'mobile';
        } else if (
            width >= BREAKPOINTS.mobileLg &&
            width < BREAKPOINTS.tablet
        ) {
            return 'mobile-lg';
        } else if (width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop) {
            return 'tablet';
        } else if (
            width >= BREAKPOINTS.desktop &&
            width < BREAKPOINTS.desktopLg
        ) {
            return 'desktop';
        } else {
            return 'desktop-lg';
        }
    };

    const [screen, setScreen] = useState(getScreen());

    useEffect(() => {
        const onResize = () => {
            const current = getScreen();
            setScreen(current);
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [screen]);

    return screen;
};

export const useMobile = () => {
    const screen = useBreakpoints();

    return screen === 'mobile' || screen === 'mobile-lg';
};

export const useMobileLg = () => {
    const screen = useBreakpoints();

    return screen === 'mobile-lg';
};

export const useTablet = () => {
    const screen = useBreakpoints();

    return screen === 'tablet' || screen === 'mobile' || screen === 'mobile-lg';
};

export const useDesktop = () => {
    const screen = useBreakpoints();

    return screen === 'desktop' || screen === 'desktop-lg';
};

export const useDesktopLarge = () => {
    const screen = useBreakpoints();

    return screen === 'desktop-lg';
};

export const useMaxMobileLg = () => {
    const screen = useBreakpoints();

    return screen === 'mobile';
};

export default useBreakpoints;

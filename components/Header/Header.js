import { useEffect, useState } from "react";
import { useTablet } from "../../lib/useBreakpoints";
import data from "./header.json";
import HeaderMobile from "./partials/HeaderMobile";
import HeaderDesktop from "./partials/HeaderDesktop";

const Header = () => {
    const [fixed, setFixed] = useState(false);

    const isTablet = useTablet();

    const onScroll = () => {
        if (window.pageYOffset) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", onScroll);
    }

    return (
        <header>
            {isTablet ? (
                <HeaderMobile data={data} fixed={fixed} />
            ) : (
                <HeaderDesktop data={data} fixed={fixed} />
            )}
        </header>
    );
};

export default Header;

import { useState } from "react";
import { Header, Footer, ButtonTop } from "../../components";

const Layout = ({ children }) => {
    const [fixed, setFixed] = useState(false);

    const onScroll = () => {
        if (window.pageYOffset > 1500) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", onScroll);
    }

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <ButtonTop style={{ display: fixed ? "block" : "none" }} />
        </>
    );
};

export default Layout;

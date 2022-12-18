import data from "./header.json";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useState } from "react";
import { Button, Link, Icon, Text } from "../../components";

const Header = () => {
    const [fixed, setFixed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

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
            <section
                className={`${styles.mobileHheader} ${
                    fixed ? styles.filledBack : styles.overlayBack
                }`}
                style={{ position: fixed ? "fixed" : "absolute" }}
            >
                <div>
                    <Button
                        tag="a"
                        ariaLabel={data.logo.imageAlt}
                        linkTarget={data.logo.target}
                        url={data.logo.url}
                        type="logoHeader"
                        className={styles.logo}
                    >
                        <Image
                            src={data.logo.image}
                            alt=""
                            aria-hidden="true"
                            width={100}
                            height={75}
                            priority
                        />
                    </Button>
                </div>
                <div
                    className={`${styles.hamburgerWrapper} ${
                        mobileOpen && styles.open
                    }`}
                    onClick={() => {
                        setMobileOpen(!mobileOpen);
                        document.activeElement.blur();
                    }}
                    tabIndex={0}
                >
                    <div
                        className={`${styles.line} ${styles.half} ${
                            styles.start
                        } ${
                            fixed
                                ? styles.hamburgerBlack
                                : styles.hamburgerWhite
                        }`}
                    ></div>
                    <div
                        className={`${styles.line} ${
                            fixed
                                ? styles.hamburgerBlack
                                : styles.hamburgerWhite
                        }`}
                    ></div>
                    <div
                        className={`${styles.line} ${styles.half} ${
                            styles.end
                        } ${
                            fixed
                                ? styles.hamburgerBlack
                                : styles.hamburgerWhite
                        }`}
                    ></div>
                </div>
                <div className={styles.mobileMenu}>
                    <div
                        className={`${styles.menu} ${
                            mobileOpen ? styles.menuOpen : styles.menuClosed
                        }`}
                    >
                        <ul className={styles.mobileLinks}>
                            {data.links.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`${styles.mobileLink} ${styles.borderBottom}`}
                                    >
                                        <Button
                                            tag="a"
                                            url={item.url}
                                            linkTarget={item.target}
                                            type="mobileNav"
                                            tabIndex={mobileOpen ? 0 : -1}
                                        >
                                            <Text
                                                text={item.text}
                                                size="main-copy"
                                                color="white"
                                            />
                                            <Icon
                                                name="chevron-right"
                                                size="lg"
                                                imageDecorative
                                            />
                                        </Button>
                                    </li>
                                );
                            })}
                            <li className={styles.mobileLink}>
                                <Button
                                    tag="button"
                                    buttonType="button"
                                    color="black"
                                    text={data.contact.text}
                                    type="secondary"
                                    linkTarget={data.contact.target}
                                    url={data.contact.url}
                                    tabIndex={mobileOpen ? 0 : -1}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section
                className={`${styles.header} ${
                    fixed ? styles.filledBack : styles.overlayBack
                }`}
                style={{ position: fixed ? "fixed" : "absolute" }}
            >
                <div className={styles.leftContainer}>
                    <Button
                        tag="a"
                        ariaLabel={data.logo.imageAlt}
                        linkTarget={data.logo.target}
                        url={data.logo.url}
                        type="logoHeader"
                        className={styles.logo}
                    >
                        <Image
                            src={data.logo.image}
                            alt=""
                            aria-hidden="true"
                            width={100}
                            height={75}
                            priority
                        />
                    </Button>
                    <ul className={styles.links}>
                        {data.links.map((item, index) => {
                            return (
                                <li key={index} className={styles.link}>
                                    <Link
                                        className={`${
                                            fixed
                                                ? styles.linkBlack
                                                : styles.linkWhite
                                        }`}
                                        text={item.text}
                                        url={item.url}
                                        target={item.target}
                                        type="navHeader"
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={styles.rightContainer}>
                    <div>
                        <div className={styles.phoneBack}>
                            <Icon
                                name={data.contact.icon}
                                alt=""
                                size="lg"
                                className={styles.icon}
                                imageDecorative
                            />
                        </div>
                        <Link
                            className={`${
                                fixed ? styles.linkBlack : styles.linkWhite
                            }`}
                            text={data.contact.phone}
                            url={`tel:${data.contact.phone}`}
                            type="navHeader"
                        />
                    </div>
                    <Button
                        tag="button"
                        buttonType="button"
                        color="black"
                        text={data.contact.text}
                        type={data.contact.type}
                        linkTarget={data.contact.target}
                        url={data.contact.url}
                    />
                </div>
            </section>
        </header>
    );
};

export default Header;

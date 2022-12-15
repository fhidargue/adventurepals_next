import styles from "./HeaderMobile.module.scss";
import { Button, Link, Icon } from "../../../components";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const HeaderMobile = (props) => {
    const { data, fixed } = props;

    const [open, setOpen] = useState(false);

    return (
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
            </div>
            <div className={styles.rightContainer}>
                <button
                    className={`${styles.hamburger} ${
                        fixed ? styles.hamburgerBlack : styles.hamburgerWhite
                    } ${open && styles.open}`}
                    onClick={() => {
                        setOpen(!open);
                    }}
                ></button>
            </div>
            <div className={styles.mobileMenu}>
                <div
                    className={`${styles.menuBackground} ${
                        open ? styles.menuBackOpen : styles.menuBackClosed
                    }`}
                ></div>
                <div
                    className={`${styles.menu} ${
                        open ? styles.menuOpen : styles.menuClosed
                    }`}
                >
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
                        <li>
                            <Button
                                tag="button"
                                buttonType="button"
                                color="black"
                                text={data.contact.text}
                                type="secondary"
                                linkTarget={data.contact.target}
                                url={data.contact.url}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

HeaderMobile.propTypes = {
    data: PropTypes.object.isRequired,
    fixed: PropTypes.bool,
};

export default HeaderMobile;

import styles from "./HeaderDesktop.module.scss";
import { Button, Link, Icon } from "../../../components";
import Image from "next/image";
import PropTypes from "prop-types";

const HeaderDesktop = (props) => {
    const { data, fixed } = props;

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
    );
};

HeaderDesktop.propTypes = {
    data: PropTypes.object.isRequired,
    fixed: PropTypes.bool,
};

export default HeaderDesktop;

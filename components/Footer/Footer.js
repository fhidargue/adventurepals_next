import styles from "./Footer.module.scss";
import data from "./footer.json";
import Image from "next/image";
import { Button, SocialMedia, Text, Link, Icon } from "../../components";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <div className={styles.info}>
                        <Button
                            tag="a"
                            ariaLabel={data.logo.imageAlt}
                            linkTarget={data.logo.target}
                            url={data.logo.url}
                            type="logo"
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
                        <SocialMedia socialMedia={data.socialMedia} />
                        <Image
                            src={data.line.image}
                            alt=""
                            aria-hidden="true"
                            width={90}
                            height={22}
                        />
                    </div>
                    <div className={styles.contact}>
                        <Text
                            text={data.contact.title}
                            className={styles.title}
                            size="lg"
                            color="richBlack"
                            weight="normal"
                            p
                        />
                        <div className={styles.contactInfo}>
                            <div className={styles.line}>
                                <Icon
                                    name="map-pin"
                                    size="lg"
                                    imageDecorative
                                    inline
                                />
                                <div className={styles.addressLines}>
                                    {data.contact.address.map(
                                        (address, index) => {
                                            return (
                                                <Text
                                                    className={styles.address}
                                                    key={index}
                                                    text={address}
                                                    size="md"
                                                    color="richBlack"
                                                    weight="normal"
                                                    p
                                                />
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                            <div className={styles.line}>
                                <Icon
                                    name="phone"
                                    size="lg"
                                    imageDecorative
                                    inline
                                />
                                <Link
                                    text={data.contact.phone}
                                    url={`tel:${data.contact.phone}`}
                                    type="navLink"
                                />
                            </div>
                            <div className={styles.line}>
                                <Icon
                                    name="envelope"
                                    size="lg"
                                    imageDecorative
                                    inline
                                />
                                <Link
                                    text={data.contact.email}
                                    url={`mailto:${data.contact.email}`}
                                    type="navLink"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.topRight}>
                    {data.columns.map((column, index) => {
                        return (
                            <nav key={index} className={styles.columns}>
                                <Text
                                    text={column.title}
                                    className={styles.title}
                                    size="lg"
                                    color="richBlack"
                                    weight="normal"
                                    p
                                />
                                <ul className={styles.linkList}>
                                    {column.links.map((link, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={styles.links}
                                            >
                                                <Link
                                                    text={link.text}
                                                    url={link.url}
                                                    target={link.target}
                                                    type="navLink"
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        );
                    })}
                </div>
            </div>
            <div className={styles.bottom}>
                <Text
                    text={data.copyRight}
                    size="md"
                    color="richBlack"
                    weight="normal"
                    p
                />
                <ul className={styles.bottomLinks}>
                    {data.bottomLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    text={link.text}
                                    url={link.url}
                                    target={link.target}
                                    type="navLink"
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

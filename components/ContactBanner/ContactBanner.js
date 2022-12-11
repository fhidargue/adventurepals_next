import styles from "./ContactBanner.module.scss";
import { Text, Button } from "../../components";
import data from "./banner.json";

const ContactBanner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.wrapper}>
                <Text
                    className={styles.question}
                    text={data.question}
                    color="black"
                    inline
                    p
                />
                <Button
                    tag="a"
                    text={data.buttonText}
                    url={data.buttonUrl}
                    linkTarget={data.buttonTarget}
                    type="tertiaryDark"
                    color="white"
                    className={styles.button}
                />
            </div>
        </section>
    );
};

export default ContactBanner;

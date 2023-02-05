import styles from "./ContactBanner.module.scss";
import { Text, Button } from "../../components";
import PropTypes from "prop-types";

const ContactBanner = (props) => {
    const { question, buttonText, buttonUrl, buttonTarget } = props;

    return (
        <section className={styles.banner}>
            <div className={styles.wrapper}>
                <Text
                    className={styles.question}
                    text={question}
                    color="black"
                    inline
                    p
                />
                <Button
                    tag="a"
                    text={buttonText}
                    url={buttonUrl}
                    linkTarget={buttonTarget}
                    type="tertiaryDark"
                    color="white"
                    className={styles.button}
                />
            </div>
        </section>
    );
};

ContactBanner.propTypes = {
    question: PropTypes.string,
    buttonText: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonTarget: PropTypes.string,
};

export default ContactBanner;

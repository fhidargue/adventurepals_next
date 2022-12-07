import styles from "./Card.module.scss";
import PropTypes from "prop-types";
import { Button, Text } from "../../components";

const Card = (props) => {
    const { buttonText, buttonUrl, buttonTarget, description } = props;
    return (
        <section className={styles.card}>
            <Button
                tag="a"
                text={buttonText}
                url={buttonUrl}
                linkTarget={buttonTarget}
                type="tertiaryDark"
                color="white"
            />
            <Text
                className={styles.description}
                text={description}
                color="black"
                inline
                p
            />
        </section>
    );
};

Card.propTypes = {
    buttonText: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonTarget: PropTypes.string,
    description: PropTypes.string,
};

export default Card;

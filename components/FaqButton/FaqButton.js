import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./FaqButton.module.scss";
import { Text, Icon } from "../../components";

const FaqButton = (props) => {
    const { faq, number } = props;

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <button
            className={`${styles.button} ${open && styles["open"]}`}
            onClick={handleClick}
        >
            <div className={styles.top}>
                <Text
                    text={`${number}. ${faq.question}`}
                    size="md"
                    color="black"
                    weight="bold"
                    className={styles.question}
                />
                <Icon
                    className={styles.icon}
                    name={open ? `arrow-up-circle` : `arrow-down-circle`}
                    aria-label="arrow down"
                    size="lg"
                    imageDecorative
                />
            </div>
            <div
                className={`${styles.bottom} ${
                    open ? styles["show"] : styles["hide"]
                }`}
            >
                <Text
                    text={faq.answer}
                    size="sm"
                    color="black"
                    weight="normal"
                    className={styles.answer}
                />
            </div>
        </button>
    );
};

FaqButton.propTypes = {
    faq: PropTypes.object,
    number: PropTypes.number,
};

export default FaqButton;

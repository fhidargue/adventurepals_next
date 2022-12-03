import PropTypes from "prop-types";
import styles from "./Label.module.scss";

const Label = (props) => {
    const { text, type } = props;

    return <span className={styles[type]}>{text}</span>;
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Label;

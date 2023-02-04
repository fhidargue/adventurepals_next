import PropTypes from "prop-types";
import styles from "./Label.module.scss";

const Label = (props) => {
    const { text, type, className } = props;

    return <span className={`${styles[type]} ${className}`}>{text}</span>;
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Label;

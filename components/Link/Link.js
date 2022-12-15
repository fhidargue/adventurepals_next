import styles from "./Link.module.scss";
import PropTypes from "prop-types";

const Link = (props) => {
    const { text, url, target, type, className } = props;

    return (
        <a
            href={url}
            className={`${styles.link} ${styles[type]} ${className}`}
            target={target}
        >
            <span>{text}</span>
        </a>
    );
};

Link.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    target: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
};

Link.defaultProps = {
    text: "Link text",
    url: "#",
    target: "_self",
    type: "primary",
};

export default Link;

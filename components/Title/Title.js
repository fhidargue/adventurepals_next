import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const Title = (props) => {
    const { level, textAlign, id, tabIndex, title, style, color, className } =
        props;

    const Tag = level;

    return (
        title && (
            <Tag
                id={id}
                tabIndex={tabIndex}
                className={`${styles[textAlign]} ${styles[style]} ${styles[color]} ${className}`}
            >
                {title}
            </Tag>
        )
    );
};

Title.propTypes = {
    level: PropTypes.string,
    textAlign: PropTypes.string,
    id: PropTypes.string,
    tabIndex: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default Title;

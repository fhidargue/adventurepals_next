import PropTypes from "prop-types";
import styles from "./Icon.module.scss";

const Icon = (props) => {
    const {
        name,
        alt,
        size,
        onClick,
        inline,
        style,
        url,
        target,
        className,
        isLink,
        imageDecorative,
    } = props;

    const Tag = isLink ? "a" : onClick ? "button" : "div";

    return (
        <Tag
            className={`${inline && styles.inline} ${className}`}
            href={url ? url : null}
            onClick={onClick}
            target={target ? target : null}
            tabIndex={imageDecorative ? -1 : 0}
        >
            <object
                type="image/svg+xml"
                data={`/icons/${name}.svg`}
                style={{ ...style }}
                className={`${styles.svg} ${size && styles[size]}`}
                alt={imageDecorative ? "" : alt}
                aria-hidden="true"
                focusable="false"
                tabIndex={-1}
            />
            {imageDecorative ? "" : <span className="sr-only">{alt}</span>}
        </Tag>
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.string,
    onClick: PropTypes.func,
    inline: PropTypes.bool,
    style: PropTypes.string,
    isLink: PropTypes.bool,
    url: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    imageDecorative: PropTypes.bool,
    fileReference: PropTypes.string,
};

export default Icon;

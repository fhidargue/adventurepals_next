import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import { Icon } from "../../components";

const Button = (props) => {
    const {
        text,
        tag,
        type,
        onClick,
        onKeyDown,
        ariaExpanded,
        ariaHasPopup,
        ariaLabel,
        ariaHidden,
        tabIndex,
        submit,
        disabled,
        buttonRef,
        mouseEnter,
        mouseLeave,
        url,
        linkTarget,
        color,
        buttonType,
        onFocus,
        onBlur,
        children,
        className,
    } = props;

    const Tag = tag;

    return (
        <Tag
            ref={buttonRef}
            className={`${styles.button} ${styles[type]} ${styles[color]} ${className}`}
            onClick={onClick}
            href={url}
            target={linkTarget}
            aria-expanded={ariaExpanded}
            aria-haspopup={ariaHasPopup}
            type={submit ? "submit" : buttonType}
            aria-label={ariaLabel}
            aria-hidden={ariaHidden}
            tabIndex={tabIndex}
            disabled={disabled}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
        >
            {text && !children ? <span>{text}</span> : children}
        </Tag>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    tag: PropTypes.string,
    type: PropTypes.string,
    render: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    ariaExpanded: PropTypes.bool,
    ariaHasPopup: PropTypes.bool,
    ariaLabel: PropTypes.string,
    ariaHidden: PropTypes.bool,
    tabIndex: PropTypes.number,
    submit: PropTypes.bool,
    disabled: PropTypes.bool,
    buttonRef: PropTypes.any,
    mouseEnter: PropTypes.func,
    mouseLeave: PropTypes.func,
    linkTarget: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.string,
    inline: PropTypes.bool,
    asLoader: PropTypes.bool,
    buttonType: PropTypes.string,
    url: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

Button.defaultProps = {
    text: "Button",
    type: "primary",
    size: "md",
    color: "white",
    ariaExpanded: null,
    ariaHasPopup: null,
    submit: false,
    disabled: false,
    buttonType: "button",
};

export default Button;

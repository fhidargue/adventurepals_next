import PropTypes from 'prop-types';
import styles from './Text.module.scss';

const Text = (props) => {
    const block = 'adc-text';
    const {
        text,
        size,
        color,
        className,
        weight,
        style,
        render,
        inline,
        secondary,
        uppercase,
        p,
        ariaHidden,
    } = props;

    const TagName = p ? 'p' : 'span';

    return (
        <TagName
            aria-hidden={ariaHidden}
            style={style}
            className={`${styles.text} ${styles[size]} ${styles[weight]} ${
                p && styles.lineHeightP
            } ${secondary && styles.secondary} ${inline && styles.inline} ${
                uppercase && styles.uppercase
            } ${color && styles[color]} ${className}`}
        >
            {render ? render() : text}
        </TagName>
    );
};

Text.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    weight: PropTypes.string,
    render: PropTypes.func,
    inline: PropTypes.bool,
    secondary: PropTypes.bool,
    uppercase: PropTypes.bool,
    p: PropTypes.bool,
    ariaHidden: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Text.defaultProps = {
    type: 'primary',
    weight: 'normal',
    uppercase: false,
    inline: true,
    size: 'main-copy',
    color: 'white',
};

Text.displayName = 'Text';

export default Text;

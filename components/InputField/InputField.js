import styles from "./InputField.module.scss";
import PropTypes from "prop-types";

const InputField = (props) => {
    const {
        type,
        name,
        placeholder,
        className,
        required,
        message,
        value,
        valid,
        onChange,
        onBlur,
        onKeyDown,
        maxLength,
        textArea,
        textAreaHeight,
        fullSize,
    } = props;

    const ID_NAME = name.replace(" ", "-");
    const inputId = `${ID_NAME}-input-field`;
    const messageId = `${ID_NAME}-error-message`;

    const preOnChange = (e) => {
        if (onChange) onChange(e.target);
    };

    const Tag = textArea ? "textarea" : "input";
    const isTextArea = textArea && textAreaHeight;

    return (
        <div
            className={`${styles.field} ${fullSize && styles.fullSizeField} ${
                !valid && styles.invalid
            } ${!!value && !!placeholder && styles.filled} ${className}`}
        >
            <label
                htmlFor={inputId}
                className={`${styles.label} ${
                    !!isTextArea && styles.labelTextArea
                }`}
            >
                {placeholder}
            </label>
            <div style={{ position: "relative" }}>
                <Tag
                    className={`${styles.input} ${
                        !!isTextArea && styles.inputTextArea
                    } ${fullSize && styles.fullSize}`}
                    id={inputId}
                    type={type}
                    name={name}
                    value={value}
                    maxLength={maxLength}
                    onChange={preOnChange}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    style={isTextArea ? { height: `${textAreaHeight}px` } : {}}
                    required={required || null}
                    aria-describedby={!valid ? messageId : null}
                    aria-invalid={!valid || null}
                />
            </div>
            {!valid && (
                <div
                    className={styles.errorMessage}
                    aria-live="assertive"
                    id={messageId}
                >
                    {message}
                </div>
            )}
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    required: PropTypes.bool,
    message: PropTypes.string,
    value: PropTypes.string,
    valid: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    maxLength: PropTypes.number,
    textArea: PropTypes.bool,
    textAreaHeight: PropTypes.number,
    fullSize: PropTypes.bool,
};

InputField.defaultProps = {
    valid: true,
    textArea: false,
    fullSize: false,
};

export default InputField;

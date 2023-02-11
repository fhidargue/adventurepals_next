import { useEffect, useRef, useState } from "react";
import styles from "./Newsletter.module.scss";
import { Title, Text, Icon, InputField } from "../../components";
import PropTypes from "prop-types";

const Newsletter = (props) => {
    const {
        title,
        altText,
        ctaText,
        message,
        successMessage,
        invalidEmailMessage,
        systemErrorMessage,
        placeholder,
    } = props;

    const submitRef = useRef();

    const FORM_FIELDS = {
        EMAIL: "email",
    };

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [valid, setValid] = useState(true);
    const [state, setState] = useState({
        formData: {
            [FORM_FIELDS.EMAIL]: "",
        },
        invalidFields: [],
        nonFieldError: null,
    });

    const { formData, invalidFields } = state;

    useEffect(() => {
        if (invalidFields.length !== 0) setValid(false);
    }, [invalidFields]);
    console.log("invalidFields: ", invalidFields);

    const inputError = invalidFields.includes("SERVER_ERROR")
        ? systemErrorMessage
        : invalidEmailMessage;

    const onChangeInput = (target) => {
        setValid(true);
        setState((prevState) => ({
            invalidFields: [],
            formData: { ...prevState.formData, [target.name]: target.value },
        }));
    };

    const validate = (form) => {
        const formValidity = form.checkValidity();
        const errorList = [];
        Array.from(form).forEach((elem) => {
            if (
                elem.nodeName.toLowerCase() !== "button" &&
                !elem.validity.valid
            ) {
                errorList.push(elem.name);
            }
        });
        setState((prevState) => ({
            ...prevState,
            nonFieldError: null,
            invalidFields: errorList,
        }));
        return formValidity && !errorList.length;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(e.target)) {
            setValid(true);

            fetch("/api/newsletter", {
                method: "post",
                body: JSON.stringify(formData),
            })
                .then((r) => {
                    if (r.status === 200) {
                        setSuccess(true);
                    } else {
                        setError(true);
                    }
                })
                .catch(() => {
                    setError(true);
                });
        }
    };

    return (
        <section className={styles.container} aria-label={altText}>
            <div className={styles.wrapper}>
                <Title
                    title={title}
                    level="div"
                    style="h2"
                    color="black"
                    className={styles.title}
                />
                {!success && (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className={styles.innerContainer}>
                            <InputField
                                className={styles.input}
                                name={FORM_FIELDS.EMAIL}
                                type="email"
                                placeholder={placeholder}
                                onChange={onChangeInput}
                                value={formData[FORM_FIELDS.EMAIL]}
                                valid={
                                    !invalidFields.includes(FORM_FIELDS.EMAIL)
                                }
                                message={inputError}
                                required
                            />
                            <div className={styles.buttonContainer}>
                                <button
                                    className={styles.submitButton}
                                    type="submit"
                                    ref={submitRef}
                                >
                                    {ctaText}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
                {error && (
                    <div
                        aria-live="assertive"
                        className={styles.messageContainer}
                    >
                        <Text
                            text={systemErrorMessage}
                            size="main-copy"
                            color="red"
                        />
                    </div>
                )}
                {success && valid && (
                    <div
                        aria-live="assertive"
                        className={styles.messageContainer}
                    >
                        <Icon className={styles.icon} name="check" size="lg" />
                        <Text
                            text={successMessage}
                            size="main-copy"
                            color="black"
                        />
                    </div>
                )}
                <Text text={message} size="md" color="black" />
            </div>
        </section>
    );
};

Newsletter.propTypes = {
    title: PropTypes.string.isRequired,
    altText: PropTypes.string,
    ctaText: PropTypes.string.isRequired,
    successMessage: PropTypes.string,
    invalidEmailMessage: PropTypes.string,
    systemErrorMessage: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    message: PropTypes.string,
};

Newsletter.defaultProps = {
    title: "Newsletter component",
    ctaText: "SUBMIT",
    successMessage: "Your email was sent successfully!",
    invalidEmailMessage: "Please enter a valid email address.",
    systemErrorMessage: "Something went wrong, please try again later.",
    placeholder: "Your email address",
};

export default Newsletter;

import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ContactUs.module.scss";
import { Icon, Text, Title, InputField } from "../../components";
import {
    INPUT_TEXT_REGEX,
    INVALID_SYMBOLS_REGEX,
} from "../../resources/constants";
import { replaceSymbols } from "../../resources/utils";

const ContactUs = (props) => {
    const {
        address,
        phone,
        email,
        title,
        namePlaceholder,
        emailPlaceholder,
        messagePlaceholder,
        buttonText,
        successMessage,
        invalidName,
        invalidEmail,
        invalidMessage,
        systemErrorMessage,
    } = props;

    const submitRef = useRef();

    const FORM_FIELDS = {
        NAME: "name",
        EMAIL: "email",
        MESSAGE: "message",
    };

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [valid, setValid] = useState(true);
    const [state, setState] = useState({
        formData: {
            [FORM_FIELDS.NAME]: "",
            [FORM_FIELDS.EMAIL]: "",
            [FORM_FIELDS.MESSAGE]: "",
        },
        invalidFields: [],
        nonFieldError: null,
    });

    const onChangeInput = (target) => {
        setValid(true);
        setState((prevState) => ({
            invalidFields: [],
            formData: { ...prevState.formData, [target.name]: target.value },
        }));
    };

    const { formData, invalidFields } = state;

    useEffect(() => {
        if (invalidFields.length !== 0) setValid(false);
    }, [invalidFields]);

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
            if (
                (elem.name === FORM_FIELDS.NAME ||
                    elem.name === FORM_FIELDS.MESSAGE) &&
                elem.value !== ""
            ) {
                !INPUT_TEXT_REGEX.test(elem.value)
                    ? errorList.push(elem.name)
                    : INVALID_SYMBOLS_REGEX.test(elem.value)
                    ? errorList.push(elem.name)
                    : null;
            }
        });
        setState((prevState) => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                [FORM_FIELDS.NAME]: replaceSymbols(formData.name),
                [FORM_FIELDS.MESSAGE]: replaceSymbols(formData.message),
            },
            nonFieldError: null,
            invalidFields: errorList,
        }));
        return formValidity && !errorList.length;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(e.target)) {
            setValid(true);

            fetch("/api/contact", {
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
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.information}>
                    <div className={styles.card}>
                        <div className={styles.iconContainer}>
                            <Icon
                                name={address.icon}
                                alt="Address icon"
                                inline
                                size="lg"
                                imageDecorative
                            />
                        </div>
                        <Title
                            title={address.title}
                            className={styles.cardTitle}
                            level="div"
                            style="h3"
                            textAlign="center"
                            color="richBlack"
                        />
                        {address.line1 && (
                            <Text
                                className={styles.addressLine}
                                text={address.line1}
                                size="md"
                                color="black"
                                weight="normal"
                            />
                        )}
                        {address.line2 && (
                            <Text
                                className={styles.addressLine}
                                text={address.line2}
                                size="md"
                                color="black"
                                weight="normal"
                            />
                        )}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconContainer}>
                            <Icon
                                name={phone.icon}
                                alt="Phone icon"
                                inline
                                size="lg"
                                imageDecorative
                            />
                        </div>
                        <Title
                            title={phone.title}
                            className={styles.cardTitle}
                            level="div"
                            style="h3"
                            textAlign="center"
                            color="richBlack"
                        />
                        <a href={`tel:${phone.number}`} className={styles.link}>
                            <Text
                                className={styles.phoneText}
                                text={phone.number}
                                size="md"
                                color="black"
                                weight="normal"
                            />
                        </a>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.iconContainer}>
                            <Icon
                                name={email.icon}
                                alt="Email icon"
                                inline
                                size="lg"
                                imageDecorative
                            />
                        </div>
                        <Title
                            title={email.title}
                            className={styles.cardTitle}
                            level="div"
                            style="h3"
                            textAlign="center"
                            color="richBlack"
                        />
                        {email.address && (
                            <a
                                href={`mailto:${email.address}`}
                                className={styles.link}
                            >
                                <Text
                                    className={styles.email}
                                    text={email.address}
                                    size="md"
                                    color="black"
                                    weight="normal"
                                />
                            </a>
                        )}
                        {email.address2 && (
                            <a
                                href={`mailto:${email.address2}`}
                                className={styles.link}
                            >
                                <Text
                                    className={styles.email}
                                    text={email.address2}
                                    size="md"
                                    color="black"
                                    weight="normal"
                                />
                            </a>
                        )}
                    </div>
                </div>
                <div className={styles.contactForm}>
                    <Title
                        title={title}
                        level="div"
                        style="h2"
                        color="black"
                        className={styles.formTitle}
                    />
                    {!success && (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className={styles.innerContainer}>
                                <InputField
                                    className={styles.input}
                                    name={FORM_FIELDS.NAME}
                                    type="text"
                                    placeholder={namePlaceholder}
                                    onChange={onChangeInput}
                                    value={formData[FORM_FIELDS.NAME]}
                                    valid={
                                        !invalidFields.includes(
                                            FORM_FIELDS.NAME
                                        )
                                    }
                                    message={invalidName}
                                    fullSize
                                    required
                                />
                                <InputField
                                    className={styles.input}
                                    name={FORM_FIELDS.EMAIL}
                                    type="email"
                                    placeholder={emailPlaceholder}
                                    onChange={onChangeInput}
                                    value={formData[FORM_FIELDS.EMAIL]}
                                    valid={
                                        !invalidFields.includes(
                                            FORM_FIELDS.EMAIL
                                        )
                                    }
                                    message={invalidEmail}
                                    fullSize
                                    required
                                />
                                <InputField
                                    className={styles.input}
                                    name={FORM_FIELDS.MESSAGE}
                                    type="text"
                                    placeholder={messagePlaceholder}
                                    onChange={onChangeInput}
                                    value={formData[FORM_FIELDS.MESSAGE]}
                                    valid={
                                        !invalidFields.includes(
                                            FORM_FIELDS.MESSAGE
                                        )
                                    }
                                    message={invalidMessage}
                                    textArea
                                    textAreaHeight={200}
                                    maxLength={450}
                                    fullSize
                                    required
                                />
                                <div className={styles.buttonContainer}>
                                    <button
                                        className={styles.submitButton}
                                        type="submit"
                                        ref={submitRef}
                                    >
                                        {buttonText}
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
                            <Icon
                                className={styles.icon}
                                name="check"
                                size="lg"
                            />
                            <Text
                                text={successMessage}
                                size="main-copy"
                                color="black"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

ContactUs.propTypes = {
    address: PropTypes.object.isRequired,
    phone: PropTypes.object.isRequired,
    email: PropTypes.object.isRequired,
    title: PropTypes.string,
    namePlaceholder: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    messagePlaceholder: PropTypes.string,
    buttonText: PropTypes.string,
    successMessage: PropTypes.string,
    invalidName: PropTypes.string,
    invalidEmail: PropTypes.string,
    invalidMessage: PropTypes.string,
    systemErrorMessage: PropTypes.string,
};

export default ContactUs;

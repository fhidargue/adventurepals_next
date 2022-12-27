import styles from "./Errors.module.scss";
import PropTypes from "prop-types";
import { Title, Text, Button } from "../../components";
import Image from "next/image";

const Errors = (props) => {
    const { title, errorMessage, errorSubmessage, button } = props;

    return (
        <section className={styles.container}>
            <div className={styles.layer}>
                <Image
                    src="/figures/round-line.png"
                    alt="round line"
                    width={96}
                    height={106}
                    className={styles.roundLine}
                    tabIndex={-1}
                />
                <Image
                    src="/figures/animal.png"
                    alt="animal"
                    width={280}
                    height={421}
                    className={styles.animal}
                    tabIndex={-1}
                    priority
                />
            </div>
            <div className={styles.wrapper}>
                <Title
                    title={title}
                    level="div"
                    style="xl"
                    color="black"
                    textAlign="center"
                />
                <Text
                    text={errorMessage}
                    size="lg"
                    color="black"
                    weight="bold"
                    className={styles.message}
                />
                <Text
                    text={errorSubmessage}
                    size="md"
                    color="black"
                    className={styles.submessage}
                />
                <Button
                    tag="a"
                    text={button.text}
                    url={button.url}
                    linkTarget={button.target}
                    type={button.type}
                    color="black"
                    className={styles.button}
                />
            </div>
        </section>
    );
};

Errors.propTypes = {
    title: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    errorSubmessage: PropTypes.string.isRequired,
    button: PropTypes.object.isRequired,
};

export default Errors;

import PropTypes from "prop-types";
import styles from "./ParkTickets.module.scss";
import { Label, Title, Icon, Text, Button } from "../../components";
import { useDesktop } from "../../lib/useBreakpoints";

const ParkTickets = (props) => {
    const {
        label,
        title,
        description,
        steps,
        button,
        image,
        imageAlt,
        mobileImage,
        id,
    } = props;

    const isDesktop = useDesktop();

    return (
        <section className={styles.container} id={id}>
            <div className={styles.wrapper}>
                <div className={styles.leftContent}>
                    <Label text={label} type="secondary" />
                    <Title
                        className={styles.title}
                        title={title}
                        textAlign="left"
                        level="div"
                        style="h2"
                        color="rickBlack"
                    />
                    <Text
                        className={styles.description}
                        text={description}
                        size="md"
                        color="richBlack"
                        weight="normal"
                        p
                    />
                    <ul className={styles.steps}>
                        {steps.map((step, index) => {
                            return (
                                <li
                                    className={styles.stepWrapper}
                                    key={`step-${index}`}
                                >
                                    <Icon
                                        className={styles.iconButton}
                                        name="check-circle"
                                        aria-label="Checked circle"
                                        size="lg"
                                        imageDecorative
                                    />
                                    <Text
                                        className={styles.stepText}
                                        text={step}
                                        size="md"
                                        color="richBlack"
                                        weight="normal"
                                        p
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <Button
                        url={button.url}
                        text={button.text}
                        linkTarget={button.target}
                        type="tertiaryYellow"
                        color="black"
                        tag="a"
                    />
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.iconContainer}>
                        <img
                            src={!isDesktop ? mobileImage : image}
                            alt={imageAlt}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

ParkTickets.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    steps: PropTypes.array,
    button: PropTypes.object,
    image: PropTypes.string,
    mobileImage: PropTypes.string,
    imageAlt: PropTypes.string,
    id: PropTypes.string,
};

export default ParkTickets;

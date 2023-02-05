import PropTypes from "prop-types";
import styles from "./ParkTickets.module.scss";
import { Label, Title, Icon, Text, Button } from "../../components";
import Image from "next/image";

const ParkTickets = (props) => {
    const { label, title, description, steps, button, image, imageAlt, id } =
        props;

    return (
        <section className={styles.container} id={id}>
            <div className={styles.layer}>
                <Image
                    src="/figures/yellow-circle.png"
                    alt="yellow circle"
                    width={27}
                    height={21}
                    className={styles.yellowCircle}
                />
                <Image
                    src="/figures/round-line.png"
                    alt="round line"
                    width={97}
                    height={106}
                    className={styles.roundLine}
                />
                <Image
                    src="/figures/black-circle.png"
                    alt="single line"
                    width={18}
                    height={14}
                    className={styles.blackCircle}
                />
            </div>
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
                            src={image}
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
    imageAlt: PropTypes.string,
    id: PropTypes.string,
};

export default ParkTickets;

import PropTypes from "prop-types";
import styles from "./HotelCard.module.scss";
import { Text, Button } from "../../components";

const HotelCard = (props) => {
    const {
        image,
        imageAlt,
        label,
        title,
        button,
        circleImage,
        circleAtl,
        circleText,
    } = props;

    return (
        <li className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={image} alt={imageAlt} className={styles.image} />
            </div>
            <div className={styles.content}>
                <span className={styles.label}>{label}</span>
                <Text
                    className={styles.title}
                    text={title}
                    size="md"
                    color="richBlack"
                    weight="normal"
                    p
                />
                <div className={styles.separator}></div>
                <div className={styles.bottom}>
                    <Button
                        url={button.url}
                        text={button.text}
                        linkTarget={button.target}
                        type="tertiaryNoArrow"
                        color="black"
                        tag="a"
                    />
                    <div className={styles.info}>
                        <img
                            src={circleImage}
                            alt={circleAtl}
                            className={styles.image}
                        />
                        <Text
                            className={styles.infoText}
                            text={circleText}
                            size="sm"
                            color="richBlack"
                            weight="bold"
                        />
                    </div>
                </div>
            </div>
        </li>
    );
};

HotelCard.propTypes = {
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    button: PropTypes.object,
    circleImage: PropTypes.string,
    circleAtl: PropTypes.string,
    circleText: PropTypes.string,
};

export default HotelCard;

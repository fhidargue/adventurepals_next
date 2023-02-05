import PropTypes from "prop-types";
import styles from "./ParkCard.module.scss";
import Image from "next/image";
import { Button, Label, Text, Icon } from "../../components";

const ParkCard = (props) => {
    const {
        image,
        imageAlt,
        label,
        title,
        buttonAlt,
        buttonIcon,
        buttonTarget,
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    src={image}
                    aria-label={imageAlt}
                    className={styles.image}
                />
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomInner}>
                    <div className={styles.texts}>
                        <Label text={label} type="tertiary" />
                        <Text
                            text={title}
                            color="richBlack"
                            weight="bold"
                            className={styles.name}
                        />
                    </div>
                    <Button
                        tag="a"
                        ariaLabel={buttonAlt}
                        linkTarget={buttonTarget}
                        type="download"
                        url="#"
                    >
                        <Icon
                            className={styles.iconButton}
                            name={buttonIcon}
                            aria-label={buttonIcon}
                            size="lg"
                            imageDecorative
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

ParkCard.propTypes = {
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    buttonAlt: PropTypes.string,
    buttonIcon: PropTypes.string,
    buttonTarget: PropTypes.string,
};

export default ParkCard;

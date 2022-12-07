import styles from "./PlaceCard.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";
import { Button, Label, Text, Icon } from "../../components";

const PlaceCard = (props) => {
    const { card } = props;
    return (
        <li className={styles.placeCard}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image
                        fill
                        src={card.image}
                        alt={card.imageAlt}
                        sizes="100%"
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.texts}>
                    <Label text={card.label} type="tertiary" />
                    <Text text={card.title} color="richBlack" weight="bold" />
                </div>
                <Button
                    tag="a"
                    ariaLabel={card.buttonAlt}
                    linkTarget={card.buttonTarget}
                    url={card.buttonUrl}
                    type="icon"
                >
                    <Icon
                        className={styles.iconButton}
                        name="arrow-right-white"
                        aria-label="arrow right"
                        size="lg"
                    />
                </Button>
            </div>
        </li>
    );
};

PlaceCard.propTypes = {
    card: PropTypes.object.isRequired,
};

export default PlaceCard;

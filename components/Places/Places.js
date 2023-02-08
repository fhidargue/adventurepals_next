import styles from "./Places.module.scss";
import { Label, Title, Card, PlaceCard } from "../../components";
import PropTypes from "prop-types";

const Places = (props) => {
    const { label, title, places, card } = props;
    return (
        <section className={styles.places}>
            <div className={styles.topSection}>
                <Label text={label} type="secondary" />
                <Title
                    title={title}
                    textAlign="center"
                    level="div"
                    style="h2"
                    color="rickBlack"
                />
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.placeCards}>
                    {places.map((place, index) => {
                        return <PlaceCard card={place} key={index} />;
                    })}
                </ul>
            </div>
            <div className={styles.card}>
                <Card
                    buttonText={card.buttonText}
                    buttonUrl={card.buttonUrl}
                    buttonTarget={card.buttonTarget}
                    description={card.description}
                />
            </div>
        </section>
    );
};

Places.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    places: PropTypes.array,
    card: PropTypes.object,
};

export default Places;

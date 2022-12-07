import styles from "./Places.module.scss";
import data from "./places.json";
import { Label, Title, Card, PlaceCard } from "../../components";

const Places = () => {
    return (
        <section className={styles.places}>
            <div className={styles.topSection}>
                <Label text={data.label} type="secondary" />
                <Title
                    title={data.title}
                    textAlign="center"
                    level="div"
                    style="h2"
                    color="rickBlack"
                />
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.placeCards}>
                    {data.places.map((place, index) => {
                        return <PlaceCard card={place} key={index} />;
                    })}
                </ul>
            </div>
            <div className={styles.card}>
                <Card
                    buttonText={data.card.buttonText}
                    buttonUrl={data.card.buttonUrl}
                    buttonTarget={data.card.buttonTarget}
                    description={data.card.description}
                />
            </div>
        </section>
    );
};

export default Places;

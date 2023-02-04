import PropTypes from "prop-types";
import styles from "./Hotels.module.scss";
import { Label, Title, HotelCard } from "../../components";

const Hotels = (props) => {
    const { label, title, hotels, id } = props;

    return (
        <section className={styles.container} id={id}>
            <div className={styles.wrapper}>
                <div className={styles.texts}>
                    <Label text={label} type="secondary" />
                    <Title
                        className={styles.title}
                        title={title}
                        textAlign="center"
                        level="div"
                        style="h2"
                        color="rickBlack"
                    />
                </div>
                <ul className={styles.hotels}>
                    {hotels.map((hotel, index) => {
                        return (
                            <HotelCard
                                image={hotel.image}
                                imageAlt={hotel.imageAlt}
                                label={hotel.label}
                                title={hotel.title}
                                button={hotel.button}
                                key={`hotel-${index}`}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

Hotels.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    hotels: PropTypes.array,
    is: PropTypes.string,
};

export default Hotels;

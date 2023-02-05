import PropTypes from "prop-types";
import styles from "./Hotels.module.scss";
import { Label, Title, HotelCard } from "../../components";
import Image from "next/image";

const Hotels = (props) => {
    const { label, title, hotels, id } = props;

    return (
        <section className={styles.container} id={id}>
            <div className={styles.layer}>
                <Image
                    src="/figures/double-circle-line-down.png"
                    alt="Double circle line"
                    width={143}
                    height={54}
                    className={styles.doubleCircle}
                />
                <Image
                    src="/figures/yellow-circle.png"
                    alt="yellow circle"
                    width={27}
                    height={21}
                    className={styles.yellowCircle}
                />
            </div>
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
                                circleImage={hotel.circleImage}
                                circleAtl={hotel.circleAtl}
                                circleText={hotel.circleText}
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

import PropTypes from "prop-types";
import styles from "./ParkCarousel.module.scss";
import { Label, Title, ParkCard } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y, Navigation, Virtual } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

SwiperCore.use([Virtual, Navigation, Pagination]);

const ParkCarousel = (props) => {
    const { label, title, parks } = props;

    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(parks.length);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        Array.from({ length: parks.length }).map(
            (_, index) => `Slide ${index + 1}`
        )
    );

    const prepend = () => {
        setSlides([
            `Slide ${prependNumber.current - 2}`,
            `Slide ${prependNumber.current - 1}`,
            ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, "Slide " + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };

    return (
        <section className={styles.container}>
            <div className={styles.topSection}>
                <Label text={label} type="secondary" className={styles.label} />
                <Title
                    title={title}
                    textAlign="center"
                    level="div"
                    style="h2"
                    color="rickBlack"
                    className={styles.title}
                />
            </div>
            <div className={styles.bottomSection}>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    navigation={true}
                    // slidesOffsetBefore={50}
                    virtual
                >
                    {parks.map((park, index) => {
                        return (
                            <SwiperSlide key={park} virtualIndex={index}>
                                <ParkCard
                                    image={park.image}
                                    imageAlt={park.imageAlt}
                                    label={park.label}
                                    title={park.title}
                                    buttonAlt={park.buttonAlt}
                                    buttonIcon={park.buttonIcon}
                                    buttonTarget={park.buttonTarget}
                                    key={`park-${index}`}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

ParkCarousel.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    parks: PropTypes.array,
};

export default ParkCarousel;

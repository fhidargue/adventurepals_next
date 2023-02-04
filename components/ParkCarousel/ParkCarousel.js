import PropTypes from "prop-types";
import styles from "./ParkCarousel.module.scss";
import { Label, Title, ParkCard } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, A11y, Navigation, Virtual } from "swiper";
import { useMobile } from "../../lib/useBreakpoints";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

const ParkCarousel = (props) => {
    const { label, title, colorBackground, parks, id } = props;

    const isMobile = useMobile();

    return (
        <section className={styles.container} id={id}>
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
            <div
                className={`${styles.bottomSection} ${
                    colorBackground && styles["platinum"]
                }`}
                id="park-carousel"
            >
                <Swiper
                    modules={[A11y]}
                    slidesPerView={isMobile ? 1 : 3}
                    centeredSlides={true}
                    spaceBetween={30}
                    navigation={true}
                    virtual
                >
                    {parks.map((park, index) => {
                        return (
                            <SwiperSlide
                                key={`${park.title}-${index}`}
                                virtualIndex={index}
                            >
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
    colorBackground: PropTypes.bool,
    id: PropTypes.string,
};

export default ParkCarousel;

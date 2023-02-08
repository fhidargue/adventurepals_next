import styles from "./HomepageHero.module.scss";
import PropTypes from "prop-types";
import { Button, Label, Title, Loader } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";

const HomepageHero = (props) => {
    const { slides } = props;

    const [showLoader, setShowLoader] = useState(true);
    const LOAD_TIMER = 1200;

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, [LOAD_TIMER]);
    }, []);

    return (
        <>
            {showLoader ? (
                <Loader />
            ) : (
                <section className={styles.container} id="homepage-hero">
                    <Swiper
                        modules={[Autoplay, Pagination, A11y, EffectFade]}
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        effect="fade"
                        pagination={{
                            clickable: true,
                        }}
                        className={styles.carousel}
                    >
                        {slides.map((slide, index) => {
                            return (
                                <SwiperSlide
                                    key={`Homepage slide ${index + 1}`}
                                >
                                    <div
                                        className={styles.slideContainer}
                                        style={{
                                            backgroundImage: `url(${slide.backgroundImage})`,
                                        }}
                                    >
                                        <div className={styles.layer}></div>
                                        <div className={styles.wrapper}>
                                            <Label
                                                text={slide.label}
                                                type="primary"
                                            />
                                            <Title
                                                title={slide.title}
                                                className={styles.title}
                                                level="h1"
                                                style="h1"
                                                textAlign="center"
                                                color="white"
                                            />
                                            <Button
                                                tag="button"
                                                buttonType="button"
                                                text={slide.buttonText}
                                                type={slide.buttonType}
                                                ariaLabel={slide.buttonAlt}
                                                linkTarget={slide.buttonTarget}
                                                onClick={(e) => {
                                                    e.currentTarget.blur();
                                                }}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </section>
            )}
        </>
    );
};

HomepageHero.propTypes = {
    slides: PropTypes.array,
};

export default HomepageHero;

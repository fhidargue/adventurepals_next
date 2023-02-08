import PropTypes from "prop-types";
import styles from "./QuoteCarousel.module.scss";
import { Icon, Text } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const QuoteCarousel = (props) => {
    const { quoteIcon, quotes } = props;

    return (
        <section className={styles.container} id="quotes">
            <div className={styles.layer}>
                <Image
                    src="/figures/green-circle.png"
                    alt="green circle"
                    width={87}
                    height={87}
                    className={styles.greenCircle}
                />
                <Image
                    src="/figures/yellow-circle2.png"
                    alt="yellow circle"
                    width={58}
                    height={58}
                    className={styles.yellowCircle}
                />
            </div>
            <div className={styles.wrapper}>
                {quoteIcon && (
                    <div className={styles.iconContainer}>
                        <Icon
                            name="quote"
                            alt="icon image"
                            inline
                            size="lg"
                            imageDecorative
                        />
                    </div>
                )}
                <div className={styles.quotes}>
                    <Swiper
                        modules={[Pagination, A11y, Autoplay]}
                        slidesPerView={1}
                        loop={true}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false,
                        }}
                        className={styles.carousel}
                    >
                        {quotes.map((quote, index) => {
                            return (
                                <SwiperSlide key={`Quote-${index}`}>
                                    <div className={styles.quoteContainer}>
                                        <Text
                                            text={quote.title}
                                            size="md"
                                            color="black"
                                            className={styles.quoteTitle}
                                        />
                                        <Text
                                            text={quote.quote}
                                            size="md"
                                            color="black"
                                            className={styles.quoteText}
                                        />
                                        <Text
                                            text={quote.author}
                                            size="sm"
                                            color="black"
                                            className={styles.quoteAuthor}
                                        />
                                        <Text
                                            text={quote.position}
                                            size="sm"
                                            color="black"
                                            className={styles.quotePosition}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

QuoteCarousel.propTypes = {
    quoteIcon: PropTypes.bool,
    quotes: PropTypes.array,
};

export default QuoteCarousel;

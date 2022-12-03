import PropTypes from 'prop-types';
import styles from './AboutUs.module.scss';
import data from './about.json';
import { Label, Title, Text, ProfessionCard } from '../../components';
import Image from 'next/image';
import { useTablet } from '../../lib/useBreakpoints';

const AboutUs = () => {
    const isTablet = useTablet();

    return (
        <>
            <section className={styles.aboutUs}>
                <div className={styles.wrapper}>
                    <div className={styles.leftContent}>
                        {!isTablet ? (
                            <>
                                <div className={styles.backImage}>
                                    <Image
                                        className={styles.image}
                                        src={data.backImage}
                                        alt="About us back image"
                                        width={450}
                                        height={612}
                                        quality={100}
                                    />
                                </div>
                                <div className={styles.frontImage}>
                                    <Image
                                        className={styles.image}
                                        src={data.frontImage}
                                        alt="About us back image"
                                        width={428}
                                        height={340}
                                        quality={100}
                                    />
                                </div>
                                <div className={styles.circle}>
                                    <Text
                                        className={styles.circleText}
                                        text={data.circle.text}
                                        color="white"
                                        weight="normal"
                                        p
                                    />
                                    <Title
                                        className={styles.circleTitle}
                                        title={data.circle.amount}
                                        level="div"
                                        color="white"
                                    />
                                </div>
                            </>
                        ) : null}
                    </div>
                    <div className={styles.rightContent}>
                        <Label text={data.label} type="secondary" />
                        <Title
                            className={styles.title}
                            title={data.title}
                            textAlign="left"
                            level="div"
                            style="h2"
                            color="rickBlack"
                        />
                        <Text
                            className={styles.description}
                            text={data.description}
                            size="md"
                            color="richBlack"
                            weight="normal"
                            p
                        />
                        <Text
                            className={styles.mision}
                            text={data.mision}
                            size="lg"
                            color="richBlack"
                            weight="normal"
                            p
                        />
                        <div className={styles.cards}>
                            {data.cards.map((icon, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={styles.cardSize}
                                    >
                                        <ProfessionCard
                                            icon={icon.icon}
                                            profession={icon.text}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <Text
                            text={data.bottomText}
                            size="md"
                            color="richBlack"
                            weight="normal"
                            p
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;

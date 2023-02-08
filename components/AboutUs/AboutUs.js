import styles from "./AboutUs.module.scss";
import { Label, Title, Text, ProfessionCard } from "../../components";
import Image from "next/image";
import PropTypes from "prop-types";

const AboutUs = (props) => {
    const {
        label,
        title,
        description,
        mission,
        cards,
        bottomText,
        backImage,
        frontImage,
        mobileImage,
        circle,
    } = props;

    return (
        <section className={styles.aboutUs}>
            <div className={styles.layer}>
                <Image
                    src="/figures/yellow-circle.png"
                    alt="yellow circle"
                    width={27}
                    height={21}
                    className={styles.yellowCircle}
                />
                <Image
                    src="/figures/three-lines.png"
                    alt="three lines"
                    width={53}
                    height={54}
                    className={styles.threeLines}
                />
                <Image
                    src="/figures/round-line.png"
                    alt="round line"
                    width={97}
                    height={106}
                    className={styles.roundLine}
                />
                <Image
                    src="/figures/single-line.png"
                    alt="single line"
                    width={70}
                    height={34}
                    className={styles.singleLine}
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.leftContent}>
                    <div className={styles.backImage}>
                        <Image
                            className={styles.image}
                            src={backImage}
                            alt="About us back image"
                            width={450}
                            height={612}
                            quality={100}
                        />
                    </div>
                    <div className={styles.frontImage}>
                        <Image
                            className={styles.image}
                            src={frontImage}
                            alt="About us front image"
                            width={428}
                            height={340}
                            quality={100}
                            priority
                        />
                    </div>
                    <div className={styles.circle}>
                        <Text
                            className={styles.circleText}
                            text={circle.text}
                            color="white"
                            weight="normal"
                            p
                        />
                        <Title
                            className={styles.circleTitle}
                            title={circle.amount}
                            level="div"
                            color="white"
                        />
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <Label text={label} type="secondary" />
                    <Title
                        className={styles.title}
                        title={title}
                        textAlign="left"
                        level="div"
                        style="h2"
                        color="rickBlack"
                    />
                    <Text
                        className={styles.description}
                        text={description}
                        size="md"
                        color="richBlack"
                        weight="normal"
                        p
                    />
                    <Text
                        className={styles.mision}
                        text={mission}
                        size="lg"
                        color="richBlack"
                        weight="normal"
                        p
                    />
                    <div className={styles.cards}>
                        {cards.map((icon, index) => {
                            return (
                                <div key={index} className={styles.cardSize}>
                                    <ProfessionCard
                                        icon={icon.icon}
                                        profession={icon.text}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <Text
                        text={bottomText}
                        size="md"
                        color="richBlack"
                        weight="normal"
                        p
                    />
                </div>
            </div>
        </section>
    );
};

AboutUs.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    mission: PropTypes.string,
    cards: PropTypes.array,
    bottomText: PropTypes.string,
    backImage: PropTypes.string,
    frontImage: PropTypes.string,
    mobileImage: PropTypes.string,
    circle: PropTypes.object,
};

export default AboutUs;

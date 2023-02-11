import styles from "./Services.module.scss";
import Image from "next/image";
import { Label, Title, Text, ServiceCard, Link } from "../../components";
import PropTypes from "prop-types";

const Services = (props) => {
    const { label, title, description, cta, services } = props;

    return (
        <section className={styles.services}>
            <div className={styles.layer}>
                <Image
                    src="/figures/yellow-circle.png"
                    alt="yellow circle"
                    width={27}
                    height={21}
                    className={styles.yellowCircle}
                />
                <Image
                    src="/figures/round-line.png"
                    alt="round line"
                    width={97}
                    height={106}
                    className={styles.roundLine}
                />
                <Image
                    src="/figures/stroke.png"
                    alt="stroke line"
                    width={166}
                    height={117}
                    className={styles.stroke}
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.label}>
                    <Label text={label} type="secondary" />
                </div>
                <div className={styles.topSection}>
                    <Title
                        title={title}
                        textAlign="left"
                        level="div"
                        style="h2"
                        color="rickBlack"
                    />
                    <div>
                        <Text
                            className={styles.description}
                            text={description}
                            size="md"
                            color="richBlack"
                            weight="normal"
                            p
                        />
                        {cta && (
                            <Link
                                text={cta.text}
                                url={cta.link}
                                target={cta.target}
                                type={cta.type}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <ol className={styles.serviceList}>
                        {services.map((service, index) => {
                            return (
                                <li
                                    className={styles.serviceItem}
                                    key={`Service card ${index + 1}`}
                                >
                                    <ServiceCard service={service} />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
};

Services.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    ctaL: PropTypes.object,
    services: PropTypes.array,
};

export default Services;

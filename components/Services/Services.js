import styles from './Services.module.scss';
import data from './services.json';
import Image from 'next/image';
import { Label, Title, Text, ServiceCard, Link } from '../../components';

const Services = () => {
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
                    <Label text={data.label} type="secondary" />
                </div>
                <div className={styles.topSection}>
                    <Title
                        title={data.title}
                        textAlign="left"
                        level="div"
                        style="h2"
                        color="rickBlack"
                    />
                    <div>
                        <Text
                            className={styles.description}
                            text={data.description}
                            size="md"
                            color="richBlack"
                            weight="normal"
                            p
                        />
                        <Link
                            text={data.cta.text}
                            url={data.cta.link}
                            target={data.cta.target}
                            type={data.cta.type}
                        />
                    </div>
                </div>
                <div className={styles.bottomSection}>
                    <ol className={styles.serviceList}>
                        {data.services.map((service, index) => {
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

export default Services;

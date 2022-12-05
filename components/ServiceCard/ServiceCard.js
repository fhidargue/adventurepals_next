import styles from './ServiceCard.module.scss';
import PropTypes from 'prop-types';
import { Icon, Title, Text, Button } from '../../components';

const ServiceCard = (props) => {
    const { service } = props;

    return (
        <div className={styles.serviceCard}>
            <div className={styles.content}>
                <div
                    className={`${styles.iconContainer} ${
                        styles[service.background]
                    }`}
                >
                    <Icon
                        name={service.icon}
                        alt="icon image"
                        inline
                        size="lg"
                    />
                </div>
                <Title
                    title={service.title}
                    level="div"
                    style="h3"
                    textAlign="center"
                    color="richBlack"
                />
                <ul className={styles.features}>
                    {service.features.map((feature, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <Icon
                                    name="check"
                                    alt="check icon"
                                    inline
                                    size="md"
                                />
                                <Text text={feature} size="md" color="black" />
                            </div>
                        );
                    })}
                </ul>
                <Button
                    url={service.button.link}
                    text={service.button.text}
                    linkTarget={service.button.target}
                    type="tertiary"
                    color="black"
                    tag="a"
                />
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
};

export default ServiceCard;

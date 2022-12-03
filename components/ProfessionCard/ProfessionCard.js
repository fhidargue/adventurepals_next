import PropTypes from 'prop-types';
import styles from './ProfessionCard.module.scss';
import { Icon } from '../../components';

const ProfessionCard = (props) => {
    const { icon, profession } = props;

    return (
        <div className={styles.card}>
            <div className={styles.iconContainer}>
                <Icon name={icon} alt="icon image" inline size="lg" />
            </div>
            <div className={styles.textContainer}>
                <span className={styles.profession}>{profession}</span>
            </div>
        </div>
    );
};

ProfessionCard.propTypes = {
    icon: PropTypes.string,
    iconBackground: PropTypes.string,
    profession: PropTypes.string,
};

export default ProfessionCard;

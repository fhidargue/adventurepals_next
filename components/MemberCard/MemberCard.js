import styles from "./MemberCard.module.scss";
import PropTypes from "prop-types";
import Image from "next/image";
import { Title } from "../../components";

const MemberCard = (props) => {
    const { member } = props;

    return (
        <li className={styles.card}>
            <div className={styles.imageContainer}>
                <Image fill src={member.image} alt={member.imageAlt} priority />
            </div>
            <div className={styles.info}>
                <span className={styles.position}>{member.position}</span>
                <Title
                    className={styles.name}
                    title={member.name}
                    level="div"
                    style="h3"
                    textAlign="center"
                    color="richBlack"
                />
            </div>
        </li>
    );
};

MemberCard.propTypes = {
    member: PropTypes.object.isRequired,
};

export default MemberCard;

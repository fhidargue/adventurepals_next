import styles from "./TeamMembers.module.scss";
import { Label, Title, MemberCard } from "../../components";
import PropTypes from "prop-types";

const TeamMembers = (props) => {
    const { label, title, members } = props;
    return (
        <section className={styles.team}>
            <div className={styles.topSection}>
                <Label text={label} type="secondary" />
                <Title
                    title={title}
                    textAlign="center"
                    level="div"
                    style="h2"
                    color="rickBlack"
                />
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.memberCards}>
                    {members.map((member, index) => {
                        return (
                            <MemberCard
                                member={member}
                                key={`Member ${index + 1}`}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

TeamMembers.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    members: PropTypes.array,
};

export default TeamMembers;

import styles from "./TeamMembers.module.scss";
import data from "./members.json";
import { Label, Title, MemberCard } from "../../components";

const TeamMembers = () => {
    return (
        <section className={styles.team}>
            <div className={styles.topSection}>
                <Label text={data.label} type="secondary" />
                <Title
                    title={data.title}
                    textAlign="center"
                    level="div"
                    style="h2"
                    color="rickBlack"
                />
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.memberCards}>
                    {data.members.map((member, index) => {
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

export default TeamMembers;

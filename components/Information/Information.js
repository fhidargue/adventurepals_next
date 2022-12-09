import styles from "./Information.module.scss";
import data from "./info.json";
import Image from "next/image";
import { Title, Accordion } from "../../components";

const Information = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <Title
                    className={styles.title}
                    title={data.title}
                    textAlign="left"
                    level="div"
                    style="h2"
                    color="rickBlack"
                />
                <div className={styles.content}>
                    <div className={styles.leftSide}>
                        <Image src={data.image} alt={data.imageAlt} fill />
                    </div>
                    <div className={styles.rightSide}>
                        {/* <Accordion data={data.accordion} /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Information;

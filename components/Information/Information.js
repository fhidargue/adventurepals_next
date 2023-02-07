import styles from "./Information.module.scss";
import Image from "next/image";
import { Title, Accordion } from "../../components";
import PropTypes from "prop-types";

const Information = (props) => {
    const { title, image, imageAlt, accordion } = props;

    return (
        <section className={styles.container}>
            <div className={styles.layer}>
                <Image
                    src="/figures/yellow-circle.png"
                    alt="yellow circle"
                    width={18}
                    height={18}
                    className={styles.yellowCircle}
                />
                <Image
                    src="/figures/circle.png"
                    alt="round line"
                    width={16}
                    height={16}
                    className={styles.circle}
                />
                <Image
                    src="/figures/double-circle-line.png"
                    alt="stroke line"
                    width={113}
                    height={84}
                    className={styles.doubleCircle}
                />
            </div>
            <div className={styles.wrapper}>
                <Title
                    className={styles.title}
                    title={title}
                    textAlign="left"
                    level="div"
                    style="h2"
                    color="rickBlack"
                />
                <div className={styles.content}>
                    <div className={styles.leftSide}>
                        <Image src={image} alt={imageAlt} fill />
                    </div>
                    <div className={styles.rightSide}>
                        <Accordion
                            accordion={accordion}
                            textColor="richBlack"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

Information.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    accordion: PropTypes.array,
};

export default Information;

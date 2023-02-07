import PropTypes from "prop-types";
import styles from "./Faq.module.scss";
import { Title, FaqButton } from "../../components";

const Faq = (props) => {
    const { title, faqs } = props;

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <Title
                    title={title}
                    textAlign="center"
                    level="div"
                    style="h2"
                    color="rickBlack"
                    className={styles.title}
                />
                <div className={styles.faqs}>
                    {faqs.map((faq, index) => {
                        return (
                            <FaqButton
                                faq={faq}
                                number={index + 1}
                                key={`FAQ-${index}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

Faq.propTypes = {
    title: PropTypes.string,
    faqs: PropTypes.array,
};

export default Faq;

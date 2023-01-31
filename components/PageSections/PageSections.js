import PropTypes from "prop-types";
import styles from "./PageSections.module.scss";
import { Icon, Text, Button, Title } from "../../components";

const PageSections = (props) => {
    const { sections } = props;

    const goToSection = (section) => {
        if (window !== "undefined") {
            console.log(window.location.href + `${section}`);
            return window.location.href + `${section}`;
        }
    };

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                {sections.map((item, index) => {
                    return (
                        <div
                            className={styles.section}
                            key={`section-${index}`}
                        >
                            <div
                                className={`${styles.iconContainer} ${
                                    styles[item.background]
                                }`}
                            >
                                <Icon
                                    name={item.icon}
                                    alt={`${item} icon`}
                                    inline
                                    size="lg"
                                    imageDecorative
                                />
                            </div>
                            <a href={item.url} className={styles.sectionLink}>
                                <Title
                                    title={item.title}
                                    level="div"
                                    style="h3"
                                    textAlign="center"
                                    color="richBlack"
                                />
                            </a>
                            <Text
                                className={styles.description}
                                text={item.description}
                                size="md"
                                color="black"
                                weight="normal"
                                p
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

PageSections.propTypes = {
    sections: PropTypes.object.isRequired,
};

export default PageSections;

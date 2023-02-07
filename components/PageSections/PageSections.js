import PropTypes from "prop-types";
import styles from "./PageSections.module.scss";
import { Icon, Text, Button, Title } from "../../components";

const PageSections = (props) => {
    const { sections, hasLinks } = props;

    const goToSection = (section) => {
        if (window !== "undefined") {
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
                            {hasLinks ? (
                                <a
                                    href={item.url}
                                    className={styles.sectionLink}
                                >
                                    <Title
                                        title={item.title}
                                        level="div"
                                        style="h3"
                                        textAlign="center"
                                        color="richBlack"
                                    />
                                </a>
                            ) : (
                                <Title
                                    title={item.title}
                                    level="div"
                                    style="h3"
                                    textAlign="center"
                                    color="richBlack"
                                />
                            )}
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
    sections: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default PageSections;

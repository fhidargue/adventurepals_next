import { useState } from "react";
import { Text, Button, Title, Icon } from "../../components";
import styles from "./Accordion.module.scss";
import PropTypes from "prop-types";

const Accordion = (props) => {
    const { accordion, textColor } = props;
    const firstElement = accordion.map((_, i) => i === 0);
    const [openSections, setOpenSections] = useState(firstElement);

    const getSiblingsArray = (target) => {
        const closestUL = target.closest(`.${styles.list}`);
        let sibling = closestUL.firstChild;
        let siblings = [];

        while (sibling) {
            if (sibling.nodeName === "LI") {
                siblings.push(sibling.querySelector(`.${styles.heading}`));
            }
            sibling = sibling.nextSibling;
        }
        return siblings;
    };

    const onKeyDown = ({ keyCode, target }) => {
        const accordionsList = getSiblingsArray(target);
        const accordionIndex = Array.from(accordionsList).indexOf(target);
        const previousAccordion = accordionsList[accordionIndex - 1];
        const nextAccordion = accordionsList[accordionIndex + 1];
        let accordionToFocus;

        switch (keyCode) {
            case 38: //up
                accordionToFocus = previousAccordion
                    ? previousAccordion
                    : accordionsList[accordionsList.length - 1];
                break;
            case 40: // down
                accordionToFocus = nextAccordion
                    ? nextAccordion
                    : accordionsList[0];
                break;
            case 36: // home
                accordionToFocus = accordionsList[0];
                break;
            case 35: // end
                accordionToFocus = accordionsList[accordionsList.length - 1];
                break;
            default:
                break;
        }

        if (accordionToFocus) {
            accordionToFocus.focus();
        }
    };

    return (
        <>
            {accordion && (
                <div className={styles.accordion}>
                    <ul className={styles.list}>
                        {accordion.map((item, i) => (
                            <li
                                key={i}
                                className={`${styles.section} ${
                                    openSections[i] && styles.sectionOpen
                                }`}
                            >
                                <Button
                                    id={`accordion-heading-${i}`}
                                    aria-expanded={openSections[i]}
                                    aria-controls={`accordion-panel-${i}`}
                                    type="linkButton"
                                    tag="button"
                                    className={styles.heading}
                                    onKeyDown={onKeyDown}
                                    onClick={(e) => {
                                        setOpenSections(
                                            openSections.map(
                                                (section, current) =>
                                                    !section && current === i
                                            )
                                        );
                                        e.preventDefault();
                                    }}
                                >
                                    <Title
                                        level="div"
                                        style="h3"
                                        title={item.title}
                                        color={textColor}
                                        textAlign="left"
                                    />
                                    {openSections[i] ? (
                                        <Icon
                                            className={styles.headingIcon}
                                            name="minus"
                                            size="sm"
                                        />
                                    ) : (
                                        <Icon
                                            className={styles.headingIcon}
                                            name="plus"
                                            size="sm"
                                        />
                                    )}
                                </Button>
                                <div
                                    role="region"
                                    id={`accordion-panel-${i}`}
                                    aria-labelledby={`accordion-heading-${i}`}
                                    aria-hidden={!openSections[i]}
                                    className={`${styles.content} ${
                                        openSections[i] && styles.contentOpen
                                    }`}
                                >
                                    <Text
                                        color={textColor}
                                        size="main-copy"
                                        text={item.information}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

Accordion.defaultProps = {
    accordion: [],
    textColor: "light",
};

Accordion.displayName = "Accordion";

Accordion.propTypes = {
    textColor: PropTypes.string,
    accordion: PropTypes.arrayOf(
        PropTypes.shape({
            information: PropTypes.string,
            title: PropTypes.string,
        })
    ),
};

export default Accordion;

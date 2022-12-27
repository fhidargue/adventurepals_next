import styles from "./SubpageHero.module.scss";
import { Title, Link, Text } from "../../components";
import PropTypes from "prop-types";

const SubpageHero = (props) => {
    const { backImage, title, homeText, homeUrl, homeTarget, pageText } = props;

    return (
        <section
            className={styles.subpageHero}
            style={{ backgroundImage: `url(${backImage})` }}
        >
            <div className={styles.layer}></div>
            <div className={styles.wrapper}>
                <Title
                    title={title}
                    level="h1"
                    style="subpage"
                    color="white"
                    textAlign="center"
                />
                <div className={styles.links}>
                    <Link
                        text={homeText}
                        url={homeUrl}
                        target={homeTarget}
                        type="subpage"
                        className={styles.link}
                    />
                    <div className={styles.line}></div>
                    <Text
                        text={pageText}
                        color="white"
                        className={styles.page}
                    />
                </div>
            </div>
        </section>
    );
};

SubpageHero.propTypes = {
    backImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired,
    homeUrl: PropTypes.string,
    homeTarget: PropTypes.string,
    pageText: PropTypes.string.isRequired,
};

SubpageHero.defaultProps = {
    homeTarget: "_self",
};

export default SubpageHero;

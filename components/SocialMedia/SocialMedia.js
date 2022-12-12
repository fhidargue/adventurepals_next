import styles from "./SocialMedia.module.scss";
import PropTypes from "prop-types";
import { Button, Icon } from "../../components";

const SocialMedia = (props) => {
    const { socialMedia } = props;
    return (
        <ol className={styles.socialMedia}>
            {socialMedia.map((item, index) => {
                return (
                    <li className={styles.item} key={index}>
                        <Button
                            tag="a"
                            ariaLabel={item.alt}
                            linkTarget={item.target}
                            url={item.url}
                            type="socialMedia"
                            className={styles.button}
                        >
                            <div
                                className={`${styles.iconButton} ${
                                    styles[item.icon]
                                }`}
                            ></div>
                        </Button>
                    </li>
                );
            })}
        </ol>
    );
};

SocialMedia.propTypes = {
    socialMedia: PropTypes.array.isRequired,
};

export default SocialMedia;

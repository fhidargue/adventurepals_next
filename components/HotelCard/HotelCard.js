import PropTypes from "prop-types";
import styles from "./HotelCard.module.scss";
import Image from "next/image";
import { Text, Button } from "../../components";

const HotelCard = (props) => {
    const { image, imageAlt, label, title, button } = props;

    return (
        <li className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={image} alt={imageAlt} fill />
            </div>
            <div className={styles.content}>
                <span className={styles.label}>{label}</span>
                <Text
                    className={styles.title}
                    text={title}
                    size="md"
                    color="richBlack"
                    weight="normal"
                    p
                />
                <div className={styles.separator}></div>
                <Button
                    url={button.url}
                    text={button.text}
                    linkTarget={button.target}
                    type="tertiaryNoArrow"
                    color="black"
                    tag="a"
                />
            </div>
        </li>
    );
};

HotelCard.propTypes = {
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string,
    button: PropTypes.object,
};

export default HotelCard;

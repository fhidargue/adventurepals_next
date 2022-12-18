import styles from "./ButtonTop.module.scss";
import { Button, Icon } from "../../components";

const ButtonTop = (props) => {
    const { style } = props;

    const goToTop = () => {
        document.activeElement.blur();
        if (window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <Button
            tag="a"
            type="iconTop"
            className={styles.buttonTop}
            onClick={() => {
                goToTop();
            }}
            onKeyDown={(target) => {
                if (target.keyCode === 13) goToTop();
            }}
            style={style}
            tabIndex={0}
        >
            <Icon
                className={styles.icon}
                name="arrow-right"
                aria-label="arrow right"
                size="lg"
                imageDecorative
            />
        </Button>
    );
};

export default ButtonTop;

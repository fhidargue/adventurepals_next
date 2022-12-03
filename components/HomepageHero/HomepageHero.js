import styles from "./HomepageHero.module.scss";
import data from "./heroData.json";
import { Button, Label, Title } from "../../components";

const HomepageHero = () => {
    return (
        <>
            <section
                className={styles.container}
                style={{
                    backgroundImage: `url(${data.backgroundImage})`,
                }}
            >
                <div className={styles.layer}></div>
                <div className={styles.wrapper}>
                    <Label text={data.label} type="primary" />
                    <Title
                        title={data.title}
                        className={styles.title}
                        level="h1"
                        style="h1"
                        textAlign="center"
                        color="white"
                    />
                    <Button
                        tag="button"
                        buttonType="button"
                        text={data.buttonText}
                        type={data.buttonType}
                        ariaLabel={data.buttonAlt}
                        linkTarget={data.buttonTarget}
                        onClick={(e) => {
                            e.currentTarget.blur();
                        }}
                    />
                </div>
            </section>
        </>
    );
};

export default HomepageHero;

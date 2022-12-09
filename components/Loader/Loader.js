import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <section className={styles.loaderContainer}>
            <div className={styles.loaderWrapper}>
                <img
                    src="/gif/loader.gif"
                    alt="Loading Spinner"
                    className={styles.loader}
                />
            </div>
        </section>
    );
};

export default Loader;

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./VideoBanner.module.scss";
import { Title, Text, Icon, Button } from "../../components";

const VideoBanner = (props) => {
    const { title, description, buttonLink, email, video, buttonVideo } = props;

    const [playVideo, setPlayVideo] = useState(false);

    const videoRef = useRef();

    const onScroll = () => {
        if (window.pageYOffset > 1500) {
            setPlayVideo(false);
            videoRef.current.pause();
        }
    };

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", onScroll);
    }

    const handleVideo = () => {
        if (!playVideo) {
            setPlayVideo(true);
            videoRef.current.play();
        } else {
            setPlayVideo(false);
            videoRef.current.pause();
        }
    };

    useEffect(() => {
        handleVideo();
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.layer}></div>
            <video className={styles.video} ref={videoRef} muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.wrapper}>
                <div className={styles.leftContent}>
                    <Title
                        title={title}
                        className={styles.title}
                        level="h1"
                        style="h1"
                        textAlign="left"
                        color="white"
                    />
                    <Text
                        className={styles.description}
                        text={description}
                        size="md"
                        color="white"
                        weight="normal"
                        p
                    />
                    <div className={styles.bottom}>
                        <Button
                            tag="button"
                            buttonType="button"
                            text={buttonLink.text}
                            type={buttonLink.type}
                            ariaLabel={buttonLink.alt}
                            linkTarget={buttonLink.target}
                            url={buttonLink.url}
                        />
                        <div className={styles.emailSection}>
                            <Text
                                className={styles.emailText}
                                text={email.text}
                                size="sm"
                                color="white"
                                weight="normal"
                                p
                            />
                            <a
                                className={styles.email}
                                href={`mailto:${email.email}`}
                            >
                                {email.email}
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <Button
                        tag="a"
                        type="playPause"
                        className={styles.buttonTop}
                        onClick={() => {
                            handleVideo();
                        }}
                        onKeyDown={(target) => {
                            if (target.keyCode === 13) handleVideo();
                        }}
                        tabIndex={0}
                    >
                        <Icon
                            className={!playVideo ? styles.play : ""}
                            name={
                                !playVideo
                                    ? buttonVideo.playIcon
                                    : buttonVideo.pauseIcon
                            }
                            aria-label={
                                !playVideo
                                    ? buttonVideo.altPlay
                                    : buttonVideo.altPause
                            }
                            size={!playVideo ? "lg" : "xl"}
                            imageDecorative
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
};

VideoBanner.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonLink: PropTypes.object,
    email: PropTypes.object,
    video: PropTypes.string,
    buttonVideo: PropTypes.object,
};

export default VideoBanner;

import { useState } from 'react';
import { Icon } from '../../components';
import Image from 'next/image';
import data from './video.json';
import styles from './Video.module.scss';

const Video = () => {
    const youtubeEmbedUrl =
        'https://www.youtube.com/embed/{0}?autoplay=1&rel=0';
    const [showVideo, setShowVideo] = useState(null);
    let videoId = data.video;

    const videoIdRegex =
        /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/;

    if (data.video && data.video.includes('youtube')) {
        videoId = data.video.match(videoIdRegex)[5];
    }

    const initYoutubeVideo = () => {
        setShowVideo(true);
    };

    return (
        <div className={styles.video}>
            {!showVideo ? (
                <div className={styles.fullWidth} onClick={initYoutubeVideo}>
                    <div className={styles.overlay}></div>
                    <button
                        className={styles.playButton}
                        aria-label={`Play video ${
                            data.altTextVideo ? data.altTextVideo : ''
                        }`}
                        onClick={initYoutubeVideo}
                    >
                        <div className={styles.playIcon}>
                            <Icon name="play" imageDecorative={true} />
                        </div>
                    </button>
                    <div className={styles.inner}>
                        <Image
                            fill
                            src={data.thumbnail}
                            alt={data.altText || data.altTextVideo}
                        />
                    </div>
                </div>
            ) : (
                <div className={styles.fullHeight}>
                    <div className={styles.fullHeight}>
                        <iframe
                            type="text/html"
                            width="100%"
                            height="100%"
                            src={youtubeEmbedUrl.replace('{0}', videoId)}
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Video;

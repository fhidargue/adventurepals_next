import {
    AboutUs,
    HomepageHero,
    Video,
    Services,
    Places,
    Information,
    TeamMembers,
    ContactBanner,
} from "../components";
import data from "../resources/data/home.json";

export default function Home() {
    return (
        <>
            <HomepageHero slides={data.homepageHero.slides} />
            <AboutUs
                label={data.about.label}
                title={data.about.title}
                description={data.about.description}
                mission={data.about.mission}
                cards={data.about.cards}
                bottomText={data.about.bottomText}
                backImage={data.about.backImage}
                frontImage={data.about.frontImage}
                mobileImage={data.about.mobileImage}
                circle={data.about.circle}
            />
            <Video
                thumbnail={data.video.thumbnail}
                video={data.video.video}
                altText={data.video.altText}
                altTextVideo={data.video.altTextVideo}
            />
            <Services
                label={data.services.label}
                title={data.services.title}
                description={data.services.description}
                cta={data.services.cta}
                services={data.services.services}
            />
            <Places
                label={data.places.label}
                title={data.places.title}
                places={data.places.places}
                card={data.places.card}
            />
            <Information
                title={data.information.title}
                image={data.information.image}
                imageAlt={data.information.imageAlt}
                accordion={data.information.accordion}
            />
            <TeamMembers
                label={data.teamMembers.label}
                title={data.teamMembers.title}
                members={data.teamMembers.members}
            />
            <ContactBanner
                question={data.contactBanner.question}
                buttonText={data.contactBanner.buttonText}
                buttonUrl={data.contactBanner.buttonUrl}
                buttonTarget={data.contactBanner.buttonTarget}
            />
        </>
    );
}

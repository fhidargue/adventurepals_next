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
            <HomepageHero />
            <AboutUs />
            <Video />
            <Services
                label={data.services.label}
                title={data.services.title}
                description={data.services.description}
                cta={data.services.cta}
                services={data.services.services}
            />
            <Places />
            <Information />
            <TeamMembers />
            <ContactBanner
                question={data.contactBanner.question}
                buttonText={data.contactBanner.buttonText}
                buttonUrl={data.contactBanner.buttonUrl}
                buttonTarget={data.contactBanner.buttonTarget}
            />
        </>
    );
}

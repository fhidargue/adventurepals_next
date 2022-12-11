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

export default function Home() {
    return (
        <>
            <HomepageHero />
            <AboutUs />
            <Video />
            <Services />
            <Places />
            <Information />
            <TeamMembers />
            <ContactBanner />
        </>
    );
}

import { SubpageHero, Services, ContactBanner } from "../../components";
import data from "../../resources/data/beyond.json";

export default function AndBeyond() {
    return (
        <>
            <SubpageHero
                backImage={data.subpageHero.backImage}
                homeText={data.subpageHero.homeLink.text}
                homeUrl={data.subpageHero.homeLink.url}
                homeTarget={data.subpageHero.homeLink.target}
                title={data.subpageHero.title}
                pageText={data.subpageHero.title}
            />
            <Services
                label={data.services.label}
                title={data.services.title}
                description={data.services.description}
                cta={data.services.cta}
                services={data.services.services}
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

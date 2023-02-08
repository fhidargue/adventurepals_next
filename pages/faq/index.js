import { SubpageHero, ContactBanner, Newsletter, Faq } from "../../components";
import data from "../../resources/data/faq.json";

export default function Faqs() {
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
            <Faq title={data.faq.title} faqs={data.faq.faqs} />
            <ContactBanner
                question={data.contactBanner.question}
                buttonText={data.contactBanner.buttonText}
                buttonUrl={data.contactBanner.buttonUrl}
                buttonTarget={data.contactBanner.buttonTarget}
            />
            <Newsletter
                title={data.newsletter.title}
                altText={data.newsletter.altText}
                ctaText={data.newsletter.button.text}
                successMessage={data.newsletter.successMessage}
                invalidEmailMessage={data.newsletter.invalidEmailMessage}
                systemErrorMessage={data.newsletter.systemErrorMessage}
                placeholder={data.newsletter.placeholder}
                message={data.newsletter.message}
            />
        </>
    );
}

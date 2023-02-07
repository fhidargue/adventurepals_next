import {
    SubpageHero,
    TeamMembers,
    PageSections,
    Newsletter,
    QuoteCarousel,
} from "../../components";
import data from "../../resources/data/about-us.json";

export default function About() {
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
            <TeamMembers
                label={data.teamMembers.label}
                title={data.teamMembers.title}
                members={data.teamMembers.members}
            />
            <QuoteCarousel
                quoteIcon={data.quoteCarousel.quoteIcon}
                quotes={data.quoteCarousel.quotes}
            />
            <PageSections
                sections={data.pageSections.sections}
                hasLinks={data.pageSections.hasLinks}
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

import { Newsletter } from "../components";
import Errors from "../components/Errors/Errors";
import SubpageHero from "../components/SubpageHero/SubpageHero";
import data from "../resources/data/404.json";

const NotFound = () => {
    return (
        <>
            <SubpageHero
                backImage={data.backImage}
                title={data.error.text}
                homeText={data.homeLink.text}
                homeUrl={data.homeLink.url}
                homeTarget={data.homeLink.target}
                pageText={data.error.text}
            />
            <Errors
                title={data.title}
                errorMessage={data.errorMessage}
                errorSubmessage={data.errorSubmessage}
                button={data.homeButton}
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
};

export default NotFound;

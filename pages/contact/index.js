import { SubpageHero, ContactUs } from "../../components";
import data from "../../resources/data/contact-us.json";

export default function Contact() {
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
            <ContactUs
                address={data.contact.information.address}
                phone={data.contact.information.phone}
                email={data.contact.information.email}
                title={data.contact.form.title}
                namePlaceholder={data.contact.form.namePlaceholder}
                emailPlaceholder={data.contact.form.emailPlaceholder}
                messagePlaceholder={data.contact.form.messagePlaceholder}
                buttonText={data.contact.form.buttonText}
                successMessage={data.contact.form.successMessage}
                invalidName={data.contact.form.invalidName}
                invalidEmail={data.contact.form.invalidEmail}
                invalidMessage={data.contact.form.invalidMessage}
                systemErrorMessage={data.contact.form.systemErrorMessage}
            />
        </>
    );
}

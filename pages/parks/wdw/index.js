import {
    ContactBanner,
    Hotels,
    PageSections,
    ParkCarousel,
    ParkTickets,
    VideoBanner,
} from "../../../components";
import data from "../../../resources/data/wdw.json";

export default function Wdw() {
    return (
        <>
            <VideoBanner
                title={data.videoBanner.title}
                description={data.videoBanner.description}
                buttonLink={data.videoBanner.buttonLink}
                email={data.videoBanner.email}
                buttonVideo={data.videoBanner.buttonVideo}
                video={data.videoBanner.video}
            />
            <PageSections sections={data.pageSections.sections} />
            <ParkCarousel
                id={data.themeparkCarousel.id}
                label={data.themeparkCarousel.label}
                title={data.themeparkCarousel.title}
                parks={data.themeparkCarousel.parks}
                colorBackground={data.themeparkCarousel.colorBackground}
            />
            <ParkCarousel
                id={data.waterparkCarousel.id}
                label={data.waterparkCarousel.label}
                title={data.waterparkCarousel.title}
                parks={data.waterparkCarousel.parks}
                colorBackground={data.waterparkCarousel.colorBackground}
            />
            <ParkTickets
                id={data.parktickets.id}
                label={data.parktickets.label}
                title={data.parktickets.title}
                description={data.parktickets.description}
                steps={data.parktickets.steps}
                button={data.parktickets.button}
                image={data.parktickets.image}
                imageAlt={data.parktickets.imageAlt}
            />
            <Hotels
                id={data.hotels.id}
                label={data.hotels.label}
                title={data.hotels.title}
                hotels={data.hotels.hotels}
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

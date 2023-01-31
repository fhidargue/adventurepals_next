import { PageSections, VideoBanner } from "../../../components";
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
        </>
    );
}

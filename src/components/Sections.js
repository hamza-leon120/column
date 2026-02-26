import Enrol from "./Enrol";
import Exams from "./Exams";
import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import Intructors from "./Intructors";
import Offer from "./Offer";
import Publication from "./Publication";
import Recent from "./Recent";
import Trending from "./Trending";
function Sections() {
    return (
        <>
            <Hero />
            <Enrol />
            <Offer />
            <Trending />
            <Exams />
            <Publication />
            <Recent />
            <Intructors />
            <GetInTouch />
        </>
    )
}
export default Sections
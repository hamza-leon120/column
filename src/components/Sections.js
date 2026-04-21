import Enrol from "./Enrol";
import Exams from "./Exams";
import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import Intructors from "./Intructors";
import Offer from "./Offer";
import Publication from "./Publication";
import Recent from "./Recent";
import Trending from "./Trending";
function Sections(prop) {
    return (
        <>
            <Hero data = {prop.data.current}/>
            <Enrol data = {prop.data.current}/>
            <Offer data = {prop.data.current}/>
            <Trending data = {prop.data.current}/>
            <Exams data = {prop.data.current}/>
            <Publication data = {prop.data.current}/>
            <Recent data = {prop.data.current}/>
            <Intructors data = {prop.data.current}/>
            <GetInTouch data = {prop.data.current}/>
            
        </>
    )
}
export default Sections
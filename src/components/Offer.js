import CoButton from "./CoButton"
import Online from "./Online"
function Offer (prop) {
    return(
        <section className="offer" ref={function(ele){return prop.data[2] = ele}}>
            <div className="container">
                <p className="heading">What we offer</p>
                <div>
                    <div className="right-s"></div>
                    <Online one = "Online Courses" two = "Our Course are the best among others" three = "Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam " />
                </div>
            </div>
        </section>
    )
}
export default Offer
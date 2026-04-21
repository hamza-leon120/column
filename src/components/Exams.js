import Online from "./Online"

function Exams (prop) {
    return (
        <section className="exams" ref={function(ele){return prop.data[4] = ele}}>
            <div className="container">
                <Online one = "Online Exams" two = "Our exams prepare you for job opportunity" three = "Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam "/>
                <div className="right-s"></div>
            </div>
        </section>
    )
}

export default Exams
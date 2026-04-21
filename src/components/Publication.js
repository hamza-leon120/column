import Online from "./Online";

function Publication(prop) {
    return (
        <section className="publication" ref={function(ele){return prop.data[5] = ele}}>
            <div className="container">
                <div className="right-s"></div>
                <Online one = "Publication" two = "Publications from the best Authors" three = "Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam " />
            </div>
        </section>
    )
}

export default Publication
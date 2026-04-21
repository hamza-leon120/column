import CoButton from "./CoButton"

function Enrol(prop){
    return(
        <section className="enrol" ref={function(ele){return prop.data[1] = ele}}>
            <div className="container">
                <p className="heading">Enrol for a couse now</p>
                <div>
                    <div className="right">
                        <p>Take your career tothe next level.</p>
                        <p>With indispensable courses</p>
                        <p>Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at</p>
                    </div>
                    <div className="left">
                        <p>Registration for enrolment</p>
                        <form action = "">
                            <input name = "name" type="text" pattern="[a-zA-Z\s]+" placeholder="Full name" required/>
                            <input name = "email" type="email" placeholder="Email" required/>
                            <input name = "Phone number" type="tel" pattern="(05|06|07)[0-9]{8}" placeholder="Phone number" required/>
                            <button type="submit">Apply Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Enrol
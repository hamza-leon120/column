import CoButton from "./CoButton"

function Enrol(){
    return(
        <section className="enrol">
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
                        <input type="text" placeholder="Full name"/>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Phone number"/>
                        <CoButton content = "Apply Now"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Enrol
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import CoButton from "./CoButton"
function GetInTouch(prop) {
    return (
        <section className="get-in-touch" id="Contact-Us" ref={function (ele) { return prop.data[8] = ele }}>
            <div className="container">
                <p className="heading">get in touch</p>
                <p>Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra. Aliquam </p>
                <div className="print">
                    <div className="left">
                        <div className="infos">
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="info">
                                <p>haaymen20@gmail.com</p>
                                <p>lorem ispum lorem ispumlorem ispum </p>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMessage} />
                            </div>
                            <div className="info">
                                <p>+213 553930699</p>
                                <p>lorem ispum lorem ispumlorem ispum </p>
                            </div>
                        </div>
                        <div className="infos">
                            <div className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="info">
                                <p>+213 553930699</p>
                                <p>lorem ispum lorem ispumlorem ispum </p>
                            </div>
                        </div>
                        <div className="icons">
                            <div className="icon">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </div>
                            <div className="icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <form action="">
                            <input name = "name" type="text" pattern="[a-zA-Z\s]+" placeholder="Name" required/>
                            <input name = "email" type="email" placeholder="Email" required/>
                            <input name = "subject" type="text" placeholder="Subject" required/>
                            <textarea name = "message" placeholder="Input Text" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default GetInTouch
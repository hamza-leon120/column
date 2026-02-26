import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMessage, faPhone} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import CoButton from "./CoButton"
function GetInTouch () {
    return (
        <section className="get-in-touch" id="Contact-Us">
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
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                        <input type="text" placeholder="Input Text" />
                        <CoButton content = "Send" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default GetInTouch
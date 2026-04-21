import { faFacebook,faXTwitter,faInstagram,faLinkedinIn  } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import imgOne from '../img/twentyseven.jpg'
import CoButton from "./CoButton"
function Footer (prop){
    return(
        <footer ref={function(ele){return prop.data[9] = ele}}>
            <div className="container">
                <div className="print">
                    <div className="left">
                        <img src = {imgOne}  alt="" />
                        <p>We are not here to sell you products, we sell value through our expertise.</p>
                        <div className="icons">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                    </div>
                    <div className="right">
                        <ul>
                            <li><span>Address:</span> <br/> 38 opebi Road, Ikeja, Lagos State, Nigeia.</li>
                            <li><span>Phone:</span> <br/> +2349022396389</li>
                            <li><span>Email:</span> <br/> contact@contentionary.com</li>
                        </ul>
                        <ul>
                            <li><span>Company</span></li>
                            <li>About Us</li>
                            <li>Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
                <div className="last">
                    <p>Subscribe to get latest updates</p>
                    <div>
                        <input type="text" placeholder="Your Email address" />
                        <CoButton content = "Subscribe" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
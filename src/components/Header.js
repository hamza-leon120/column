import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import img from '../img/Group 180.png'
import { useEffect, useState } from 'react'
function Header() {
    let [clas, setClas] = useState("")
    let [fixed, setFixed] = useState("")
    let [opacity, setOpacity] = useState(1)
    function openn() {
        setClas(function (prv) {
            if (prv === "") {
                return "active"
            } else {
                return ""
            }
        })
    }
    function to(eve) {
        let toY = document.getElementById(`${eve.target.innerHTML.replaceAll(" ", "-")}`).offsetTop
        window.scrollTo({
            top: toY - 105,
            left: 0,
            behavior: 'smooth',
        })
    }
    useEffect(function () {
        function scr() {
            if (clas === "active") {
                setClas("")
            }
            if (window.scrollY >= 200) {
                setOpacity(0)
                if (window.scrollY >= 500) {
                    setOpacity(1)
                    setFixed("fixed")
                }
            }else {
                setFixed("")
                setOpacity(1)
            }
        }
        window.addEventListener('scroll',scr)
        return function () {
            window.removeEventListener("scroll",scr)
        }
    },[clas])
    return (
        <header className={fixed} style={{ opacity: `${opacity}` }}>
            <div className="container">
                <FontAwesomeIcon icon={faBars} onClick={openn} />
                <img src={img} alt="" />
                <ul className={clas}>
                    <li><a onClick={to}>Home</a></li>
                    <li><a onClick={to}>Courses</a></li>
                    <li><a onClick={to}>Publications</a></li>
                    <li><a onClick={to}>Instuctors</a></li>
                    <li><a onClick={to}>Contact Us</a></li>
                </ul>
                <div className='search-user'>
                    <div className='search'>
                        <input type="text" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <div className='user'>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
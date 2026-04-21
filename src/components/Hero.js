import imge from "../img/image 20.png"
import imgOne from "../img/image 18.png"
import one from "../img/one.jpg"
import two from "../img/two.jpg"
import three from "../img/three.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
import CoButton from "./CoButton"
function Hero(prop) {
    let prinet = useRef(null)
    let [translate, setTranslate] = useState(0)
    let [num, setnum] = useState(0)
    const [images,setImages] = useState ([
        { id: 1, img: one },
        { id: 2, img: imgOne },
        { id: 3, img: imge },
        { id: 4, img: two },
        { id: 5, img: three },
    ])
    let imagesJsx = images.map(function (ele) {
        return (
            <img key={ele.id} src={ele.img} alt=""/>
        )
    })
    function right() {
        setnum(function (prv) {
            if (num >= 4) {
                setnum(0)
            }
            return prv + 1
        })
    }
    function left() {
        setnum(function (prv) {
            if (num <= 0) {
                setnum(4)
            }
            return prv - 1
        })
    }
    useEffect(function () {
        let width = parseInt(`-${window.getComputedStyle(prinet.current).width}`)
        setTranslate(width * num)
    }, [num])
    return (
        <div className="hero" id="Home" ref={function (ele) { return prop.data[0] = ele }}>
            <div className="container">
                <div className="first">
                    <p>Take your career to the next level.</p>
                    <p>With indispensable courses</p>
                    <div className="buttons">
                        <CoButton content="Exams" />
                        <CoButton content="Our Courses" />
                    </div>
                </div>
                <div className="secound" ref={prinet} >
                    <div className="arrows">
                        <div onClick={left}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div onClick={right}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                    <div className="slider"  style={{ transform: `translateX(${translate}px)` }} >
                        {imagesJsx}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
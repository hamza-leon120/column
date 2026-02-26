import imgOne from "../img/five.png"
import imgTwo from "../img/six.png"
import imgThree from "../img/seven.png"
import imgfour from "../img/eight.png"
import imgfive from "../img/nine.jpg"
import imgsix from "../img/ten.jpg"
import imgseven from "../img/eleven.jpg"
import imgeight from "../img/twelve.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
function Trending() {
    let e = useRef(null)
    let [translate, setTranslate] = useState("0px")
    let [transition, settransition] = useState("transform 0.3s ease")
    let [arr, setarr] = useState([
        { id: 1, img: imgOne, name: "Game Development" },
        { id: 2, img: imgTwo, name: "Marketing Strategy" },
        { id: 3, img: imgThree, name: "Data Analysis With Python" },
        { id: 4, img: imgfour, name: "Advanced UX Designs" },
        { id: 5, img: imgfive, name: "Technology" },
        { id: 6, img: imgsix, name: "Design" },
        { id: 7, img: imgseven, name: "Programming" },
        { id: 8, img: imgeight, name: "Photography" },
    ])
    let arrJxs = arr.map(function (el, index) {
        return (
            <div ref={e} className={index === 1 ? "Course active" : "Course"} key={el.id} style={{ transform: `translateX(${translate})`, transition: `${transition}` }}>
                <img src={el.img} alt="" />
                <p>{el.name}</p>
            </div>
        )
    })
    function left() {
        let width = parseFloat(window.getComputedStyle(e.current).width)
        let gap = parseFloat(window.getComputedStyle(e.current).marginRight)
        setTranslate(`${width + gap}px`)
        setTimeout(() => {
            settransition("none")
            setTranslate('0px')
            setarr(function (prv) {
                let newArr = [...prv]
                newArr.unshift(newArr.pop())
                return newArr
            })
        }, 300);
        settransition("transform 0.3s ease")
    }
    function right() {
        let width = parseFloat(window.getComputedStyle(e.current).width)
        let gap = parseFloat(window.getComputedStyle(e.current).marginRight)
        setTranslate(`-${width + gap}px`)
        setTimeout(() => {
            settransition("none")
            setTranslate('0px')
            setarr(function (prv) {
                let newArr = [...prv]
                newArr.push(newArr.shift())
                return newArr
            })
        }, 300);
        settransition("transform 0.3s ease")
    }
    return (
        <section className="trending" id="Courses">
            <div className="container">
                <p className="heading">Trending Courses</p>
                <div className="grid">
                    <div className="arrows">
                        <div className="left" onClick={left}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className="right" onClick={right}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                    {arrJxs}
                </div>
            </div>
        </section>
    )
}

export default Trending
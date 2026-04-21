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
function Trending(prop) {
    let slider = useRef(null)
    let [translate, setTranslate] = useState(0)
    let [number, setNumber] = useState(0)
    let [transition, setTransition] = useState("transform 0.2s ease")
    let [arr, setarr] = useState([
        { id: '7 clone', img: imgseven, name: "Programming" },
        { id: '8 clone', img: imgeight, name: "Photography" },
        { id: 1, img: imgOne, name: "Game Development" },
        { id: 2, img: imgTwo, name: "Marketing Strategy" },
        { id: 3, img: imgThree, name: "Data Analysis With Python" },
        { id: 4, img: imgfour, name: "Advanced UX Designs" },
        { id: 5, img: imgfive, name: "Technology" },
        { id: 6, img: imgsix, name: "Design" },
        { id: 7, img: imgseven, name: "Programming" },
        { id: 8, img: imgeight, name: "Photography" },
        { id: "1 clone", img: imgOne, name: "Game Development" }, // 8
        { id: "2 clone", img: imgTwo, name: "Marketing Strategy" },

    ])
    let arrJxs = arr.map(function (el, index) {
        return (
            <div className={index - 2 === number ? "Course active" : "Course"} key={el.id}>
                <img src={el.img} alt="" />
                <p>{el.name}</p>
            </div>
        )
    })
    function toTheRight() {
        setNumber(function(prv){
            return prv + 1
        })
    }
    function toTheleft() {
        setNumber(function(prv){
            return prv - 1
        })
    }
    useEffect(function(){
        let card = slider.current.children[0]
        let width = card.offsetWidth
        let margin = parseInt(window.getComputedStyle(card).marginRight)
        setTranslate((margin + width))
        if(number <= arr.length - 4){
            if(number === arr.length - 4) {
                setTimeout(function(){
                    setTransition("0s")
                    setNumber(0)
                    setTimeout(function(){
                        setTransition("transform 0.2s ease")
                    },10)
                },300)
            }
        }
        if(number >= -1) {
            if(number === -1){
                setTimeout(function(){
                    setNumber(arr.length - 5)
                    setTransition("0s")
                    setTimeout(function(){
                        setTransition("transform 0.2s ease")
                    },10)
                },300)
            }
        }
    },[number])
    return (
        <section className="trending" id="Courses" ref={function (ele) { return prop.data[3] = ele }}>
            <div className="container">
                <p className="heading">Trending Courses</p>
                <div className="grid">
                    <div className="arrows">
                        <div className="left" onClick={toTheleft}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className="right" onClick={toTheRight}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                    <div ref={slider} className="slider"  style={{ transform: `translateX(${-translate  * number}px)`, transition: `${transition}` }}>
                        {arrJxs}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending
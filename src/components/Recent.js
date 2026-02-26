import imgOne from "../img/fourteen.png"
import imgTwo from "../img/fifteen.png"
import imgThree from "../img/sixteen.jpg"
import imgFour from "../img/seventeen.jpg"
import imgFive from "../img/eighteen.jpg"
import imgSixe from "../img/nineteen.jpg"
import imgSeven from "../img/twenty.jpg"
import imgEight from "../img/twentyone.jpg"
import imgNine from "../img/twentytwo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
function Recent(){
    let parent  = useRef(null)
    let child = useRef(null)
    let [translate,setTranslate] = useState("0px")
    let [arr,setArr] = useState([
        {img: imgOne, name: "NATURE of Science" },
        {img: imgTwo, name: "2022  Astro Repor" },
        {img: imgThree, name: "Marketing Strategy" },
        {img: imgFour, name: "Data Analysis" },
        {img: imgFive, name: "Advanced UX Designs" },
        {img: imgSixe, name: "Technology" },
        {img: imgSeven, name: "Design" },
        {img: imgEight, name: "Programming" },
        {img: imgNine, name: "Photography" },
    ])
    let arrJsx = arr.map(function(ele,index){
        return (
            <div className="book" ref={child} key={index}>
                <img src = {ele.img} alt=""/>
                <p>{ele.name}</p>
            </div>
        )
    })
    let [num,setNum] = useState(0)
    function right(){
        setNum(function(prv){
            if (prv >= (arr.length / 4).toFixed(0)){
                return 0
            }
            return prv + 1
        })
    }
        function left(){
        setNum(function(prv){
            if (prv <= 0){
                return (arr.length / 4).toFixed(0)
            }
            return prv - 1
        })
    }
    useEffect(function(){
        let width = parseInt(window.getComputedStyle(parent .current).width)
        let gap = parseInt(window.getComputedStyle(child .current).marginRight)
        setTranslate(`-${(width + gap) * num}px`)
    },[num])
    return (
        <section className="recent" id="Publications">
            <div className="container">
                <p className="heading">Recent Publications</p>
                <div ref={parent } className="grid">
                    <div className="arrows">
                        <div className="left" onClick={left}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div className="right" onClick={right} >
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                    <div  style={{transform: `translateX(${translate})`}}>
                        {arrJsx}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Recent
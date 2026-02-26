import img from "../img/image 20.png"
import imgOne from "../img/image 18.png"
import one from "../img/one.jpg"
import two from "../img/two.jpg"
import three from "../img/three.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
import CoButton from "./CoButton"
function Hero(){
    let prinet = useRef(null)
    let [translate,setTranslate] = useState(0)
    let [num,setnum] = useState(0)
    function right (){
        setnum(function(prv){
            if(num >= 4){
                setnum(0)
            }
            return prv + 1 
        })
    }
    function left (){
        setnum(function(prv){
            if(num <= 0) {
                setnum(4)
            }
            return prv - 1 
        })
    }
    useEffect(function(){
        let width = parseInt(`-${window.getComputedStyle(prinet.current).width}`) 
        setTranslate(width * num)
    },[num])
    return (
        <div className="hero" id="Home">
            <div className="container">
                <div className="first">
                    <p>Take your career to the next level.</p>
                    <p>With indispensable courses</p>
                    <div className="buttons">
                        <CoButton content = "Exams"/>
                        <CoButton content = "Our Courses"/>
                    </div>
                </div>
                <div className="secound" ref={prinet} >
                    <div className="arrows">
                        <div onClick={left}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </div>
                        <div onClick={right}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                    <img src= {img} alt=""  style={{transform: `translateX(${translate}px)`}}/>
                    <img src= {imgOne} alt="" style={{transform: `translateX(${translate}px)`}}/>
                    <img src= {one} alt="" style={{transform: `translateX(${translate}px)`}}/>
                    <img src= {two} alt="" style={{transform: `translateX(${translate}px)`}}/>
                    <img src= {three} alt="" style={{transform: `translateX(${translate}px)`}}/>
                </div>
            </div>
        </div>
    )
}
export default Hero
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
function Up () {
    let [position,setPosition] = useState('')
    function toTheTop (){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    window.onscroll = function(){
        if(window.scrollY >= 300){
            setPosition("fixed")
        }else {
            setPosition('')
        }
    }
    return (
        <div className="up" style={{position: `${position}`}} onClick = {toTheTop}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
    )
}
export default Up
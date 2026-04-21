import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
function Up () {
    let [opacity,setOpacity] = useState(0)
    function changeOpacity (){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    useEffect(function(){
        function changeOpacityOnscroll(){
            if(window.scrollY >= 300){
                setOpacity(1)
            }else {
                setOpacity(0)
            }
        }
        window.addEventListener("scroll",changeOpacityOnscroll)
        return function () {
            window.removeEventListener('scroll',changeOpacityOnscroll)
        }
    },[])
    return (
        <div className="up" style={{opacity: `${opacity}`}} onClick = {changeOpacity}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
    )
}
export default Up
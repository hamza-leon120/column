import { useEffect, useState } from "react"

function ScrollPercentage() {
    let [percentage,setPercentage] = useState('0')
    let [opacity,setOpacity] = useState("0")
    useEffect(function (){
        function percentageCalc(){
            setPercentage((((window.scrollY + window.innerHeight) * 100 ) / document.body.offsetHeight).toFixed(0))
            if(window.scrollY >= 300){
            setOpacity(1)
        }else {
            setOpacity(0)
        }
        }
        window.addEventListener("scroll",percentageCalc)
        return function() {
            window.removeEventListener("scroll",percentageCalc)
        }
    },[])
    return (
        <div className="percentage" style={{backgroundImage: `conic-gradient(#3B7586 ${percentage}%, white ${percentage}%)`,opacity: `${opacity}`}}>
            <div>
                <p>{percentage} %</p>
            </div>
        </div>

    )
}
export default ScrollPercentage
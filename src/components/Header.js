import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import img from '../img/Group 180.png'
import { useEffect, useState } from 'react'
function Header (){
    let [clas,setClas] = useState("")
    function openn(){
        setClas(function(prv){
            if (prv === ""){
                return "active"
            }else {
                return ""
            }
        } )
    }
    window.addEventListener('scroll',function(){
        if(clas === "active"){
            setClas("")
        }
    })
    function to (eve){
        let toY = document.getElementById(`${eve.target.innerHTML.replace(" ","-")}`).offsetTop
        window.scrollTo({
            top: toY,
            left: 0,
            behavior: 'smooth',
        })
    }
    return (
        <header>
            <div className="container">
                <FontAwesomeIcon icon={faBars} onClick = {openn} />
                <img src = {img} alt="" />
                <ul className = {clas}>
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
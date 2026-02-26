import imgOne from "../img/twentythree.jpg"
import imgTwo from "../img/twentyfour.jpg"
import imgThee from "../img/twentyfive.jpg"
import imgFour from "../img/twentysix.jpg"
function Intructors (){
    return (
        <section className="intructors" id = "Instuctors">
            <div className="container">
                <p className="heading">Notable Intructors</p>
                <div className="grid">
                    <div>
                        <div className="intructors-img">
                            <img src= {imgOne} alt="" />
                        </div>
                        <p className="job">data analyst</p>
                        <p className="name">Prof. W.J Khatam</p>
                    </div>
                    <div>
                        <div className="intructors-img">
                            <img src= {imgTwo} alt="" />
                        </div>
                        <p className="job">ux designer</p>
                        <p className="name">Prof. Kaif Kofi O</p>
                    </div>
                    <div>
                        <div className="intructors-img">
                            <img src= {imgThee} alt="" />
                        </div>
                        <p className="job">software dev.</p>
                        <p className="name">Prof. Maryam J</p>
                    </div>
                    <div>
                        <div className="intructors-img">
                            <img src= {imgFour} alt="" />
                        </div>
                        <p className="job">psycologist</p>
                        <p className="name">Mr. Oluwole B.O</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intructors
import Header from "./components/Header";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import Up from "./components/Up";
import { useEffect, useRef } from "react";
import ScrollPercentage from "./components/ScrollPercentage";
function App() {
  let allSection = useRef([])
  useEffect(function(){
    let observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry ){
        if(entry.isIntersecting){
          entry.target.style.opacity = 1
          entry.target.style.transform = "translateY(0px)"
        }
      })
    },{
      threshold: 0.3
    })
    allSection.current.forEach(function(section){
      observer.observe(section)
    })
  },[])
  return (
    <div className="App">
      <Header />
      <Sections data = {allSection}/>
      <Footer data = {allSection.current} />
      <Up />
      <ScrollPercentage />
    </div>
  );
}
export default App;
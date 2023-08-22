import bgMobile from "../images/bg-boost-mobile.svg"
import bgDesktop from "../images/bg-boost-desktop.svg"

export default function Boost() {
  return (
        <>
        <section >
        <div className="boost ">
        <picture id="imgBoost">
            <source srcSet={bgDesktop}/>
            <img src={bgMobile} width="1270px" height="160px"alt=""/>
        </picture>
        <div className="boostDiv text-center">
            <h3 id='boostLine' >Boost your links today</h3>
            <button id="boostbtn">Get Started</button>
        </div>
        </div>
        </section>
        </>
  )
}

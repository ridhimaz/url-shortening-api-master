import brand from "../images/icon-brand-recognition.svg"
import records from "../images/icon-detailed-records.svg"
import fully from "../images/icon-fully-customizable.svg"

export default function Advanced() {
  return (
    <>
   
        <section className="advance">
        <div className="adv-top  ">
        <h2 className="text-center bold" >Advanced Statistics</h2>
        <p className="text-center ">
        Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="vl"></div>
        <div className="hl"></div>
       <div className="box">
       
      

          <article className="box1" >
            <button className="adv-btn"><img className="adv-img" src={brand} alt=""/></button>
            <h3 className="heading ">Brand Recognition</h3>
            <p className="">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
             confidence in your content.</p>
          </article>
          <article  className="box2">
            <button className="adv-btn"><img className="adv-img" src={records} alt=""/></button>
            <h3 className="heading ">Detailed Records</h3>
            <p className="">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
             confidence in your content.</p>
          </article>
          <article className="box3" >
            <button className="adv-btn"><img className="adv-img" src={fully} alt=""/></button>
            <h3 className="heading">Fully Customizable</h3>
            <p className="">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
             confidence in your content.</p>
          </article>
          
              </div>
        </section>
        
    </>
  )
}

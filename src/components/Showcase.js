import showcase from "../images/illustration-working.svg"

export default function Showcase() {
  return (
    <>
      <section style={{overflow:"hidden"}}>
        <div className="d-flex showcase">
        <div className="showcaseImg order-lg-1" >
          <img height="85%" width="130%"src={showcase} alt="shortly"/>
        </div>
        <div className="showcase-content order-lg-0">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button id="showcaseBtn">Get Started</button>
        </div>
        
        </div>
      </section>
    </>
  )
}

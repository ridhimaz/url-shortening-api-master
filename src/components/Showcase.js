import showcase from "../images/illustration-working.svg"

export default function Showcase() {
  return (
    <>
      <section className="grid showcase">
        <div className="row">
        <div className="col-xl-6 showcase-content">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button>Get Started</button>
        </div>
        <article className="col-xl-6">
          <img  id="showcaseImg" height="80%" src={showcase} alt="shortly"/>
        </article>
        </div>
      </section>
    </>
  )
}

import { useState } from 'react' 
// import bgMobile from '../images/bg-shorten-mobile.svg'
// import bgDesktop from '../images/bg-shorten-desktop.svg'

export default function Shortener() {
  const [text,setText]=useState("")
  const [links,setLinks]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!text)
    {
      alert("Input is empty")
    }
    else{
      const shortenLink= async()=>{
        const res=await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data=await res.json()
        console.log(data.result)
        setLinks(data.result)
        setText("")
      }
      shortenLink()
    }
  }
  return (
    <>
        <section>
        <div className='shorten text-center'> 
          <form onSubmit={handleSubmit}>
            <div className='shortenForm'>
                <input id="shorten-input"type="url" placeholder='Shorten a link here' value={text}
                  onChange={(e)=>setText(e.target.value)}
                />
                <button id='shorten-btn'  type="submit" onClick={handleSubmit}>Shorten It!</button>
            </div>
          </form>
          </div>
         
          <div>
            <article>
              {/* <h6>{links.original_link}</h6> */}
            </article>
          {text ?
            <article className='hide'>
              <ul>
                <li><button>{links.full_short_link}</button></li>
                <li><button>Copy</button></li>
              </ul>
            </article>: ""}
          </div>
        </section>
    </>
  )
}

import { useEffect, useState } from 'react'
// import bgMobile from '../images/bg-shorten-mobile.svg'
// import bgDesktop from '../images/bg-shorten-desktop.svg'

const getLocalStorage=()=>{
  let links =localStorage.getItem("links")
  if(links)
  {
    return JSON.parse(localStorage.getItem("links"))
  }
  else{
    return []
  }
}
export default function Shortener() {
  const [text, setText] = useState("")
  const [links, setLinks] = useState(getLocalStorage())
  const [copy, setcopy] = useState("Copy");
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert("Input is empty")
    }
    else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()
        console.log(data)
        setLinks(data.result)
        setText("")
      }
      shortenLink()
    }
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setcopy("Copied!")
  }
  useEffect(()=>{
    localStorage.setItem("links",JSON.stringify(links))
  }, [links])
  return (
    <>
      <section>
        <div className='shorten text-center'>
         
            <form onSubmit={handleSubmit} className='shortenForm'>
              <input id="shorten-input" type="url" placeholder=' Shorten a link here...' value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button id='shorten-btn' type="submit" onClick={handleSubmit}>Shorten It!</button>
            </form>
         


          <div className='result'>
            <article className='original-link'>
              <h6>{links.original_link}</h6>
            </article>

            <article className='short_link'>
                <h6>{links.full_short_link}</h6>
                <button onClick={handleCopy} id='copy'>{copy}</button>
             
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

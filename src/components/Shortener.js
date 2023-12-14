import { useState } from 'react'
import "../components/Shortenerstyles.css"



export default function Shortener() {
  const [text, setText] = useState("")
  const [original_link,setOriginal_link]=useState("");
  const [isOpen,setIsopen]=useState(false);
  const [links, setLinks] = useState("")
  const [copy, setcopy] = useState("Copy");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert("Input is empty")
    }
    else {
      const shortenLink = async () => {
        const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '77250017a6mshcab731390f85fd8p10d64cjsn7c7faa4f44e4',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
          },
          body: new URLSearchParams({
            url: `${text}`
          })
        };

        try {
          const res = await fetch(url, options);
          if (!res.ok) {
            document.getElementById('shorten-input').style.borderStyle = "solid";
            document.getElementById('shorten-input').style.borderColor = 'hsl(0, 87%, 67%)';
            document.querySelector('.error-msg').innerHTML = 'Please enter a valid link';
          }
          const result = await res.json();
          console.log(result.result_url);
          setLinks(result.result_url);
          setOriginal_link(text);
       
          console.log(original_link);
          
          setText("")
          setIsopen(true);
        } catch (error) {
          console.error(error);
          alert("API Error: URL is invalid")
        }
      }
      shortenLink();
    }
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(links);
    setcopy("Copied!")
  }


  return (
    <>
      <section>
        <div className='shorten text-center'>

          <form onSubmit={handleSubmit} className='shortenForm'>
            <input id="shorten-input" type="url" placeholder=' Shorten a link here...' value={text}
              onChange={(e) => setText(e.target.value)} />
            <button id='shorten-btn' type="submit" onClick={handleSubmit}>Shorten It!</button>
          
          </form>
         {isOpen && 
          <div className='container'>
             <h6>{original_link}...</h6>
              <article className='links'>
                <h6>{links}</h6>
                <button onClick={handleCopy} id='copy'>{copy}</button>
              </article>
            </div>
}
        </div>
      </section>
    </>
  )
}

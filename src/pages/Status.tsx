import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import "../css/Status.css"
import { PaperPlaneRight } from "phosphor-react"


export function Status() {
    
    const [asnwerContent, setAsnwerContent] = useState("")
    
    const [asnwer, setAsnwer] = useState([
      "Concordo",
      "Faz sentido pô!",
      "Azar o seu"
    ])

    function createNewAsnwer(event: FormEvent) {
      event.preventDefault()

      setAsnwer([...asnwer, asnwerContent])
      
      setAsnwerContent('')
      
    }

    function handleHotkeySubmit(event: KeyboardEvent){
      if(event.key === "Enter" && (event.ctrlKey || event.metaKey)){
        setAsnwer([...asnwer, asnwerContent])
      
        setAsnwerContent('')
      }
    }


    return (
        <main className="status">
          <Header title="Tweet"/>
          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi neque, quisquam ducimus magnam consequuntur possimus eum dolores beatae quam fugit cum assumenda, illo itaque ea facere repellat dolorum provident."/>
          
            <Separator/>
            <form onSubmit={createNewAsnwer} className="answer-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/leonardo-kotcheski-filipiaki.png" alt="User image"></img>
                <textarea name="tweet" id="tweet" placeholder="Tweet yout answer"
                onKeyDown={handleHotkeySubmit}
                value={asnwerContent}
                onChange={(event) => {
                  setAsnwerContent(event.target.value)
                }}
                ></textarea>
              </label>

              <button type="submit">
                <span>Answer</span>
                <PaperPlaneRight/>
                </button>
            </form>



            {
              asnwer.map(tweet => {
                return (
                <Tweet key={tweet} content={tweet}/>
                )
              })
            }
        </main>
    )
}
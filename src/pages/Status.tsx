import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import "../css/Status.css"

const answers = [
    "Concordo",
    "Faz sentido pô!",
    "Azar o seu"
]

export function Status() {
    return (
        <main className="status">
          <Header title="Tweet"/>
          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi neque, quisquam ducimus magnam consequuntur possimus eum dolores beatae quam fugit cum assumenda, illo itaque ea facere repellat dolorum provident."/>
          
            <Separator/>
            <form className="answer-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/leonardo-kotcheski-filipiaki.png" alt="User image"></img>
                <textarea name="tweet" id="tweet" placeholder="Tweet yout answer"></textarea>
              </label>

              <button type="submit">Answer</button>
            </form>



            {
              answers.map(tweet => {
                return (
                <Tweet key={tweet} content={tweet}/>
                )
              })
            }
        </main>
    )
}
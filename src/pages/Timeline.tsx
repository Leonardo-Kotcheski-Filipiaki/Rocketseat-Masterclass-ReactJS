import "../css/Timeline.css"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

function capitalizeHeaderTitle(){
    let headerTitle = window.location.href.split('/')[3]
    if(headerTitle == ''){
      return headerTitle = "Home"
    }
    return headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1)
}

const tweets = [
    'Meu primerio tweet',
    'Meu segundo tweet'
]  

export function Timeline() {
    return (
        <main className="timeline">
          <Header title={ capitalizeHeaderTitle() }/>
          
            <form className="new-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/leonardo-kotcheski-filipiaki.png" alt="User image"></img>
                <textarea name="tweet" id="tweet" placeholder="What's happening?"></textarea>
              </label>

              <button type="submit">Tweet</button>
            </form>

            <Separator/>


            {
              tweets.map(tweet => {
                return (
                <Tweet key={tweet} content={tweet}/>
                )
              })
            }
        </main>
    )
}
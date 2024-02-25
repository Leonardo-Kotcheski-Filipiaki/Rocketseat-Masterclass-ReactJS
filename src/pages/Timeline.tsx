import "../css/Timeline.css"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import { FormEvent, useState } from "react"

function capitalizeHeaderTitle(){
    let headerTitle = window.location.href.split('/')[3]
    if(headerTitle == ''){
      return headerTitle = "Home"
    }
    return headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1)
}

export function Timeline() {



    const [tweetContent, setTweetContent] = useState("")
  
    const [tweets, setTweets] = useState([
      'Meu primerio tweet',
      'Meu segundo tweet',
    ])

    function createNewTweet(event: FormEvent) {
      event.preventDefault()

      setTweets([...tweets, tweetContent])
      
      setTweetContent('')
      
    }
    
    function handleHotkeySubmit(event: KeyboardEvent){
      if(event.key === "Enter" && (event.ctrlKey || event.metaKey)){
        setTweets([...tweets, tweetContent])
      
        setTweetContent('')
      }
    }

    return (
        <main className="timeline">
          <Header title={ capitalizeHeaderTitle() }/>
          
            <form onSubmit={createNewTweet} className="new-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/leonardo-kotcheski-filipiaki.png" alt="User image"></img>
                <textarea name="tweet" id="tweet" placeholder="What's happening?" 
                value={tweetContent}
                onKeyDown={handleHotkeySubmit}
                onChange={(event) => {
                  setTweetContent(event.target.value)
                }}></textarea>
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
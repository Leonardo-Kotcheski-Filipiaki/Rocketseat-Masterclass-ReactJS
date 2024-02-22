import "./index.css"
import "./css/App.css"

import { useState } from "react"
import { Tweet } from "./components/Tweet"
import { Sidebar } from "./components/Sidebar"
import { Header } from "./components/Header"
import { Separator } from "./components/Separator"


function capitalizeHeaderTitle(){
  const headerTitle = window.location.href.split('/')[3]
  return headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1)
}

export default function App() {

  return (

    <div className="layout">
      <Sidebar/>
      <div className="content">
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


            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
        </main>
      </div>
    </div>

  )
}

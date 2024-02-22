import "../css/Sidebar.css"
import { useState } from "react"
import TwitterLogo from "../assets/logo-twitter.svg"
import { Bell, BookmarkSimple, DotsThreeCircle, EnvelopeSimple, FileText, Hash, House, User } from "phosphor-react"



export function Sidebar() {

  const [page, setPage] = useState("")

  const activeChange = () => {
    setPage(window.location.href.split('/')[3])
  }

    return(
    <aside className="sidebar" onLoad={activeChange}>
          <img className="logo" src={TwitterLogo} alt="logo" />
          {
            //#region NAVBAR REGION
           }
          <nav className="main-navigation">
              <a href="/home" className=
              {
                page == 'home' ? "active" : "notActive"
              } 
              onClick={activeChange}>
              {
                page == 'home' ? (<House weight="fill"/>) : (<House/>)
              } 
                Home
              </a>
              <a href="/explore" className=
              {
                page == 'explore' ? "active" : "notActive"
              } 
              onClick={activeChange}>
              {
                page == 'explore' ? (<Hash weight="fill"/>) : (<Hash/>)
              } 
                Explore
              </a>
              <a href="/notifications" className=
              {
                page == 'notifications' ? "active" : "notActive"
              } 
              onClick={activeChange}>
              {
                page == 'notifications' ? (<Bell weight="fill"/>) : (<Bell />)
              }
                
                Notifications
              </a>
              <a href="/messages" className=
              {
                page == 'messages' ? "active" : "notActive"
              } 
              onClick={activeChange}>
              {
                page == 'messages' ? (<EnvelopeSimple weight="fill"/>) : (<EnvelopeSimple />)
              }
                Messages
              </a>
              <a href="/bookmarks" className=
              {
                page == 'bookmarks' ? "active" : "notActive"
              } 
              onClick={activeChange}>
              {
                page == 'bookmarks' ? (<BookmarkSimple weight="fill"/>) : (<BookmarkSimple />)
              }
                Bookmarks
              </a>
              <a href="/lists" className=
              {
                page == 'lists' ? "active" : "notActive"
              } 
              onClick={activeChange}>
              {
                page == 'lists' ? (<FileText weight="fill"/>) : (<FileText />)
              } 
                Lists
              </a>
              <a href="/profile" className=
              {
                page == 'profile' ? "active" : "notActive"
              } 
              onClick={activeChange}>
              {
                page == 'profile' ? (<User weight="fill"/>) : (<User />)
              }
                Profile
              </a>
              <a href="/more" className=
              {
                page == 'more' ? "active" : "notActive"
              } 
              onClick={activeChange}>
              {
                page == 'more' ? (<DotsThreeCircle weight="fill"/>) : (<DotsThreeCircle />)
              }
                More
              </a>
          {
            //#endregion
          }
          </nav>
          <button className="new-tweet" type="button">
            Tweet
          </button>
      </aside>
    )
}
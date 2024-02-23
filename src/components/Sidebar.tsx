import "../css/Sidebar.css"
import { useState } from "react"
import TwitterLogo from "../assets/logo-twitter.svg"
import { Bell, BookmarkSimple, DotsThreeCircle, EnvelopeSimple, FileText, Hash, House, User } from "phosphor-react"
import { NavLink } from "react-router-dom"



export function Sidebar() {

    return(
    <aside className="sidebar" >
          <img className="logo" src={TwitterLogo} alt="logo" />
          {
            //#region NAVBAR REGION
           }
          <nav className="main-navigation">
              <NavLink to="/" >
                <House/>
                Home
              </NavLink>

              <NavLink to="/explore">
                <Hash/>
                Explore
              </NavLink>

              <NavLink to="/notifications">
                <Bell/>
                Notifications
              </NavLink>

              <NavLink to="/messages">
                <EnvelopeSimple/>
                Messages
              </NavLink>

              <NavLink to="/bookmarks">
                <BookmarkSimple/>
                Bookmarks
              </NavLink>

              <NavLink to="/lists">
                <FileText/>
                Lists
              </NavLink>

              <NavLink to="/profile">
                <User/>
                Profile
              </NavLink>

              <NavLink to="/more">
                <DotsThreeCircle/>
                More
              </NavLink>
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
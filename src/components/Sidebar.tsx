import "../css/Sidebar.css"
import { useState } from "react"
import TwitterLogo from "../assets/logo-twitter.svg"
import { Bell, BookmarkSimple, DotsThreeCircle, EnvelopeSimple, FileText, Hash, House, Pencil, User } from "phosphor-react"
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
                <span>Home</span>
              </NavLink>

              <NavLink to="/explore">
                <Hash/>
                <span>Explore</span>
              </NavLink>

              <NavLink to="/notifications">
                <Bell/>
                <span>Notifications</span>
              </NavLink>

              <NavLink to="/messages">
                <EnvelopeSimple/>
                <span>Messages</span>
              </NavLink>

              <NavLink to="/bookmarks">
                <BookmarkSimple/>
                <span>Bookmarks</span>
              </NavLink>

              <NavLink to="/lists">
                <FileText/>
                <span>Lists</span>
              </NavLink>

              <NavLink to="/profile">
                <User/>
                <span>Profile</span>
              </NavLink>

              <NavLink to="/more">
                <DotsThreeCircle/>
                <span>More</span>
              </NavLink>
          {
            //#endregion
          }
          </nav>
          <button className="new-tweet" type="button">
            <span>Tweet</span>
            <Pencil/>
          </button>
      </aside>
    )
}
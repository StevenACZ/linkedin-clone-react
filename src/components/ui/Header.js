import React from 'react'
import { NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="global-nav__wrapper">
        <div className="global-nav__content">
          <i className="ri-linkedin-box-fill global-nav__branding"></i>

          <label className="global-nav__search">
            <input placeholder="Search"/>
            <i class="ri-search-line"></i>
          </label>
        </div>

        <div className="global-nav__primary-items">
          <NavLink
            className="global-nav__primary-item"
            activeClassName="active"
            exact
            to="/home"
          >
            <i class="icon ri-home-2-line"></i>
            <span>Home</span>
          </NavLink>

          <NavLink
            className="global-nav__primary-item"
            activeClassName="active"
            exact
            to="/network"
          >
            <i class="icon ri-user-voice-fill"></i>
            <span>My Network</span>
          </NavLink>

          <NavLink
            className="global-nav__primary-item"
            activeClassName="active"
            exact
            to="/jobs"
          >
            <i class="icon ri-briefcase-4-fill"></i>
            <span>Jobs</span>
          </NavLink>

          <NavLink
            className="global-nav__primary-item"
            activeClassName="active"
            exact
            to="/messaging"
          >
            <i class="icon ri-chat-1-line"></i>
            <span>Messaging</span>
          </NavLink>

          <NavLink
            className="global-nav__primary-item"
            activeClassName="active"
            exact
            to="/notifications"
          >
            <i class="icon ri-notification-2-fill"></i>
            <span>Notifications</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { JobsScreen } from '../components/jobs/JobsScreen'
import { MessagingScreen } from '../components/messaging/MessagingScreen'
import { NetworkScreen } from '../components/network/NetworkScreen'
import { NotificationsScreen } from '../components/notifications/NotificationsScreen'
import { Header } from '../components/ui/Header'

export const DashboardRouter = () => {
  return (
    <>
      <Header />

      <div className="main-content">
        <Switch>
          <Route exact path="/home" component={ HomeScreen } />
          <Route exact path="/network" component={ NetworkScreen } />
          <Route exact path="/jobs" component={ JobsScreen } />
          <Route exact path="/messaging" component={ MessagingScreen } />
          <Route exact path="/notifications" component={ NotificationsScreen } />

          <Redirect to="/home" />
        </Switch>
      </div> 
    </>
  )
}

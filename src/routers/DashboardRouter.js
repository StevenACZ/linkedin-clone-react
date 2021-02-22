import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'

export const DashboardRouter = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/home" component={ HomeScreen } />

          <Redirect to="/home" />
        </Switch>
      </div> 
    </>
  )
}

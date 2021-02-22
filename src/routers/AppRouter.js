import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRouter } from './DashboardRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

  const { user } = useContext( AuthContext );

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={ LoginScreen }
          isAuthenticated={ user.logged }
        />

        <PrivateRoute
          path="/"
          component={ DashboardRouter }
          isAuthenticated={ user.logged }
        />
      </Switch>
    </Router>
  )
}

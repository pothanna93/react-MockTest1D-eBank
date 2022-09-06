import {Route, Switch, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import HomeRoute from './components/HomeRoute'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginPage} />
    <Route exact path="/" component={HomeRoute} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App

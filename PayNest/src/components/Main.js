import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Host from './Host'
import Visit from './Visit'

import styles from './../libs/css/styles.css'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/host' component={Host}/>
      <Route path='/visit' component={Visit}/>

    </Switch>
  </main>
)

export default Main

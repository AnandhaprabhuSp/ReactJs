import React from 'react'
import City from './Objects/City'
import Cities from './Cities'
import HomeContent from './HomeContent'
import { Switch, Route, Link } from 'react-router-dom'

class Visit extends React.Component{
    render(){
            
        return(
          <main>
            <Switch>
              <Route exact path='/visit/' component={Cities}/>
              <Route path='/visit/Bangalore' component={HomeContent} />
              <Route path='/visit/Chennai' component={HomeContent} />
            </Switch>
          </main>
        )

    }
}
export default Visit

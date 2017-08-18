import React from 'react'
import City from './Objects/City'
import { Switch, Route, Link } from 'react-router-dom'

class Cities extends React.Component{
  constructor(){
        super();
        this.state = {
            city:[{'id':'1','name':'Bangalore','img':'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2f/3a/bangalore.jpg'},{'id':'2','name':'Chennai','img':'https://c1.staticflickr.com/9/8398/8605771209_3410b72627_b.jpg'}]
        }
    }
    
    render(){
        var pgcity;
        pgcity = this.state.city.map((city)=> <Link to={{pathname:'/visit/'+city.name, query:'anandh'}} key={city.id}><City key={city.id} city={city} /></Link>    );
        return(
                                     
            <div className='city-collection'>{pgcity}</div>
        );
        }
}

export default Cities

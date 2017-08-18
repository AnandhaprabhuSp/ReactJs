import React from 'react';
//import {Link} from 'react-router-dom'

class City extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var bg = {
            backgroundImage:`url(${this.props.city.img})`
        };   
        if(this.props)
        console.log(this.props);
        return(
            <div className='city-detail' style={bg}>
                {this.props.city.name}
            </div>
        );
    }
}
export default City;
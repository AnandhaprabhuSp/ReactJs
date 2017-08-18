import React from 'react'

export default class CusButton extends React.Component{
    render(){
        if(this.props.view){   
            return   <button className='c-btn'>Host your PG</button>
        } else {
            return   <button className='c-btn'>Search PG</button>
        }    
    }
    
}


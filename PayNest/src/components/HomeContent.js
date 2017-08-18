import React from 'react'
import MultiContent from './MultiContent'

class HomeContent extends React.Component{
 
render(){
    if(this.props.location)
        console.log(this.props.location.query);
    return(
    <div className='home-content'>
        <MultiContent />
    </div>
    )
}
}

export default HomeContent

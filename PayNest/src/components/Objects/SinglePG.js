import React from 'react'
import ReactDOM from 'react-dom'
import CloseButton from './CloseButton'
import $ from 'jquery'

export default class SinglePG extends React.Component{
    constructor(props){
        super(props);
        this.handleHide = this.handleHide.bind(this);
    }
    handleHide(){
        let node = ReactDOM.findDOMNode(this.refs.compsamp);
        $(node).fadeOut("slow");
    }
    
    render(){
        var style = {
            backgroundImage:`url(${this.props.data.images})`
        }
        var wifi = <div className='pg-features wifi tooltip'><span className='tooltiptext'>Wifi</span></div> ;
        var tv = <div className='pg-features tv tooltip'><span className='tooltiptext'>TV</span></div> ;
        var water = <div className='pg-features water tooltip'><span className='tooltiptext'>Water</span></div> ;
        var vfood = <div className='pg-features vfood tooltip'><span className='tooltiptext'>Veg food</span></div> ;
        var nvfood = <div className='pg-features nvfood tooltip'><span className='tooltiptext'>Nv food</span></div> ;
        var geyser = <div className='pg-features geyser tooltip'><span className='tooltiptext'>Geyser</span></div> ;
        var fridge = <div className='pg-features fridge tooltip'><span className='tooltiptext'>Fridge</span></div> ;
        var ac = <div className='pg-features ac tooltip'><span className='tooltiptext'>AC</span></div> ;
        var cam = <div className='pg-features cam tooltip'><span className='tooltiptext'>S.Camera</span></div> ;
        
        
        return(
        
            <div ref='compsamp' className='pg-comp'>
                <div onClick={this.handleHide}><CloseButton /></div>
                <div className='pg-comp-pImg' style={style}></div>
                <div className='pg-comp-name'>{this.props.data.pgname}</div>
                <div className='pg-comp-sname'>{this.props.data.subname}</div>
                <div className='pg-comp-rating'>{this.props.data.rating}<div className='pg-comp-like'></div></div>
                <div className='pg-comp-year'>{this.props.data.year}</div>
                <div className='pg-comp-address'>{this.props.data.address}</div>
                <div className='pg-comp-contact'><div className='call-icon'></div>{this.props.data.call}</div>
                <div className='pg-comp-features'>{this.props.data.wifi ? wifi:''}{this.props.data.wifi ? tv:''}{this.props.data.wifi ? water:''}{this.props.data.wifi ? vfood:''}{this.props.data.wifi ? nvfood:''}{this.props.data.wifi ? geyser:''}{this.props.data.wifi ? fridge:''}{this.props.data.wifi ? ac:''}{this.props.data.wifi ? cam:''}</div>
            </div>
        
        )
    }
}

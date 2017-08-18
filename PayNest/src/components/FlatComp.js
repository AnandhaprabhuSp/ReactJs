import React from 'react'
import SinglePG from './Objects/SinglePG'
import $ from 'jquery'

class FlatComp extends React.Component{    
    componentDidMount(){
        var id = this.props.idvalue;
        console.log('ComponentDidMount');
        $('#n-'+this.props.idvalue).on('click',function(){
            var pos = $('#'+id).scrollLeft()+$('#'+id).width();
            $('#'+id).animate({scrollLeft:pos},1000);
        });
        $('#p-'+this.props.idvalue).on('click',function(){
            var pos = $('#'+id).scrollLeft()-$('#'+id).width();
            $('#'+id).animate({scrollLeft:pos},1000);
        }); 
    }
    render(){
        var pgData = this.props.data;
        var contentList = '';
        if(this.props.idvalue == 'pgsort'){
            var count =0;
            contentList = Object.keys(pgData).map((key)=>{
                if(pgData[key].rating>4){
                    count++;
                return <SinglePG key={pgData[key].id} data={pgData[key]} />
                } return null;
            });    
            console.log(count);
        }else{
            contentList = Object.keys(pgData).map((key)=>{
                return <SinglePG key={pgData[key].id} data={pgData[key]} />
            });    
        }
        
        
        return(
            
            <div className='fc-main-contain'>
            <div className='fc-head'>{this.props.name}</div>
            <div id={'p-'+this.props.idvalue} className='prev'></div>
            <div id={'n-'+this.props.idvalue} className='next'></div>
            <div id={this.props.idvalue} className='fc-list'>
                {contentList}
            </div>
            </div>
            
        )
    }
}

export default FlatComp;
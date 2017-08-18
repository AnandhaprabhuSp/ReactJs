import React from 'react'
import FlatComp from './FlatComp'
import Loading from './Objects/Loading'
import $ from 'jquery'

class MultiContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pgMainData:{},
            isLoading:true
        }
    }
    componentWillMount(){
        this.fetchData();
    }
    
    fetchData(){
            $.ajax({
                type:'GET',
                url:'http://localhost:7000/data',
                success:function(data){
                    this.setState(
                        {
                        pgMainData : data,
                        isLoading:false
                        }
                                 );
                    
                }.bind(this)
            });
            
        return true;
    }
    
    render(){
        var filterData = this.state.pgMainData;
        
        var contentList = <div>Some Error is processing!</div>;
        
        if(filterData){
            contentList = <FlatComp data = {filterData} name='Available PGs' idvalue='pgavail'/>
        }else{                                       
            contentList = <div className='Random'>No data Found!</div>                                                 
        }
        var contentSecondList = <FlatComp data = {filterData} name='High ranking PGs' idvalue='pgsort'/>
        return(
            <div className='mc-main'>
                <div>
                    {this.state.isLoading? <Loading />: contentList}
                </div>
                <div>
                    {contentSecondList}
                </div>
            </div>
        )
    }
}
export default MultiContent;
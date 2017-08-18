import React from 'react'

class HostForm extends React.Component{
    
    render(){
        return(
        <form className='dentry-form'>

    <div className='hw gents tooltip'><span className='tooltiptext'>For Gents</span></div>
    <input type='radio' className='h-radio' name='gender' value='gents' />
  
    <select className='h-select'>
        <option>Chennai</option>
        <option>Bangalore</option>
    </select>

    <input type='radio' className='h-radio' name='gender' value='ladies'/>
    <div className='hw ladies tooltip'><span className='tooltiptext'>For Ladies</span></div>
  
    <input type='text' className='h-pg-ip f-big' name='Pgname' placeholder='PG Name i.e PayNest' required/>
    <input type='text' className='h-pg-ip' name='PgSname' placeholder='i.e Gents Hostel' />
    <br/>
    <br/>

    <input type='number' className='h-pg-ip' min='2000' max='2018' name='YOS' placeholder='Started Year i.e 2015' />
    <input type='text' className='h-pg-ip' size='10' name='Contact' placeholder='Contact No. i.e 9876543210' required/>
    <br/>
    <br/>

    <textarea className='h-pg-ta' name='Address' rows="3" placeholder='Address i.e Door No, Street Name, City-Pincode' />
    <input type='number' className='h-pg-ip half-width' size='5' min='100' max='99999' name='Rent' placeholder='Monthly Rent' />
    <input type='number' className='h-pg-ip half-width' size='5' min='100' max='99999' name='Advance' placeholder='Sec. Deposit' />
    <input type='number' className='h-pg-ip' size='1' min='1' max='9' name='Sharing' placeholder='Sharing i.e 2' />
    <input type='url' className='h-pg-ip' name='Image1' placeholder='Primary Image URL' />
    <input type='url' className='h-pg-ip' name='Image2' placeholder='Secondary Images URL' />
    <input type='url' className='h-pg-ip' name='Image3' placeholder='Secondary Images URL' />

    <div className='pset'>
        <input type="checkbox" name='wifi' value='wifi' className='cb' />
        <div className='hw wifi tooltip'><span className='tooltiptext'>Wifi</span>
        </div>
        <input type="checkbox" name='tv' value='tv' className='cb' />
        <div className='hw tv tooltip'><span className='tooltiptext'>TV</span>
        </div>
        <input type="checkbox" name='water' value='water' className='cb' />
        <div className='hw water tooltip'><span className='tooltiptext'>Water</span>
        </div>
        <input type="checkbox" name='vfood' value='vfood' className='cb' />
        <div className='hw vfood tooltip'><span className='tooltiptext'>Veg Food</span>
        </div>
        <input type="checkbox" name='nvfood' value='nvfood' className='cb' />
        <div className='hw nvfood tooltip'><span className='tooltiptext'>Non Food</span>
        </div>
        <input type="checkbox" name='geyser' value='geyser' className='cb' />
        <div className='hw geyser tooltip'><span className='tooltiptext'>Geyser</span>
        </div>
        <input type="checkbox" name='fridge' value='fridge' className='cb' />
        <div className='hw fridge tooltip'><span className='tooltiptext'>Fridge</span>
        </div>
        <input type="checkbox" name='ac' value='ac' className='cb' />
        <div className='hw ac tooltip'><span className='tooltiptext'>AC</span>
        </div>
        <input type="checkbox" name='locker' value='locker' className='cb' />
        <div className='hw locker tooltip'><span className='tooltiptext'>Locker</span>
        </div>
        <input type="checkbox" name='cam' value='cam' className='cb' />
        <div className='hw cam tooltip'><span className='tooltiptext'>S.Camera</span>
        </div>
    </div>
    <button type='submit' className='btn-submit' onClick={this.handleClick}></button>
</form>
        )
    }
}


export default HostForm;
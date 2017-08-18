import React from 'react'
import HostForm from './Objects/HostForm'
import Loading from './Objects/Loading'
const Host = () => (
    <div className='h-main'>
        <div className='h-dentry disabled'>
            <HostForm />
        </div>
        <div className='h-dentry'>
            <HostForm />
        </div>
        <div className='h-dentry disabled'>
            <HostForm />
        </div>
    </div>
)

export default Host

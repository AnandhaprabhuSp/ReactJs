import React from 'react'
import CusButton from './Objects/CusButton'
import HeadLogo from './Objects/HeadLogo'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
        <div className='header-logo'><Link to='/'><HeadLogo /></Link></div>
        <div className='hostVis'><Link to='/host'><CusButton view={"true"}/></Link></div>
        <div className='hostVis'><Link to='/visit'><CusButton view={false}/></Link></div>
  </header>
)

export default Header

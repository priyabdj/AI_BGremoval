import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center gap-4 justify-between px-4 lg:px-44 py-3'>
        <img src={assets.logo} alt="" width={150} />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @AI | All right reserved.</p>

        <div className='flex gap-1'>
            <img src={assets.facebook_icon} width={40} alt="" />
            <img src={assets.twitter_icon}  width={40}alt="" />
            <img src={assets.google_plus_icon} width={40} alt="" />
        </div>
    </div>
  )
}

export default Footer
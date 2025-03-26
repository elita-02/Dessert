import React from 'react'
import Call from '../../Components/Call/Call'
import "./Cal.scss"
import Vk from '../../Components/VK/Vk'
import Google from '../../Components/Google/Google'
import Email from '../../Components/Emmail/Email'
import { Link } from 'react-router-dom'
function Cal() {
  return (
    <div className='cal container'>
    <div className='kal'>
     <h1>Авторизация</h1>
     <Link to="/cal">
     <Call/>
     </Link>
     <div className='syz'>
          <p>--------------</p>
          <p>Или</p>
          <p>---------------</p>
        </div>
        <Vk/>
        <Link to="/">
        <Google/>
        </Link>
        <Link to="/">
        <Email/>
        </Link>
    </div>
    </div>
  )
}

export default Cal

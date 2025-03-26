import React from 'react'
import "./Vk.scss"
import vk from "../../assets/svg/vk.svg"
import { Link } from 'react-router-dom'
function Vk() {
  return (
    <div className='vk'>
        <Link to="">
    <button>
           <img src={vk} alt="" />
           Продолжить с VK
   </button>
        </Link>
 </div>
  )
}

export default Vk

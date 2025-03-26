import React from 'react'
import "./Call.scss"
import call from "../../assets/svg/call.svg"
function Call() {
  return (
         <div className='Call'>
            <button>
                   <img src={call} alt="" />
                   По номеру телефона
           </button>
         </div>
  )
}

export default Call

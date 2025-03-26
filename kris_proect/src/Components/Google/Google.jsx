import React from 'react'
import "./Goofle.scss"
import google from "../../assets/svg/google.svg"
function Google() {
  return (
    <div className='google'>
    <button>
    <img src={google} alt="" />
    Продолжить с Google
    </button>
  </div>
  )
}

export default Google

import React from 'react'
import "./Email.scss"
import email from "../../assets/svg/email.svg"
import { Link } from 'react-router-dom'
function Email() {
  return (
      <div className='email'>
        <Link to="/emmail">
        <button>
        <img src={email} alt="" />
        Продолжить с почтой
        </button>
        </Link>
      </div>

  )
}

export default Email

import React from 'react'
import man from "../../assets/svg/man.svg"
import { Link } from 'react-router-dom'
import "./Profil.scss"
function Profil() {
  return (
    <div className='profil'>
         <button>
        <img src={man} alt="" />
          <Link to="/profile">Личный кабинет</Link>
      </button>
    </div>
  )
}

export default Profil

import React from 'react'
import burger from "../../assets/svg/burger.svg";
import { Link } from 'react-router-dom';
import "./Catalog.scss"
function Catalog() {
  return (
    <div className='burger'>
      <button>
        <img src={burger} alt="" />
      <Link to="/">Каталог</Link>
      </button>
    </div>
  )
}

export default Catalog

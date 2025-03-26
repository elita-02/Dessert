
import React from 'react';
import burger from "../../assets/svg/burger.svg";
import { Link } from 'react-router-dom';
import "./Catalog.scss";

function Catalog() {
  return (
    <div className='burger'>
      <Link to="/" className="catalog-link-full">
        <button>
          <img src={burger} alt="Каталог" />
          <span className="catalog-link">Каталог</span>
        </button>
      </Link>
    </div>
  );
}

export default Catalog;
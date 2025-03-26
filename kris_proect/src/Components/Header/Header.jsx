import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import logo from "../../assets/svg/logo.svg";
import Profil from '../Profil/Profil';
import Catalog from '../catalog/Catalog';

function Header() {
  return (
    <div className='header container'>
      <Link to="/">
        <img src={logo} alt="Логотип" />
      </Link>

      <div className="desktop-catalog">
        <Catalog />
      </div>

      <nav>
        <ul>
          <li><Link to="/wholesale">Оптовые продажи</Link></li>
          <li><Link to="/reteil">Продажи в рознице</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/vakansy">Вакансии</Link></li>
          <li><Link to="/reviews">Отзывы</Link></li>
        </ul>
      </nav>

      <div className="header-right">
        <Profil />
        <div className="mobile-catalog">
          <Catalog />
        </div>
      </div>
    </div>
  );
}

export default Header;

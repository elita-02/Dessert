import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer container">
      <p>© Кондитерские изделия «Кристалл», 2000–2023</p>
      <div className="footer_right">
        <p>
          <Link to="/privacy-policy">Политика конфиденциальности</Link>
        </p>
        <p>
          <a href="tel:+78412709900">+7 (8412) 709-900</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
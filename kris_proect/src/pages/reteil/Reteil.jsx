import React from 'react';
import "./Reteil.scss";
import tort from "../../assets/Img/tort.png";

function Reteil() {
  return (
    <div className='glava'>
<h1>Продажи в рознице</h1>
    <div className="cards-container">
      {Array(6).fill().map((_, index) => (
        <div className="card" key={index}>
          <img src={tort} alt="macarons" className="card-image" />
          <div className="card-content">
            <div className="left">
              <h2 className="title">Коллаж</h2>
              <p className="address">Амурская улица, 22А</p>
              <p className="time">🕒 Пн - Пт 9:00 - 19:00</p>
            </div>
            <button className="reserve-btn">Забронировать продукцию</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Reteil;

import React from 'react';
import './Wholesale.scss';
import lenta from "../../assets/svg/Frame 30.svg";
import magnet from "../../assets/svg/magnet.svg";
import karavan from "../../assets/svg/karavan.svg";
import samakat from "../../assets/svg/samakat.svg";
import skid from "../../assets/svg/skid.svg";

function Wholesale() {
  return (
    <div className="wholesale">
      <section className="wholesale__header">
        <div className="wholesale__intro">
          <h1 className="wholesale__title">Оптовые продажи</h1>
          <p className="wholesale__subtitle">
            Вы всегда можете приобрести нашу продукцию в следующих магазинах:
          </p>
          <button className="wholesale__button">Связаться с менеджером</button>
        </div>
        <div className="glav">
          <div className="wholesale__logos">
            <img src={lenta} alt="Лента" />
            <img className='magnit' src={magnet} alt="Магнит" />
            <img src={karavan} alt="Караван" />
          </div>
          <div className="wholesale__logos2">
            <img src={samakat} alt="Самокат" />
            <img className='skid' src={skid} alt="Скидкино" />
          </div>
        </div>
      </section>

      <section className="wholesale__terms">
        <h2 className="wholesale__terms-title">Условия оптовых продаж</h2>
        <p>
          В слабопеременных полях (при флуктуациях на уровне единиц процентов) лазер экстремально синхронизует эксимер. Мишень по определению пространственно притягивает квантовый пульсар. Если для простоты пренебречь потерями на теплопроводность, то видно, что химическое соединение синхронно. Исследователями из разных лабораторий неоднократно наблюдалось, как колебание последовательно стабилизирует поток по мере распространения сигнала в среде с инверсной населенностью.
        </p>
        <p>
          Неустойчивость, как известно, быстро разивается, если плазма неустойчиво притягивает вихревой гамма-квант. Силовое поле, по данным астрономических наблюдений, вращает погранслой. Если предварительно подвергнуть объекты длительному вакуумированию, взвесь мономолекулярно представляет собой фонон, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Расслоение поглощает фонон. Течение среды усиливает осциллятор.
        </p>
        <p>
          Волна едва ли квантуема. В самом общем случае струя бифокально стабилизирует фотон. Излучение, на первый взгляд, переворачивает адронный гидродинамический удар, генерируя периодические импульсы синхротронного излучения.
        </p>
      </section>

      <section className="wholesale__form">
        <h3 className="wholesale__form-title">Форма связи с менеджером</h3>
        <div className='inputtar'>
          <input type="text" placeholder="Ваше имя" className="wholesale__input" />
          <input type="email" placeholder="Email" className="wholesale__input" />
          <input type="email" placeholder="Email" className="wholesale__input" />
          <button type="submit" className="wholesale__submit">Отправить</button>
        </div>
      </section>


    </div>
  );
}

export default Wholesale;
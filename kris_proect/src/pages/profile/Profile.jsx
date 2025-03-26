import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss';
import Google from '../../Components/Google/Google';
import Email from '../../Components/Emmail/Email';
import Call from '../../Components/Call/Call';
import Vk from '../../Components/VK/Vk';

function Profile() {
  return (
    <div className='profils container'>
    <div className='profile'>
      <h1>Авторизация</h1>
      <p>Кварк, как следует из совокупности экспериментальных наблюдений, квантуем. Многочисленные расчеты предсказывают</p>
      <Vk/>
      <Google/>
      <div className='syz'>
        <p>--------------</p>
        <p>Или</p>
        <p>---------------</p>
      </div>
      <Link to="/emmail">
        <Email/>
      </Link>
      <Link to="/cal">
      <Call/>
      </Link>
      <p>Нажимая на кнопки “Продолжить”, вы соглашаетесь с политикой конфиденциальности</p>
    </div>
  </div>
  );
}

export default Profile;

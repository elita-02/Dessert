
import React, { useState } from 'react';
import './Emmail.scss'; 
import Vk from '../../Components/VK/Vk';
import Google from '../../Components/Google/Google';
import Call from '../../Components/Call/Call';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../filebase'; 
import {  toast } from 'react-toastify';

function Emmail() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function createUser() {
      try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created:", res);
          if(res) {
            toast.success("колдонуучу ийгиликтүү түзүлгөн")
          }
      } catch (error) {
        toast.error(error.message)
          if (error.code === "auth/email-already-in-use") {
              alert("Бул почта мурун катталган! Кирүү үчүн жаны логин колдон.");
          } else {
              console.error(error);
          }
      }
  }
  

    return (
        <div className='emmail container'>
            <div className='email_card'>
                <h1>Авторизация</h1>
                <div className='In'>
                    <input onChange={(e) => setEmail(e.target.value)}
                           value={email}
                           type="text" placeholder='Ваша почта' />
                </div>
                <div className='In'>
                    <input onChange={(e) => setPassword(e.target.value)} 
                           value={password}
                           type="password" placeholder='Пароль' />
                </div>
                <div className='continue_button'>
                    <button onClick={createUser}>Продолжить</button>
                </div>
                <p>Нажимая на кнопки “Продолжить”, вы соглашаетесь с политикой конфиденциальности</p>
                <div className='syz'>
                    <p>--------------</p>
                    <p>Или</p>
                    <p>---------------</p>
                </div>
                <Vk className="social-btn"/>
                <Google  className="social-btn"/>
                <div className='kan'>
                    <Link to="/cal">
                        <Call/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Emmail;

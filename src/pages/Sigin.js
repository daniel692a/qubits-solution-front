import { useState } from 'react';
import './Sigin.css';
import Login from '../assets/signin.svg';
import Close from '../assets/eye-close.svg';
import Eye from '../assets/eye.svg';

const Signin = () => {
    const [visible, setVisible] = useState('password');
    const changeIcon = () => {
        const form = document.querySelector('.sigin-form');
        const passwordInput = document.querySelector('#icon');
        if(visible==='text'){
            passwordInput.src=Close;
        } else {
            passwordInput.src=Eye;
        }
    }
    const changeState = () => {
        if(visible==='password') {
            setVisible('text');
        } else {
            setVisible('password');
        }
        changeIcon();
    }
    return (
        <>
            <h1>Iniciar Sesión</h1>
            <figure>
                <img src={Login} alt='Usuario iniciando sesión'/>
            </figure>
            <form className='sigin-form' action='#'>
                <label for='email'>
                    <span>Correo Electrónico:</span>
                    <input type='email' placeholder='ejemplo@dominio.com' id='email' autoComplete='email' required/>
                </label>
                <label for='password'>
                    <span>Contraseña:</span>
                    <input type={visible} placeholder='Contraseña' autoComplete='new-password' id='password' required /><button onClick={changeState}><img src={Eye} id='icon' alt='Mostrar contraseña'/></button>
                </label>
                <input type='submit' value='Entrar'/>
            </form>
        </>
    )
}

export default Signin;

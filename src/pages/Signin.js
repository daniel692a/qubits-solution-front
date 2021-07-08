import { useState } from 'react';
import './Signin.css';
import Login from '../assets/signin.svg';
import Close from '../assets/eye-close.svg';
import Eye from '../assets/eye.svg';

const Signin = () => {
    const [visible, setVisible] = useState('password');
    const changeIcon = () => {
        const passwordInput = document.querySelector('#icon');
        if(visible==='text'){
            passwordInput.src=Close;
        } else {
            passwordInput.src=Eye;
        }
    }
    const changeState = (e) => {
        if(visible==='password') {
            setVisible('text');
        } else {
            setVisible('password');
        }
        changeIcon();
        e.preventDefault();
    }
    return (
        <>
            <h1 className='signin-title'>Iniciar Sesión</h1>
            <figure className='sigin-img'>
                <img src={Login} alt='Usuario iniciando sesión'/>
            </figure>
            <form className='sigin-form' action='#'>
                <label for='email'>
                    <span>Correo Electrónico:</span>
                    <input type='email' placeholder='ejemplo@dominio.com' id='email' autoComplete='email' required/>
                </label>
                <label for='password'>
                    <span>Contraseña:</span>
                    <input type={visible} placeholder='Contraseña' autoComplete='current-password' id='password' required /><button onClick={changeState}><img src={Eye} id='icon' alt='Mostrar contraseña'/></button>
                </label>
                <input type='submit' value='Entrar'/>
            </form>
        </>
    )
}

export default Signin;

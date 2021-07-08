import './Signup.css';
import Register from '../assets/signup.svg';

const SignUp = () => {
    return (
        <div className='signup'>
            <h1>Bienvenido, Regístrate</h1>
            <form className='sigup-form' >
                <label for='name'>
                    <span>Nombre Completo:</span>
                    <input type='text' id='name' autoComplete='name' placeholder='Nombre' />
                </label>
                <label>
                    <span>Correo Electrónico</span>
                    <input type='email' id='email' placeholder='ejemplo@dominio.com' autoComplete='email' />
                </label>
                <label>
                    <span>Teléfono</span>
                    <input type='tel' id='phone' placeholder='1234567890' autoComplete='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </label>
                <label>
                    <span>Selecciona tu estado:</span>
                    <input list='states' name='states' /> </label>
                    <datalist id='states'>
                        <option value="CDMX" />
                        <option value="Aguascalientes" />
                        <option value="Baja California" />
                        <option value="Baja California Sur" />
                        <option value="Campeche" />
                        <option value="Chiapas" />
                        <option value="Chihuahua" />
                        <option value="Coahuila" />
                        <option value="Colima" />
                        <option value="Durango" />
                        <option value="Guanajuato" />
                        <option value="Estado de México" />
                        <option value="Guanajuato" />
                        <option value="Guerrero" />
                        <option value="Hidalgo" />
                        <option value="Jalisco" />
                        <option value="Michoacán" />
                        <option value="Morelos" />
                        <option value="Nayarit" />
                        <option value="Nuevo León" />
                        <option value="Oaxaca" />
                        <option value="Puebla" />
                        <option value="Querétaro" />
                        <option value="Quintana Roo" />
                        <option value="San Luis Potosí" />
                        <option value="Sinaloa" />
                        <option value="Sonora" />
                        <option value="Tabasco" />
                        <option value="Tamaulipas" />
                        <option value="Tlaxcala" />
                        <option value="Veracruz" />
                        <option value="Yucatán" />
                        <option value="Zacatecas" />
                    </datalist>
                    <label>
                        <span>Dirección:</span>
                        <input type='text' autoComplete='street-address' />
                    </label>
                    <label>
                        <span>Contraseña:</span>
                        <input type='password' autoComplete='new-password' />
                    </label>
            </form>
            <figure>
                <img src={Register} alt='Usuario registrandose' />
            </figure>
        </div>
    )
}

export default SignUp;
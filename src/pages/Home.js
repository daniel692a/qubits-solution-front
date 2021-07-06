import './Home.css';
import Payment from '../assets/payment.svg'

const Home = () => {
    return (
        <>
            <section className="presentation">
                <h1>Bienvenido a Obio</h1>
                <h2>Obio es la plataforma que promueve el consumo de productos orgánicos hechos en México</h2>
                <figure>
                    <img src={Payment} alt='Comercio Electrónico'/>
                </figure>
            </section>
            <section class="products">
                <h3>Conoce nuestros productos</h3>
            </section>
        </>
    )
}

export default Home;
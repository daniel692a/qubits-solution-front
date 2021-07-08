import './Home.css';
import Shop from '../assets/shop.svg';
import Cafe from '../assets/cafe.svg';
import Miel from '../assets/miel.svg';
import Arte from '../assets/arte.svg';
import Herbolaria from '../assets/herbolario.svg';
import Piel from '../assets/piel.svg';
import Card from '../components/Card';

const Home = () => {
    return (
        <>
            <section className="presentation">
                <h1>Bienvenido a Obio</h1>
                <figure>
                    <img src={Shop} alt='Comercio Electrónico'/>
                </figure>
                <h2>Obio es la plataforma que promueve el consumo de productos orgánicos hechos en México.</h2>
            </section>

            <section className="products">
                <h3>Conoce nuestros productos:</h3>
                    <Card
                        product='Café'
                        image={Cafe}
                        description='Imagen de un café'
                    />
                    <Card
                        product='Herbolaria'
                        image={Herbolaria}
                        description='Imagen referente a la herbolaria'
                    />
                    <Card
                        product='Miel'
                        image={Miel}
                        description='Imagen de miel en un tarro'
                    />
                    <Card
                        product='Artesanías'
                        image={Arte}
                        description='Imagen de un Artesano'
                    />
                    <Card
                        product='Cuidado de la piel'
                        image={Piel}
                        description='Cuidado de la piel'
                    />
            </section>

            <section className='description'>
                <h3>Orgánico</h3>
                <h3>Natural</h3>
                <h3>Justo</h3>
                <h3>¡Es Obio!</h3>
            </section>
        </>
    )
}

export default Home;
import './Card.css';

const Card = ({product, image, description}) => {
    return (
        <section className='products-container'>
            <section className='card-product'>
            <figure>
                    <img src={image} alt={description}/>
            </figure>
            <h4>{product}</h4>
            </section>
        </section>
    )
}

export default Card
let styles = {
    h1 : {
        fontFamily: "FiraSans",
        fontSize: "3rem",
        textAlign: "center"
    }
}
const Home = (props) => {
    return (
        <>
            <h1 style={styles.h1}>Bienvenido a Obio</h1>
            <p>Obio es la plataforma que promueve el consumo de productos orgánicos hechos en México</p>
            <h2>Consume nuestros productos</h2>
        </>
    )
}

export default Home;
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import './home.css'


const Home = () => {
    return (
    <>
        <Header />
        <div className='home_container'>
            <Products />
        </div>
    </>
    )
}

export default Home

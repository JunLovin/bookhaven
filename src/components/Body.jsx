import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '@styles/Body.css'
import bg0 from '@public/images/bg0.webp'
import bg1 from '@public/images/bg1.webp'
import bg2 from '@public/images/bg2.webp'
import bg3 from '@public/images/bg3.webp'
import Card from './Card'
import Footer from './Footer'

const bestSeller = ['VpQnEQAAQBAJ', 'Qu_GEAAAQBAJ', '89b5EAAAQBAJ', 'sbybDwAAQBAJ', 'OJjkEAAAQBAJ', 'fWxdDwAAQBAJ', 'AW24EAAAQBAJ', 'ryVnDwAAQBAJ', '1jwDEAAAQBAJ', 'reSgAAAAQBAJ', 'Rr86EQAAQBAJ', 'RZXQEAAAQBAJ']

function Body({ isShow }) {
    const images = [bg0, bg1, bg2, bg3]
    const name = ['Hábitos Atómicos', 'El Poder del Ahora', 'Padre Rico Padre Pobre', 'El Hombre Más Rico de Babilonia']
    const ids = ['sbybDwAAQBAJ', 'reSgAAAAQBAJ', 'NEz44me8a5MC', 'R_li0AEACAAJ']
    const [currentImage, setCurrentImage] = useState(0)
    const [data, setData] = useState(null)
    const [bestSellerData, setBestSellerData] = useState([])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)
        fetch(`https://www.googleapis.com/books/v1/volumes/${ids[currentImage]}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error))
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                const promises = bestSeller.map(id => 
                    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
                    .then(res => res.json())
                )
                const results = await Promise.all(promises)
                setBestSellerData(results)
            } catch (error) {
                console.error(error)
            }
        }
        fetchBestSellers()
    }, [])

    return (
        <>
        {isShow &&
            <section className="main-content">
                <article className="bg-change">
                        <div className="overlay">
                            <div className="overlay-text">
                                <h2>¡Lee los libros más vendidos!</h2>
                                <p>Estamos capacitados con los últimos bestsellers del mercado y todo a un precio increíble. <span className="bookhive">¡Solo en BookHive!</span></p>
                                
                                <Link to={`/book/${ids[currentImage]}`} className="link"><button>{name[currentImage] && name[currentImage]}</button></Link>
                            </div>
                        </div>
                        <img src={images[currentImage]}/>
                </article>
                <article className="book-cards-container">
                    <div className="book-cards-title">
                        <h3>Los más vendidos</h3>
                    </div>
                    <div className="cards">
                        {bestSellerData.length > 0 ? bestSellerData.map((book, index) => (
                            <Link key={index} className="body-cards-link" to={`/book/${book.id}`}><Card description={false} author={false} items={book} className="body-cards" /></Link>
                        )) : <div>Loading...</div>}
                    </div>
                </article>
                <Footer isShow={isShow}/>
            </section>
        }
        </>
    )
}

export default Body;
import { useState, useEffect } from 'react'
import '@styles/Body.css'
import bg0 from '@public/images/bg0.webp'
import bg1 from '@public/images/bg1.webp'
import bg2 from '@public/images/bg2.webp'
import bg3 from '@public/images/bg3.webp'

function Body() {
    const images = [bg0, bg1, bg2, bg3]
    const name = ['Hábitos Atómicos', 'El Poder del Ahora', 'Padre Rico Padre Pobre', 'El Hombre Más Rico de Babilonia']
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
        <section className="main-content">
            <article className="bg-change">
                    <div className="overlay">
                        <div className="overlay-text">
                            <h2>¡Lee los libros más vendidos!</h2>
                            <p>Estamos capacitados con los últimos bestsellers del mercado y todo a un precio increíble. <span className="bookhive">¡Solo en BookHive!</span></p>
                            <button>{name[currentImage]}</button>
                        </div>
                    </div>
                    <img src={images[currentImage]}/>
            </article>
        </section>
        </>
    )
}

export default Body;
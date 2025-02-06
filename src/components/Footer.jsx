import { useState } from 'react'
import '@styles/Footer.css'

function Footer() {
    const [email, setEmail] = useState('')

    const handleEmail = ({ target }) => {
            setEmail(target.value)
    }

    const handleSubmit = () => {
        const email = document.getElementById('newsletterEmail')
        if (email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            email.style.borderColor = 'green'
            email.value = ''
            email.placeholder = 'Thanks for subscribing!'
        } else {
            alert('Please enter a valid email.')
        }
    }

    return (
        <>
            <footer>
                <div className="links-newsletter-container">
                    <div className="footer-info">
                        <ul>
                            <h2>Información</h2>
                            <li><a href="">Example</a></li>
                            <li><a href="">Example</a></li>
                            <li><a href="">Example</a></li>
                            <li><a href="">Example</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <ul>
                            <h2>Contacto</h2>
                            <li><a href="">Example</a></li>
                            <li><a href="">Example</a></li>
                            <li><a href="">Example</a></li>
                            <li><a href="">Example</a></li>
                        </ul>
                    </div>
                    <div className="footer-newsletter">
                        <h2>Newsletter</h2>
                        <p>¡Para recibir las últimas actualizaciones de nuestra newsletter ingresa tu correo y te llegarán nuestras notificaciones y promociones únicas!</p>
                        <input type="email" value={email} id="newsletterEmail" onChange={handleEmail} placeholder='jhondoe@example.com'/>
                        <button onClick={handleSubmit}>Suscribirse</button>
                    </div>
                </div>
                <p className="rights">&copy; BookHive 2025 All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer
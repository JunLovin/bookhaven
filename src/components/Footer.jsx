import '@styles/Footer.css'

function Footer() {
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
                    <input type="email" placeholder='jhondoe@example.com'/>
                    <button>Suscribirse</button>
                </div>
            </div>
            <p className="rights">&copy; BookHive 2025 All rights reserved.</p>
        </footer>
        </>
    )
}

export default Footer
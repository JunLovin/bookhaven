import { Link } from 'react-router-dom'
import '@styles/Contact.css'
import github from '@public/icons/github.svg'
import mail from '@public/icons/mail.svg'
import world from '@public/icons/world.svg'

function Contact() {
    return (
        <>
        <section className="contact-container">
            <div className="contact-info">
                <h2>Contact</h2>
                <p>Here&apos;s a section to every person that wanna contact me.</p>
                <Link to="/" className="goback-contact">Go back</Link>
                <div className="social-media-list">
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="https://github.com/JunLovin" target='_blank'><img src={github} alt="github"/></a></li>
                        <li><a href="mailto:mathiassaid7@gmail.com"><img src={mail} alt="mail"/></a></li>
                        <li><a href="https://said-beta.vercel.app" target='_blank'><img src={world} alt="Personal web page"/></a></li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;
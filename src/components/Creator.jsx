import '@styles/Creator.css'
import { Link } from 'react-router-dom';

function Creator() {
    return (
        <>
        <section className="creator-info-container">
            <div className="creator-info">
                <h2>JunLovin</h2>
                <p>I like computers 🧑🏻‍💻.<br/>Also I&apos;m coffee lover ☕♥️.</p>
                <Link to="/" className="goback-creator">Go back</Link>
            </div>
        </section>
        </>
    )
}

export default Creator;
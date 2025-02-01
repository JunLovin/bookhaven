import { Link } from "react-router-dom";
import dogReading from '@public/dogReading.gif'
import '@styles/Error.css'

function DefaultError() {
    return (
        <>
        <section className="error-section">
            <img
            src={dogReading}
            alt='Dog reading'
            />
            <h2>Oh no! Something is bad D:</h2>
            <p>This site is in maintanance or doesn&apos;t exist. Please <Link to="/" className="link">click here</Link> to go back</p>
            <p className="quote">Also here&apos;s a dog reading! :D</p>
        </section>
        </>
    )
}

export default DefaultError;
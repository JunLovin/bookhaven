import '@styles/BookHavenInfo.css'
import { Link } from 'react-router-dom'

function BookHavenInfo() {
    return (
        <>
        <section className="bookhaven-info">
            <div className="info-container">
                <h2>Welcome to BookHaven!</h2>
                <p>This page is didactic, all books are from <a href="https://books.google.com" target="_blank">Google Books</a>, I used their API to make this page reality.</p>
                <br/>
                <p>If you have feedback please contact me through my GitHub, i will be greatful!</p>
                <Link to="/" className="goback">Click here to go back</Link>
                <p className="btw">Btw, It&apos;s my first web with functionality and it cost me so much! And I know, this isn&apos; the best web of all time. I appreciate if you have feedback and let me know your ideas.</p>
            </div>
        </section>
        </>
    )
}

export default BookHavenInfo
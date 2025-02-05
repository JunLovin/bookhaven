import { Link } from 'react-router-dom';
import '@styles/Card.css'

function Card({ items, onClick, className = 'card-container' }) {
    const volumeInfo = items.volumeInfo || {}; // Default to an empty object if undefined

    return (
        <>
        <div className={className} onClick={onClick}>
            <div className="card">
                <div className="card-image-container">
                    {volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail ? (
                        <img
                        src={volumeInfo.imageLinks.thumbnail}
                        alt={volumeInfo.title}
                        className="img"
                        />
                    ) : (
                        <div>No Image Available</div>
                    )}
                </div>
                <div className="card-info-container">
                    <h2>{volumeInfo.title || 'Title Not Available'}</h2>
                    <h3>Author(s): {volumeInfo.authors ? volumeInfo.authors.map((element, index) => <span key={index}>{element}</span>) : <span>Not Available</span>}</h3>
                    <p>{volumeInfo.description && volumeInfo.description.length < 1500 ? volumeInfo.description : <span>Description Not Available</span>}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;
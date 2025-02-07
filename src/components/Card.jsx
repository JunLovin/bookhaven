import '@styles/Card.css'

function Card({ items, onClick, className = 'card-container', description = true, author = true, classNameImage = 'card-image-container' }) {
    const volumeInfo = items.volumeInfo || {};

    return (
        <>
        <div className={className} onClick={onClick}>
            <div className="card">
                <div className={classNameImage}>
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
                    <h3>
                        {author && (
                            <>
                                <span>Author(s):</span> 
                                {volumeInfo.authors ? volumeInfo.authors.map((element, index) => <span key={index}>{element}</span>) : <span>Not Available</span>}
                            </>
                        )}
                    </h3>
                    <p>{description && (volumeInfo.description && volumeInfo.description.length < 1500 ? volumeInfo.description : <span>Description Not Available</span>)}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '@styles/BookDetail.css'
import '@styles/Header.css'
import { useParams } from 'react-router-dom'
import DropDownMenu from './DropdownMenu'
import logo from '@public/images/logo.png'
import heart from '@public/heart.svg'
import searchIcon from '@public/search.svg'
import shoppingBag from '@public/shoppingBag.svg'
import Card from './Card'

function BookDetail() {
    const { id } = useParams()
    const [book, setBook] = useState(null)
    const [error, setError] = useState(null)

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [errorSearch, setErrorSearch] = useState(null)
    const [isShow, setIsShow] = useState(false)

    const handleSearch = e => {
        if (e.key === 'Enter') {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.items)
            })
            .catch((err) => setErrorSearch(err))
            setIsShow(true)
        }
    }
    
    error && console.log(error)
    
    const handleAddSearc = e => {
        setSearch(e.target.value)
    }
    console.log(data)   


    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data))
        .catch((err) => setError(err))
    }, [id])

    if (error || errorSearch) {
        return <div>Error: {error.message}</div>
    }



    const handleClick = url => {
        window.open(url, '_blank')
    }
    if (!book) {
        <div>Loading...</div>
    } else {
        return (
            <>
            <header>
            <nav>
                <DropDownMenu className="dropdown-mobile" id="dropdown-mobile" firstLi="One" secondLi="Two" thirdLi="Three" menuTitle="Opciones"/>
                <div className="links-list">
                <ul>
                    <li><Link to="/d" className="link">One</Link></li>
                    <li><Link to="/d" className="link">Two</Link></li>
                    <li><Link to="/d" className="link">Three</Link></li>
                    <DropDownMenu className="dropdown-menu" firstLi="BookHaven" secondLi="Creator" thirdLi="Contact" menuTitle="Información"/>
                </ul>
                </div>
                <Link to="/">
                <img
                src={logo}
                alt='logo'
                className="header-logo"
                /></Link>
                <div className="heart-shopping">
                    <img src={searchIcon} alt="search icon" className="search"/>
                    <input type="text" value={search} onChange={handleAddSearc} placeholder='Searching Book...' onKeyDown={handleSearch} />
                    <img
                    src={heart}
                    alt='books liked'
                    className="liked-books"
                    />
                    <img
                    src={shoppingBag}
                    alt='Books to buy'
                    className="shopping-bag"
                    />
                </div>
            </nav>
        </header>
        <div className="cards-container">
            {isShow && data.map((element, index) => {
                return (
                <Link to={`/book/${element.id}`} key={index} className="link">
                    <Card items={element} id={element.id} onClick={() => setIsShow(false)}/>
                </Link>
            )
            })}
        </div>
        {!isShow && 
            <section className="bookDetailSection">
                <div className="book-container">
                    <div className="book-image-preview">
                        <img
                        src={book.volumeInfo.imageLinks.large ? book.volumeInfo.imageLinks.large : book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                        />
                    </div>
                    <div className="book-info">
                        <h1>{book.volumeInfo.title}</h1>
                        <h2>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.map((element, index) => {return (<span key={index}>{element}</span>)}) : <span>Not Founded</span>}</h2>
                        <p>{book.volumeInfo.description ? book.volumeInfo.description : 'Description not founded'}</p>
                        <div className="buy-book">
                            <p>Price: {book.saleInfo.listPrice ? <span>{book.saleInfo.listPrice.amount}</span> : <span>Not found</span>}{book.saleInfo.listPrice ? <span>{book.saleInfo.listPrice.currencyCode}</span> : <span></span>}</p>
                            <div className="buy-book-btns">
                                <button className="buy-btn">Buy</button>
                                <button className="preview-btn" onClick={() => handleClick(book.volumeInfo.previewLink)}>See preview</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    }
            </>
        )
    }
}

export default BookDetail
import { useState } from 'react'
import { Link } from "react-router-dom";
import dogReading from '@public/images/dogReading.gif'
import '@styles/Error.css'
import logo from '@public/images/logo.png'
import heart from '@public/heart.svg'
import searchIcon from '@public/search.svg'
import shoppingBag from '@public/shoppingBag.svg'
import DropDownMenu from '../components/DropdownMenu';
import Card from '../components/Card';

function DefaultError() {

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
    
    errorSearch && console.log(errorSearch)
    
    const handleAddSearc = e => {
        setSearch(e.target.value)
    }
    console.log(data)

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
        <section className="error-section">
            <img
            src={dogReading}
            alt='Dog reading'
            />
            <h2>Oh no! Something is bad D:</h2>
            <p>This site is in maintanance or doesn&apos;t exist. Please <Link to="/" className="link">click here</Link> to go back</p>
            <p className="quote">Btw here&apos;s a dog reading! :D</p>
        </section>}
        </>
    )
}

export default DefaultError;
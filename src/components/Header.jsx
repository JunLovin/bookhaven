import { useState } from 'react'
import { Link } from 'react-router-dom'
import '@styles/Header.css'
import logo from '@public/images/logo.png'
import heart from '@public/heart.svg'
import searchIcon from '@public/search.svg'
import shoppingBag from '@public/shoppingBag.svg'
import DropDownMenu from './DropdownMenu'
import Card from './Card'
import Body from './Body'
import Footer from './Footer'

function Header() {
    const [isShow, setIsShow] = useState(true)

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const handleSearch = e => {
        if (e.key === 'Enter') {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.items)
            })
            .catch((err) => setError(err))
            setIsShow(false)
        }
    }
    
    error && console.log(error)
    
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
                    <li><Link to="/BookHaven" className="link">One</Link></li>
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
            {data.map((element, index) => {
                return (
                <Link to={`/book/${element.id}`} key={index} className="link">
                    <Card items={element} id={element.id} classNameImage='search-card'/>
                </Link>
            )
            })}
        </div>
        <Body isShow={isShow}/>
        <Footer isShow={!isShow}/>
        </>
    )
}

export default Header;
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '@styles/Header.css'
import logo from '@public/images/logo.png'
import heart from '@public/heart.svg'
import search from '@public/search.svg'
import shoppingBag from '@public/shoppingBag.svg'
import DropDownMenu from './DropdownMenu'
import { API_KEY } from '../config'

function Header() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const handleSearch = e => {
        if (e.key === 'Enter') {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY})`)
            .then((res) => {
                setData(res)
                console.log(data)
            })
            .catch((err) => setError(err))
        }
    }

    error && console.log(error)

    const handleAddSearc = e => {
        setSearch(e.target.value)
    }

    return (
        <>
        <header>
            <Link to="/">
            <img
            src={logo}
            alt='logo'
            className="header-logo"
            /></Link>
            <DropDownMenu/>
            <nav>
                <ul>
                    <li><Link to="/d" className="link">One</Link></li>
                    <li><Link to="/d" className="link">Two</Link></li>
                    <li><Link to="/d" className="link">Three</Link></li>
                </ul>
                <div className="heart-shopping">
                    <input type="text" value={search} onChange={handleAddSearc} onKeyDown={handleSearch}/>
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
        </>
    )
}

export default Header;
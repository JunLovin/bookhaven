import { Link } from 'react-router-dom'
import { useState } from 'react'
import '@styles/DropdownMenu.css'
import downArrow from '@public/dropdownDown.svg'
import upArrow from '@public/dropdownUp.svg'

function DropDownMenu({ menuTitle, className, firstLi, secondLi, thirdLi, id }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    return (
        <>
        <div className={className} id={id} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <button className="dropbtn">
                {menuTitle} {isOpen ? <img src={upArrow} alt="close dropdown menu"/> : <img src={downArrow} alt="Open dropdown menu"/>}
            </button>
            {isOpen && (
                <div className="dropdown-content" onMouseOver={() => setIsOpen(true)}>
                    <Link to="/BookHaven" className="dropdown-link">{firstLi}</Link>
                    <Link to="/Creator" className="dropdown-link">{secondLi}</Link>
                    <Link to="/Contact" className="dropdown-link">{thirdLi}</Link>
                </div>
            )}
        </div>
        </>
    )
}

export default DropDownMenu
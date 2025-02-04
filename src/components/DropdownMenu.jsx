import { Link } from 'react-router-dom'
import { useState } from 'react'
import '@styles/DropdownMenu.css'
import downArrow from '@public/dropdownDown.svg'
import upArrow from '@public/dropdownUp.svg'

function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        setIsOpen(false)
    }

    return (
        <>
        <div className="dropdown-menu" onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <button className="dropbtn">
                Información {isOpen ? <img src={upArrow} alt="close dropdown menu"/> : <img src={downArrow} alt="Open dropdown menu"/>}
            </button>
            {isOpen && (
                <div className="dropdown-content" onMouseOver={() => setIsOpen(true)}>
                    <Link to="/d" className="dropdown-link">BookHive</Link>
                    <Link to="/" className="dropdown-link">Creador</Link>
                    <Link to="/" className="dropdown-link">Contacto</Link>
                </div>
            )}
        </div>
        </>
    )
}

export default DropDownMenu
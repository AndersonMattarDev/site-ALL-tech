import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './img/logoAlltech.jpeg'
import styles from './styles/Navbar.module.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return(
        <nav className={styles.navbar}>
            <Link to="/" onClick={closeMenu}>
                <img src={logo} alt="alltech" className={styles.img} />
            </Link>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`${styles.list} ${isOpen ? styles.active : ''}`}>
                <li className={styles.item}><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li className={styles.item}><Link to="/sobre" onClick={closeMenu}>Sobre</Link></li>
                <li className={styles.item}><Link to="/contato" onClick={closeMenu}>Contato</Link></li>
                <li className={styles.item}><Link to="/lojas" onClick={closeMenu}>Lojas</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
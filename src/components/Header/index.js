import './header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    const [openButton, setOpenButton] = useState(false)

    const displayMenu = () => {
        setOpenButton(!openButton)
    }

    // let currentPage 

    // switch(props){
    //     case 'home': 
    //     currentPage 
    // }

    return (
        <header className='Header'>
            <h2> &lt;  / Adrian Pers &gt;</h2>

            <ul
                className='nav-Header'
                style={{ left: openButton ? '0%' : '-70%' }}>

                <Link to='/' className='links-header'>
                    <li className={props.page === 'Home' ? 'current-page' : ''}>
                        <span className="material-symbols-outlined">
                            home
                        </span>
                        Home
                    </li>
                </Link>

                <Link to='/servicos' className='links-header'>
                    <li className={props.page === 'Services' ? 'current-page' : ''}>
                        <span className="material-symbols-outlined">
                            construction
                        </span>
                        Serviços
                    </li>
                </Link>

                <Link to='/projetos' className='links-header'>
                    <li className={props.page === 'Projects' ? 'current-page' : ''}>
                        <span className="material-symbols-outlined">
                            apps
                        </span>
                        Projetos
                    </li>
                </Link>

                <Link to='/contatos' className='links-header'>
                    <li className={props.page === 'Contacts' ? 'current-page' : ''}>
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                        Contatos
                    </li>
                </Link>
            </ul>

            <button
                className='button-menu'
                onClick={() => displayMenu()}>

                <span className="material-symbols-outlined">
                    {openButton ? 'close' : 'menu'}
                </span>

            </button>

        </header >
    )
}

export default Header
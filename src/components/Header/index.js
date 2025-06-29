import './header.css'
import { useState } from 'react'

const Header = () => {

    const [ openButton, setOpenButton] = useState(false)

    const displayMenu = () => {
        setOpenButton(!openButton)
    }

    return (
        <header className='Header'>
            <h2> &lt;  / Adrian Pers &gt;</h2>

            <ul 
            className='nav-Header'
            style={{left: openButton ? '0%' : '-70%'}}>

                {/* <li> <h3> &lt;  / Adrian Pers &gt;</h3></li> */}
                <li>Home</li>
                <li>Serviços</li>
                <li>Projetos</li>
                <li>Contatos</li>

            </ul>

         

            <button 
            className='button-menu'
            onClick={() => displayMenu()}>
                
                <span className="material-symbols-outlined">
                   {openButton ? 'close' : 'menu' }
                </span>

            </button>
      
        </header>
    )
}

export default Header
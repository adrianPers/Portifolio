import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Services from './pages/Services'

const RoutesApp = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/servicos' element={<Services />} />
                <Route path='/projetos' element={<Projects />} />
                <Route path='/contatos' element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
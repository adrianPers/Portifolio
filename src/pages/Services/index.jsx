import './services.css'
import Header from '../../components/Header'
import List from '../../components/List'
import Functionality from '../../components/Functionality'
import Foto from '../../assets/foto-generica.png'

import imgFunct01 from '../../assets/responsividade.png'
import imgFunct02 from '../../assets/funcionalidade.png'
import imgFunct03 from '../../assets/designer.png'
import imgFunct04 from '../../assets/seo.png'


const Services = () => {
    return (
        <div className='Services'>
            <Header page={'Services'} />
            <div className=''>
                <ul className='list-services'>

                    <li className='img-list'>
                        <img src={Foto} alt='teste' />
                    </li>

                    <li><h2>O que poço fazer por você. . . </h2></li>

                    <li>
                        <List titleList='Criação de sites'
                            itensList={['Sites institucionais', 'Blogs', 'Portifólios']} />
                    </li>
                    <li>
                        <List titleList='Desenvolvimento de Landing Pages'
                            itensList={['Vendas', 'Dowmload', 'Agredecimento']} />
                    </li>
                    <li>
                        <List titleList='Manutenção de sites'
                            itensList={['Atualização', 'Desempenho']} />
                    </li>

                </ul>

                <div className='features'>

                    <h1>Funcionalidades</h1>

                    <Functionality
                    img={imgFunct01}
                    title='Responsividade'
                    description='texto relativamente grande para descrever uma funcionalidade do site'/>
                    <Functionality
                    img={imgFunct02}
                    title='Funcionalidades'
                    description='texto relativamente grande para descrever uma funcionalidade do site'/>
                    <Functionality
                    img={imgFunct03}
                    title='Disegner UX'
                    description='texto relativamente grande para descrever uma funcionalidade do site'/>
                    <Functionality
                    img={imgFunct04}
                    title='title'
                    description='texto relativamente grande para descrever uma funcionalidade do site'/>
                </div>
            </div>

        </div>
    )
}

export default Services
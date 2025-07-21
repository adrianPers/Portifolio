
import Header from '../../components/Header'
import Project from '../../components/Project'
import LinkButton from '../../components/LinkButton'
import './project.css'

import imgProject01 from '../../assets/img-projeto-01.png'

const Projects = () => {
    return (
        <div className='Projects'>
            <Header page={'Projects'} />
            <h1>
                Projetos
                <LinkButton 
                type='github'
                link='https://github.com/adrianPers'/>
            </h1>
            <div className='box-projects'>
                <Project
                    title='Osais Urbano'
                    description='
                    Site ficitício de busca de busca de hotéis feito em html, CSS e JS,
                    Contém um simulador de busca com aplicação de filtros na página de Reservas.'
                    img={imgProject01}
                    linkBtnGithub='https://github.com/adrianPers/oasis-urbano'
                    linkBtnProject='https://oasis-urbano.netlify.app/' />
                <Project
                    linkBtnGithub='https://github.com/adrianPers'
                    linkBtnProject='https://portifolio-dev-pereira.netlify.app/' />
                <Project
                    linkBtnGithub='https://github.com/adrianPers'
                    linkBtnProject='https://portifolio-dev-pereira.netlify.app/' />
                <Project
                    linkBtnGithub='https://github.com/adrianPers'
                    linkBtnProject='https://portifolio-dev-pereira.netlify.app/' />
                <Project
                    linkBtnGithub='https://github.com/adrianPers'
                    linkBtnProject='https://portifolio-dev-pereira.netlify.app/' />
                <Project
                    linkBtnGithub='https://github.com/adrianPers'
                    linkBtnProject='https://portifolio-dev-pereira.netlify.app/' />
            </div>
        </div>
    )
}

export default Projects
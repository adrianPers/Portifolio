
import Header from '../../components/Header'
import Project from '../../components/Project'
import LinkButton from '../../components/LinkButton'
import './project.css'

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
                <Project
                    linkBtnGithub='https://github.com/adrianPers'
                    linkBtnProject='https://portifolio-dev-pereira.netlify.app/' />
            </div>
        </div>
    )
}

export default Projects
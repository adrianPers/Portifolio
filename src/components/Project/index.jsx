
import './project.css'
import Foto from '../../assets/foto-generica.png'
import LinkButton from '../LinkButton'

const Project = (props) => {
    return (
        <div className='Project'>
            
            <img src={Foto} alt='foto de teste' />
            <h3>Título</h3>
            <p> descrição pequena descrição pequena
                descrição pequena
                descrição pequena
                descrição pequena
                </p>
            <div className='box-links-btns' >

            <LinkButton
                type='project'           
                link={props.linkBtnProject} />

            <LinkButton
                type='github'
                link={props.linkBtnGithub} />

            </div>
        </div>
    )
}

export default Project
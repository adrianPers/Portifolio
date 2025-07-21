
import './project.css'
import Foto from '../../assets/foto-generica.png'
import LinkButton from '../LinkButton'

const Project = (props) => {
    return (
        <div className='Project'>
            
            <img 
            src={props.img || Foto}
            alt='foto do projeto'
            title='foto do projeto'/>

            <h3> {props.title || 'Projeto em construção'} </h3>

            <p> {props.description || 'projeto em desenvolvimento, fique atento para eventuais atualizações.'} </p>
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
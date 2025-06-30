
import './link-button.css'

const LinkButton = (props) => {
    return(
        <button className='Link-Button'>
            <a 
            href={props.link} 
            title={props.type === 'project' ? 'Abrir Projeto' : 'Ver código'}>

                {props.type === 'project' ? 'Ver projeto' : 'GitHub'}

            </a>
        </button>
    )
}

export default LinkButton
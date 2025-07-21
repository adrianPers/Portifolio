
import './functionality.css'

const Functionality = (props) => {
    return(
        <div className='Functionality'>

            <img src={props.img} alt='teste' />

            <h2>{props.title}</h2>

            <p>{props.description}</p>

        </div>
    )
}

export default Functionality
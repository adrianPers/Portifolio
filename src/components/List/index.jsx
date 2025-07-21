
import './list.css'

const List = (props) => {
    return(
        <ul className='List'>
            <h4>{props.titleList}</h4>

            {
            props.itensList.map((item, indice) => <li key={indice}>{item}</li>)}

        </ul>
    )
}

export default List
import './Estado.css'

function Estado(props) {
    return(
        <div className='card'>
            <div className='informacoes'>
                <h2 className='sigla'>{props.sigla}</h2>
                <p><strong>{props.nome}</strong></p>
                <p className='regiao'>Região: {props.regiao}</p>
            </div>
                        
        </div>
    )
}

export default Estado
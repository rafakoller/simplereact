import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ? <section className="time" style={{ backgroundColor: props.corsec }}>
            <h3 style={{borderBottomColor: props.corprim}} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador
                    key={colaborador.id}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    cordeFundo={props.corprim}
                />)}
            </div>
        </section> : ''
    )
}

export default Time
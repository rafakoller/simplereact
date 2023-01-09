import './CampoTexto.css'

const CampoTexto = (props) => {

    //let valor = 'Testando da silva'
    //const [valor, setValor] = useState('Teste de Texto')
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.plhol}/>
        </div>
    )
}

export default CampoTexto
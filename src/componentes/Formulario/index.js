import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";
const Formulario = (props) => {

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log('Nome:',nome)
        // console.log('Cargo:',cargo)
        // console.log('Imagem:',imagem)
        // console.log('Time:',time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [cargo, setCargo] = useState('');

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>{props.title}</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    plhol="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={props.cargos}
                    label="Cargo"
                    plhol="Selecione seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    plhol="Insira uma imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={props.times}
                    label="Time"
                    plhol="Selecione o time"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
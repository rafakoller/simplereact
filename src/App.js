import Banner from './componentes/Banner'
import Formulario from "./componentes/Formulario";
import {useState} from "react";
import Time from "./componentes/Time";

function App() {

    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdicionado = (colaborador) => {
        //console.log(colaborador)
        colaboradores.push(colaborador)
        setColaboradores([...colaboradores])
    }

    const times = [
        {
            id: 't1',
            nome: 'Programação',
            corPrimaria: '#57c278',
            corSecundaria: '#d9f7e9'
        },
        {
            id: 't2',
            nome: 'Front-End',
            corPrimaria: '#82cffa',
            corSecundaria: '#e8f8ff'
        },
        {
            id: 't3',
            nome: 'Data Science',
            corPrimaria: '#a6d157',
            corSecundaria: '#f0f8e2'
        },
        {
            id: 't4',
            nome: 'Devops',
            corPrimaria: '#e06b69',
            corSecundaria: '#fde7e8'
        },
        {
            id: 't5',
            nome: 'UX e Design',
            corPrimaria: '#d86ebf',
            corSecundaria: '#fae9f5'
        },
        {
            id: 't6',
            nome: 'Mobile',
            corPrimaria: '#ffba05',
            corSecundaria: '#fff5d9'
        },
        {
            id: 't7',
            nome: 'Inovação e Gestão',
            corPrimaria: '#ff8a29',
            corSecundaria: '#ffeedf'
        }
    ]

    const cargos = [
        {
            id: 'c1',
            nome: 'Diretor'
        },
        {
            id: 'c2',
            nome: 'Coordenador'
        },
        {
            id: 'c3',
            nome: 'Adminsitrador'
        },
        {
            id: 'c4',
            nome: 'Programador'
        },
        {
            id: 'c5',
            nome: 'Gerente de Projetos'
        },
        {
            id: 'c6',
            nome: 'Líder Técnico'
        },
        {
            id: 'c7',
            nome: 'Analista de Qualidade'
        }
    ]

    // {
    //     console.log('Post')
    //     console.log(colaboradores)
    // }

    return (
    <div className="App">
        <Banner/>
        <Formulario
            times={times.map(time => time)}
            cargos={cargos.map(cargo => cargo)}
            title="Preencha os dados para criar o card"
            aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        />


        {times.map(time => <Time
            key={time.nome}
            corsec={time.corSecundaria}
            corprim={time.corPrimaria}
            idf={time.id}
            nome={time.nome}
            colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
        />)}

    </div>
  );
}

export default App;

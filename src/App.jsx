import { useEffect, useState } from 'react'
import Estado from './components/Estado'
import './App.css'

function App() {
  const [estados, setEstados] = useState([])

  useEffect(() => {
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?limit=27')
    .then((resposta) => resposta.json())
    .then((dados) => setEstados(dados));
}, []);
  
  return (
    <div className='container'>
      <h1>Lista de estados</h1>

      <div className='grade'>
        {estados.map((estado) => (
        <Estado
          key={estado.id}
          sigla={estado.sigla}
          nome={estado.nome}
          regiao={estado.regiao.nome}
          />
        ))}
      </div>
    </div>   
  )
}

export default App

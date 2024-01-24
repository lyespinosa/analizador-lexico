import { useState } from 'react'
import './App.css'
import analizarTexto from './analizador'

function App() {

  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  const setValues = () => {
    if(text === '')alert('Debe ingresar un código')
    else{
        const resultadodos = analizarTexto(text)

        const formateados = Object.entries(resultadodos).map(([categoria, valores]) => `${categoria} : ${valores}`).join('\n');
        setResult(formateados)
    }
  }

  return (
    <div>
      <h1 className='title'>Analizador léxico</h1>
      <div className='principal-container'>
        <div className='input-container'>
          <p>Ingresar código</p>
          <textarea  value={text} onChange={(texto)=>{setText(texto.target.value)}} className='input' id='input' placeholder='Ingrese el código aquí'></textarea>
          <button onClick={setValues} className='ejecutar-button'>Ejecutar</button>
        </div>
        <div className='output-container'>
          <p>Tokens y lexemas encontrados</p>
          <textarea value={result} className='output' id='output' placeholder='Aquí se mostrará el resultado'></textarea>
        </div>
      </div>
    </div>
  )
}

export default App

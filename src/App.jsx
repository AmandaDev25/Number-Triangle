import { useState } from 'react'

export default function App() {
  const [n, setN] = useState(0)
  const base = [[]]
  const [piramide, setPiramide] = useState([])
  let linhaAtual = 0
  let espacos = n - 1

  function inserirEspacos() {
    for (let i = 1; i <= espacos; i++) {
      base[linhaAtual].push('_')
    }
  }
 
  function popular() {
    inserirEspacos()
    for (let i = 1; i <= linhaAtual + 1; i++) {
      base[linhaAtual].push(i)
    }
    for (let i = linhaAtual; i >= 1; i--) {
      base[linhaAtual].push(i)
    }
    inserirEspacos()
    espacos -= 1
    linhaAtual < n-1 && base.push([])
  }

  const inicio = () => {
    for (n; linhaAtual < n; linhaAtual++) {
      popular()
      setPiramide(base)
    }
    
  }

  return (
    <>
      <h1>Pirâmide de números </h1>
      <input placeholder='digite um número' type="number" onChange={(e) => setN(e.target.value)}></input>
      <button variant='contained' onClick={inicio} style={{margin: '10px'}}>Iníciar</button>
      {piramide.map((item, idx) => <div key={idx}>{item}</div>)}
    </>
  )
}



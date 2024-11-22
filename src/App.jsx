import { useState } from "react"

export default function App() {
    const capturandoPrimeiroValor = (e) => {
        setPrimeiroValor(Number(e.target))
        console.log(e.target.value)
       }
     
       const capturandoSegundoValor = (e) => {
         setSegundoValor(Number(e.target.value))
       }

       }
  
    const soma = () => {
        setResultado(primeirovalor + segundovalor)
    }
   const subtracao = () => {
    setResultado(primeirovalor- segundovalor)
   }
   const divisao = () => {
    setResultado(primeirovalor / segundovalor )
   }
   const multiplicacao = () => {
    setResultado(primeirovalor *segundovalor)
   }
   
   return (
        <main>
            <h1>Calculadora</h1>
           
            <input type="number" placeholder="Insira um número"/>
           
            <input type="number" placeholder="Insira um número"/>
       
       <div>
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={divisao}>/</button>
        <button onClick={multiplicacao}>x</button>
       </div>
       <h3>{resultado}</h3>
       
        </main>

    )

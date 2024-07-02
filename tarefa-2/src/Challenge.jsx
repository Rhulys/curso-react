import { useState } from "react";

const Challenge = () => {

  const [valor1] = useState(12);
  const [valor2] = useState(14);

  const somar = () => {
    const soma = valor1 + valor2;

    console.log("O valor final da soma é: " + soma);
  }

  return (
    <div>
        <h3>O primeiro valor é: {valor1}</h3>
        <h3>O segundo valor é: {valor2}</h3>
        <button onClick={somar}>Clique aqui para somar</button>
    </div>
  )
}

export default Challenge;
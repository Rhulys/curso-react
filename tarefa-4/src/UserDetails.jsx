import React from 'react'
import { useState } from 'react'

const UserDetails = () => {

    const [pessoas] = useState ([
        {id: 1, nome: "joao", idade: 15, profissao: "Trader" },
        {id: 2, nome: "marcos", idade: 17, profissao: "pedreiro" },
        {id: 3, nome: "Rhulys", idade: 23, profissao: "Programador" },
        {id: 4, nome: "Kellen", idade: 21, profissao: "Trancista" }
    ])
    
  return (
    <div>
        <ul>
            {pessoas.map((pessoa) => (
                
                    <li key={pessoa.id}>
                        
                        Nome: {pessoa.nome} - Idade: {pessoa.idade} - Profissão: {pessoa.profissao} 

                        {pessoa.idade >= 18 ? (
                            <> 
                               <p style={{color: "green"}}> Pode tirar Carteira </p> 
                            </>  
                        ) : (
                            <> 
                                <p style={{color: "red"}}> Nao pode tirar Carteira </p> 
                            </> )
                        }
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default UserDetails
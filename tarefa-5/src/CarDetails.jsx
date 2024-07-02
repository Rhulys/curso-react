import { useState } from 'react';

const carDetails = () => {

    const [cars] = useState ([
        {id: 1, marca: "Fiat", km: 50, ano: 2024 },
        {id: 2, marca: "Renault", km: 73607, ano: 2009 },
        {id: 3, marca: "BMW", km: 970, ano:  2022},
    ])
    
  return (
    <div>
        <ul>
            {cars.map((car) => (
                
                    <li key={car.id}>
                        
                        Marca: {car.marca} - KM: {car.km} - Ano: {car.ano} 

                    </li>
            ))}
        </ul>
    </div>
  )
}

export default carDetails
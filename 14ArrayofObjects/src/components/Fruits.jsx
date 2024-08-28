import React from 'react'

const Fruits = () => {
    const fruits =[
        {name:"Apple", price:10},
        {name:"Mango", price:7},
        {name:"Banana", price:2},
        {name:"Orange", price:5},
        {name:"Pineapple", price:8}
    ]
  return (
    <div>
        <ul>
            {fruits.map((fruit) =>{
                  return <div>
                    <ul>
                        <li key={fruit.name}>{fruit.name} ${fruit.price}</li>

                    </ul>
                  </div>      
            })}
        </ul>
    </div>
  )
}

export default Fruits
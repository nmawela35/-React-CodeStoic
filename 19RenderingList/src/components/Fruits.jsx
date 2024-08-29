import Fruit from "./Fruit"

const Fruits = () => {
    const fruits =[
        {name:"Apple", price:10},
        {name:"Mango", price:7},
        {name:"Banana", price:2},
        {name:"Orange", price:5},
        {name:"Pineapple",price:8},
        {name:"Orange", price:5}

    ]
  return (
    <div>
        <ul>
          {fruits.map((fruit) =>(
            <Fruit key={fruit.name} name={fruit.name} price={fruit.price}/>
          ))}
       
        </ul>
    </div>
  )
}

export default Fruits
import Fruit from "./Fruit";

const Fruits = () => {
  const fruits = [
    { name: "Apple", price: 10, soldout: true },
    { name: "Mango", price: 7, soldout: false },
    { name: "Banana", price: 2, soldout: true },
    { name: "Orange", price: 5, soldout: false },
    { name: "Pineapple", price: 8, soldout: true },
    { name: "Orange", price: 5, soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} soldout={fruit.soldout} />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;

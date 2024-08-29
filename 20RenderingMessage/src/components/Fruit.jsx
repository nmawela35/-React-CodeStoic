
const Fruit = ({name,price,soldout}) => {
  return (
    // <li>{name}{" "}${price}</li>
    <>
     <li>{name}{" "}${price} {soldout ? "soldOut":""}</li>
    </>
  )
}

export default Fruit

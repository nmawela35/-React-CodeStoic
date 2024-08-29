
function Message() {
    function handleClick(){
        console.log("Button Clicked")
    }



  return (
    <div>
        <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Message
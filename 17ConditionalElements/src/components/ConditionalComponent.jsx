
function ConditionalComponent() {

    let messageOne = <h1>This is message 1</h1>
    let messageTwo = <h1>This is message 2</h1>
    let message;

    const display = false;

    if (display){
        message = messageOne
    } else{
        message = messageTwo
    }
    return message;
}

export default ConditionalComponent
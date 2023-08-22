function Button(props){
    function show(){
        let btn  = document.getElementById('btn')
        btn.innerText="Submitted Successfully"
    }
    return(
        <>
        <p id="para">{props.value}</p>
        <button id="btn" onClick={show}>Submit</button>
        </>
    )
}

export default Button;
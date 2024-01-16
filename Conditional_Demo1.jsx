function ShinyButton(){
    const handleClick = () =>{
        alert("You Clicked me!")
    
    }
    return(
        <button onClick={handleClick} className="bg-gray-500 rounded p-3 text-white">
            Click this button!
        </button>
        
        )

}

export default ShinyButton
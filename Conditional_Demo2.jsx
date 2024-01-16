function Rainy(){
    return(
        <h1>Bring your  umbrella!</h1>
    )
}
function RainorShine(props){
    const isRainy = props.isRainy
    if(isRainy){
            return(
            <Rainy/>
            ) 
           }
else{
    return(
        <h1>No rain today!</h1>
    )}
    
}

export default RainorShine
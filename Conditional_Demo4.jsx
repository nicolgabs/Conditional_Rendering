function Rainy(){
    return(
        <h1>Bring your umbrella!</h1>
    )
}
function Sunny(){
    return(
        <h1>Bring your sunglasses!</h1>
    )
}
const isRainy = true;

function ShineorRain(props){
    const isRainy = props.isRainy
    return isRainy? <Rainy/>:<Sunny/>
}

export default ShineorRain
function totalyear(props){
    let total = props.array.filter ((ele)=>{
        return ele.type == "Designer"
    })
    let totalSum = 0 
    total.forEach(i => {
        totalSum += i.years
    });
    return(
        <span>{totalSum}</span>
    )
}
export default totalyear;
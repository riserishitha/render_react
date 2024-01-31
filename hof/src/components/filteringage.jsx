function filteringage (props){
    let newdata = props.array.filter((ele)=>{
        return ele.age > 28 && ele.age <= 50
    })
    return (
        <div>
            {newdata.map(Element=>
        <div key={Element.id}>
            <span className="firstbox">Id: {Element.id}</span>
            <span className="firstbox">Name: {Element.name}</span>
            <span className="firstbox">User Type: {Element.type} </span>
        </div>
)}
        </div>
    )
}
export default filteringage;
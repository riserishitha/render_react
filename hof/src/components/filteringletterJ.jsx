function filteringJ (props){
    let zeroj = props.array.filter((ele)=>{
        return ele.name[0] == "J"
    })
    return (
        <div>
            {zeroj.map(Element=>
            <div key={Element.id}>
                <span className="firstbox">Id: {Element.id}</span>
                <span className="firstbox">Name: {Element.name}</span>
                <span className="firstbox">User Type: {Element.type}</span>
            </div>
)}
        </div>
    )
}
export default filteringJ;
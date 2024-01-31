function inputDesigner (props){
    let designer = props.array.filter((e)=>{
        return e.type == "Designer"
    })
    return(
        <div>
            {designer.map(ele=>
            <div key={ele.id}>
                <span className="firstbox">Id: {ele.id}</span>
                <span className="firstbox">Name: {ele.name}</span>
                <span className="firstbox">User Type: {ele.type}</span>
            </div>
        )}
        </div>
    )
}
export default inputDesigner;
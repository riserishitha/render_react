function wholedata(props) {
    return (
        <div>
            {props.array.map(ele=>
            <div key={ele.id}>
                <span className="firstbox">Id: {ele.id}</span>
                <span className="firstbox">Name: {ele.name}</span>
                <span className="firstbox">User Type: {ele.type}</span>
            </div>
        )}
        </div>
    )
}
export default wholedata;
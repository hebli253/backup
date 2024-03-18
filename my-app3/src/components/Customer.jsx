import CustomerDelete from "./CustomerDelete"

function Customer(props){
    return(
            <tr key={props.id}>
                <td> {props.id} </td>
                <td> <img src={props.image} width='100' height='100'/> </td>
                <td> {props.name} </td>
                <td> {props.job} </td>
                <td> <CustomerDelete id={props.id}></CustomerDelete> </td>
            </tr>
    )
}

function CustomerProfile(props){
    return(
        <>
            <h2>{props.name}</h2>
        
        </>
    )
}

function Customer_Prev2(props){
    return(
        <div>
            <h2> {props.name} (id : {props.id})</h2>
            <img src={props.image} width='60' height='60'></img>
            <br></br>
            <p> {props.job} </p>
        </div>
    )
}


function Customer_Prev(props) {
    return(
        <div>
            <h2>{props.name} (id:{props.id})</h2>
            <img src={props.image} width='100' height='100'/>
            <br/>
            <p> {props.job} </p>
        </div>
    )
}


export default Customer;
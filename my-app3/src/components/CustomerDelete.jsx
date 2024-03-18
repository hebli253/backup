import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function CustomerDelete(props){
    console.log('CustomerDelete --> ');
    function deleteCustomer(id){
        console.log('DeleteCustomer() -> id :' + id);
    }
    return(
        <>
        <Button variant="danger" onClick={(e)=>{
            deleteCustomer(props.id);
        }}> 삭제 </Button>
        
        
        </>
    )
}

export default CustomerDelete;
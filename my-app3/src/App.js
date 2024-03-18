import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';




function App() {
  // const customers = [
  //   {
  //     id:1,
  //     image:"img/avatar (1).png",
  //     name:'파파무민',
  //     job:'신사'
  //   },
  //   {
  //     id:2,
  //     image:"img/avatar (2).png",
  //     name:'무민',
  //     job:'홈프로텍터'
  //   },
  //   {
  //     id:3,
  //     image:"img/avatar (3).png",
  //     name:'그랜마무민',
  //     job:'공예가'
  //   },
  // ]
  const [customers, setCustomers] = useState([]);
  //App() 컴포넌트가 처음 실행이 될때만, 서버에 요청하여 데이터 처리
  useEffect(()=>{
    fetch('http://localhost:3000/api/customerlist',{
      headers:{
        'Accept' : 'application/json'
      }
  })
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setCustomers(data);
    })
    .catch((err)=>{
      console.log(`fetch()시에 에러 발생 : ${err}`);
    })
  },[])
  
  return (
    <div className="App">
      <Container fluid="md">
        <p className='mt-3'></p>
        <CustomerAdd>

        </CustomerAdd>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>name</th>
            <th>Job</th>
            <th>Delete/Modify</th>
          </tr>
        </thead>
        <tbody>
        {
          customers.map((customer)=>{
            return(
              <Customer
                id={customer.id}
                image={customer.image}
                name={customer.name}
                job={customer.job}
              ></Customer>
            )
          })
        }
        </tbody>
      </Table>
    </Container>
    
    </div>
  );
}


export default App;

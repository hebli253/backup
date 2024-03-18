import './App.css';
import Header from './components/Header';
import EmptyPage from './components/EmptyPage';
import CreateCom from './components/CreateCom';
import ComList from './components/ComList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';  
import UpdateCom from './components/UpdateCom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header> 
      <Switch>
        <Route exact path="/">
          <ComList></ComList>
        </Route>
        <Route exact path="/com_list">
          <ComList></ComList>
        </Route>
        <Route exact path="/create_com">
          <CreateCom></CreateCom>
        </Route>
        <Route exact path="/update_com/:company_id">
          <UpdateCom></UpdateCom>
        </Route>
        <Route>
          <EmptyPage></EmptyPage>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

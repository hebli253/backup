import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import WordList from './components/WordList';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';
import { BrowserRouter, Switch, Route } from 'react-router-dom';  
import { useEffect, useState } from 'react';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header> 
      <Switch>
        <Route exact path="/">
          <DayList></DayList>
        </Route>
        <Route exact path="/word/:day">
          <DayList></DayList>
          <WordList></WordList>
        </Route>
        <Route exact path="/create_word">
          <CreateWord></CreateWord>
        </Route>
        <Route exact path="/create_day">
          <CreateDay></CreateDay>
        </Route>
        <Route>
          <EmptyPage></EmptyPage>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

function App_Ex1() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  function onClickOne() {
    setCountOne(countOne+1);
  }

  function onClickTwo() {
    setCountTwo(countTwo+1);
  }

  //useEffect() 콜백함수가 countOne 변화에 대해서만 실행됨 [countOne]
  // [] : 처음 렌더링 될 때에만 실행됨...
  useEffect(()=>{
    console.log(`useEffect() -> countOne : ${countOne}`);
    console.log(`useEffect() -> countTwo : ${countTwo}`);
  }, [countOne]);


  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      {/* useEffect() 테스트용 */}
      {/* ctrl + / */}
      <button onClick={onClickOne}> countOne : {countOne} </button>
      <button onClick={onClickTwo}> countTwo : {countTwo} </button>
      <Switch>
        <Route exact path="/">
          <DayList></DayList>
        </Route>
        <Route exact path="/word/:day">
          <DayList></DayList>
          <WordList></WordList>
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

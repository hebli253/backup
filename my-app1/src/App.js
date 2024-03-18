import { useRef, useState } from 'react';

import './App.css';
import Header from './project1/Header';
import Nav from './project1/Nav';
import Article from './project1/Article';
import Control from './project1/Control';
import CreateContent from './project1/CreateContent';
import UpdateContent from './project1/UpdateContent';
import Welcome from './project1/Welcome';

function App() {
  const [title, setTitle] = useState('소융과 채용 공지 사이트');
  const [sub, setSub] = useState('한양여자대학교 소프트웨어융합과 채용 공지 사이트입니다.');
  const [contents, setContents] =useState([
    {id:1, title:'삼성전자', desc: '3명', job : '프론트엔드', deadline : '2023-12-31'},
    {id:2, title:'LG전자', desc: '7명', job : '백엔드', deadline : '2023-12-28'},
    {id:3, title:'네이버', desc: '2명', job : '서버관리자', deadline : '2024-01-07'},
    {id:4, title:'국민은행', desc: '4명', job : '보안개발자', deadline : '2024-01-11'},
  ]);

  const [welcome, setWelcome] = useState({
    id:1, title: '채용 정보', desc: '회사 이름을 클릭하면 상세 정보를 확인할 수 있습니다.'
  })

  const [nav, setNav] = useState('채용회사');

  //mode: 'welcome', 'create', 'update', 'delete'
  const [mode, setMode] = useState('welcome');
  //선택된 ID 저장하는 상태변수
  const [selectedId, setSelectedId ] = useState(0);
  //id 값을 저장하기 위한 변수 설정(리 렌더링되도 값은 유지가 됨)
  const newId = useRef(100);

  let _title, _desc, _job, _deadline, _article= null;
  console.log(`(렌더링) mode -> ${mode}`);

  if(mode == 'welcome'){ //처음 시작 !!
    _title = welcome.title;
    _desc = welcome.desc;
    _article = <Welcome title={_title} desc={_desc} />;
   
  }

  else if(mode == 'read'){
    console.log(`read mode: ${selectedId}`);
    let i = 0;
    while( i < contents.length){
      if(contents[i].id == selectedId){
        _title = contents[i].title;
        _desc = contents[i].desc;
        _job = contents[i].job;
        _deadline = contents[i].deadline;
        break;
      }
      i ++;
    }
    _article = <Article title={_title} desc={_desc} job={_job} deadline={_deadline}></Article>
   }
  else if(mode == 'create'){
    _article = <CreateContent
                  onSubmit={(_title, _desc, _job, _deadline) => {
                    console.log(`title : ${_title}, desc : ${_desc}, job : ${_job}, deadline : ${_deadline}`);
                    //newId는 일반변수가 아니고, useRef() 이용하여 선언되어 있기 때문에,
                    //실제 값에 대한 접근은 (newId.current) 방식으로 사용해야 함
                    let max_content_id = newId.current;
                    newId.current ++;

                    setContents([
                      ...contents, //기존 데이터
                      { //새로운 데이터 부분
                        id:max_content_id,
                        title: _title,
                        desc: _desc,
                        job : _job,
                        deadline : _deadline
                      }
                    ])
                  }} />;
  }
  else if(mode == 'update'){
    let _content = null, i = 0;
    //선택되어 있는 아이디의 title, desc 저장
    while(i<contents.length){
      if(contents[i].id == selectedId){
        _content = contents[i];
        break;
      }
      i++;
    }
      _article = <UpdateContent data={_content}
                    onSubmit={(_title, _desc, _job, _deadline )=>{
                      console.log(`App.js : _title : ${_title}, _desc: ${_desc}, _job : ${_job}, _deadline : ${_deadline}`);
                      console.log(`selectedId : ${selectedId}`);
                      
                      i=0;
                      while(i < contents.length){
                        if(contents[i].id == selectedId){
                          contents[i].title = _title;
                          contents[i].desc = _desc;
                          contents[i].job = _job;
                          contents[i].deadline = _deadline;
                          break;
                        }
                        i++
                      }
                      setMode('welcome');
                    }}/>
  }
  else if(mode == 'delete'){
    if(window.confirm('정말로 지울건가요?')){
      console.log(`mode : delete --> selectedId : ${selectedId}`);
      let i = 0;
      while(i<contents.length){
        if(contents[i].id == selectedId){
          //splice
          contents.splice(i,1);
          break;
        }
        i++;
      }
      setContents(contents);
      setMode('welcome');
    }
  }
  return (
    //jsx 문법이 적용될 영역
    <div className="App"> 
    <div className='Header'>
      <Header title={title} sub={sub}
        onChangeMode={()=>{
         setMode('welcome')  ; 
      }} /> </div>

      {/* 하드코딩 했을 시, <Header title="React" sub="UI Library"/>*/}
      <div className='nav'>
      <Nav nav ={nav} data={contents}
        onChangeMode={(id=>{
          setMode('read');
          //선택한 항목의 id를 저장하는 코드
          setSelectedId(id);
        })} />  </div>
      <div className='control'>
      <Control onChangeMode={(mode)=>{ setMode(mode); }}/> </div>
      <div className='article'>
      {_article} </div>
      {/* <Article
        title="HTML"
        desc="HTML is Hyper Text Markup Language" /> */}
     {/* <UseRefEx3 /> */}
     </div>
  );
}

export default App;

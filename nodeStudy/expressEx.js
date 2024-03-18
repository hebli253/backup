let http = require('http');
let express = require('express');
let app = express(); //express 객체 생성

//서버의 포트 설정
app.set('port', process.env.Port || 3000);

let server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log(`express 이용 클라이언트 접속 대기중!!`);
})

//사용자의 요청이 'localhost:3000/' 들어오면 처리하는 모듈
//req : 사용자로부터 서버에 전달되는 데이터를 저장하고 있는 객체...
//res : 사용자의 요청을 서버에서 처리하고, 결과를 저장해서 사용자에게 전달하는 객체
app.get('/', (req, res)=>{
    res.send('Welcome Nodejs Express World!! ');
});
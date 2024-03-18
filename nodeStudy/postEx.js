let http = require('http');
let express = require('express');
let app = express();

//1. 서버 객체 생성(사용자 요청이 있는지 리스닝)
app.set('port', process.env.PORT || 3000);
let server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log('클라이언트 접속 대기중!!');
});

//2.특정 폴더를 url로 접근할 수 있도록 하는 외장모듈
let static = require('serve-static');

//현재 폴더에 대한 정보를 가져오는 외장모듈
let path = require('path');

let pathName = path.join(__dirname, 'public');
console.log(`current path : ${pathName}`);
app.use('/public', static(pathName)); //localhost:3000/public/login.html
app.use(static(pathName)); //localhost:3000/login.html

//3. 다양한 post 전송방식 처리
//post 방식 전송데이터 형식 : name=hong & age=20(x-www-form-urlencoded)
app.use(express.urlencoded());
//post 방식 전송데이터 형식 : {'name':'hong', 'age'=20}(json 형식)
app.use(express.json());

//미들웨어 이용하여 post 방식 처리
app.use((req, res)=>{
    console.log('post 방식 데이터 처리!! (미들웨어이용)');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;

    res.send(`id: ${id}, password : ${password}`);
})
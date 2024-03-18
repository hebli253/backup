let http = require('http');
let express = require('express');
let app = express();

app.set('port', process.env.PORT || 3000);

let server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log('클라이언트 접속 대기중!!');
});

//express 객체의 미들웨어를 이용하여 사용자 요청 처리
app.use((req, res)=>{
    console.log('첫 번째 미들웨어 처리 중!!');
    let userAgent = req.header('User-Agent');
    //name 이름으로 get 방식으로 데이터가 전송될 때 처리
    let userName = req.query.name;
    res.send(`userName : ${userName}, <br> userAgent : ${userAgent}`);
})
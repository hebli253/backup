let http = require('http');
let express = require('express');
let app = express();

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

app.use(express.urlencoded());
//post 방식 전송데이터 형식
app.use(express.json());

//4.라우터 설정
// 라우터 객체 설정
let router = express.Router();
//localhost:3000/ 입력되면, 라우터 연결코드 (중요오오오오!)
app.use('/', router);

//라우터 처리
router.route('/process/login/:name').post((req, res)=>{
    console.log('/process/login/ 처리!!');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;
    let name = req.params.name; //요청 패스에 정보를 읽어오는 코드(params)
    res.send(`id:${id}, password:${password}`);
})

router.route('/process/login/').get((req, res)=>{
    console.log('/process/login/ 처리!!');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;
    res.send(`id:${id}, password:${password}`);
})

app.all('*', (req, res)=>{
    console.log('입력 패스 에러!!');
    res.status(404).send('<h2>요청한 페이지는 찾을 수 없습니다. </h2><br>체크하세요')
})
let http = require('http');
let express = require('express');
let app = express();

app.set('port', process.env.PORT || 5000);

let server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log('클라이언트 접속 대기중!!');
});

//5. mySql 사용을 위한 설정 코드
let mysql = require('mysql');
//커넥션 풀 이용하여 DB처리를 위한 설정
let pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'111111',
    database:'nodedb',
    debug:false,
});

let static = require('serve-static');
//현재 폴더에 대한 정보를 가져오는 외장모듈
let path = require('path');

let pathName = path.join(__dirname, 'public');
console.log(`current path : ${pathName}`);
app.use('/public', static(pathName)); //localhost:3000/public/login.html
app.use(static(pathName)); //localhost:3000/login.html

//3. 다양한 포스트 전송방식 처리
app.use(express.urlencoded());
//post 방식 전송데이터 형식 : {'name' : 'hong', 'age' = 20} (json 형식)
app.use(express.json());

//4.라우터 설정
// 라우터 객체 설정
let router = express.Router();
//localhost:3000/ 입력되면, 라우터 연결코드 (중요오오오오!)
app.use('/', router);

const multer = require('multer');
const upload = multer({dest:'./upload'});

router.route('/api/customerUpload').all(upload.single('file'), (req, res)=>{
    console.log('/api/customerUpload ==> ');
    let image = '/img/' + req.file.originalname;
    console.log(req.file);
    let name = req.body.username;
    let job = req.body.job;

    console.log(`image : ${image}, name : ${name}, job : ${job}`);

    pool.getConnection((err, conn)=>{
        if(err){
            console.log('getConnection() 시에 에러 발생! ' +err);
            if(conn) {
                conn.release();
            }
            return;
        }
        console.log('getConnection() 성공!!');
        let params =[null, image, name, job];
        let sql = 'insert into customerinfo values (?,?,?,?)';
        conn.query(sql, params, (err, results)=>{
            if(err){
                console.log('query() 에러 발생' +err);
                return;
            }
            //console.log(results);
            //클라이언트에 결과값 전송
            res.send(results);
        });
    });
    
})

router.route('/api/customerlist').all((req, res)=>{
    console.log('/api/customer.list -> ');
    pool.getConnection((err, conn)=>{
        if(err){
            console.log('getConnection() 시에 에러 발생! ' +err);
            if(conn) {
                conn.release();
            }
            return;
        }
        console.log('getConnection() 성공!!');
        let sql = 'select * from customerinfo';
        conn.query(sql, (err, results)=>{
            if(err){
                console.log('query() 에러 발생' +err);
                return;
            }
            //console.log(results);
            //클라이언트에 결과값 전송
            res.send(results);
        });
    });
})

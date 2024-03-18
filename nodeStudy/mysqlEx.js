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

//라우터 처리
router.route('/process/addUser').post((req, res)=>{
    console.log('/process/addUser 처리!!');
    let id = req.body.id || req.query.id;
    let name = req.body.name || req.query.name;
    let password = req.body.password || req.query.password;
    let age = req.body.age || req.query.age;
    
    //사용자 데이터 전송 확인!!
    console.log(`id:${id}, name : ${name}, password:${password}, age : ${age}`);
    //res.send(`id:${id}, name : ${name}, password:${password}, age : ${age}`);

    let ageInt = Number(age); //String -> Int
    pool.getConnection((err, conn)=>{
        if(err){
            console.log('getConnection() 에러 발생 : ' + err);
            if(conn) {
                conn.release();
            }
            return;
        }
        console.log('getConnection() 연결 성공 !!');

        //sql 실행
        let data = [id, name, password, age];
        let sql = 'insert into users (id, name, password, age) values (?,?,?,?)';
        conn.query(sql, data, (err, results)=>{
            if(err){
                console.log('query() 에러 발생 : ' + err);
                return;
            }
            console.log('query() 실행 성공 !!');
            if(results){
                res.send(`사용자 추가 성공 !! -> id : ${id}, name : ${name}`);
            }
            else{
                res.send('사용자 추가 실패 !!');
            }
        })
    })
})

//라우터 처리
router.route('/process/deleteuser').all((req, res)=>{
    console.log('/process/deleteuser 처리 중');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;

    console.log(`id : ${id}, password : ${password}`);

    pool.getConnection((err, conn)=>{
        if(err){
            console.log(`getConnection() 실행 시에 에러 발생 ${err}`);
            if(conn){
                conn.release();
            }
            return;
        }
        console.log(`getConnection() 성공!!`);
        //sql문 실행
        let data = [id, password];
        let sql = 'delete from users where id=? && password=?';
        conn.query(sql, data, (err, results)=>{
            if(err){
                console.log(`query() 에러 발생 : ${err}`);
                return;
            }
            console.log(`query() 실행 성공 !!`);
            if(results){
                res.send(`사용자 정보 삭제 성공 !! <br> id : ${id} `);
            }
            else{
                res.send(`사용자 정보 삭제 실패 !! <br> `);
            }
        });
    })
})

router.route('/process/modifyuser').all((req, res)=>{
    console.log('/process/modifyuser 처리 중');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;
    let name = req.body.name || req.query.name;

    console.log(`id : ${id}, password : ${password}, name : ${name}`);

    pool.getConnection((err, conn)=>{
        if(err){
            console.log(`getConnection() 실행 시에 에러 발생 ${err}`);
            if(conn){
                conn.release();
            }
            return;
        }
        console.log(`getConnection() 성공!!`);
        //sql문 실행
        let data = [name, id, password];
        let sql = 'update users set name=? where id=? && password=?';
        conn.query(sql, data, (err, results)=>{
            if(err){
                console.log(`query() 에러 발생 : ${err}`);
                return;
            }
            console.log(`query() 실행 성공 !!`);
            if(results){
                res.send(`사용자 정보 수정 성공 !! <br> id : ${id} `);
            }
            else{
                res.send(`사용자 정보 수정 실패 !! <br> `);
            }
        });
    })
})

router.route('/process/loginuser').all((req, res)=>{
    console.log('/process/loginuser 처리 중');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;

    console.log(`id : ${id}, password : ${password}`);

    pool.getConnection((err, conn)=>{
        if(err){
            console.log(`getConnection() 실행 시에 에러 발생 ${err}`);
            if(conn){
                conn.release();
            }
            return;
        }
        console.log(`getConnection() 성공!!`);
        //sql문 실행
        let data = [id, password];
        let sql = 'select * from users where id=? and password=?';
        conn.query(sql, data, (err, results)=>{
            if(err){
                console.log(`query() 에러 발생 : ${err}`);
                return;
            }
            console.log(`query() 실행 성공 !!`);
            if(results.length > 0){
                res.send(`사용자 찾기 성공 !! <br> id : ${id} <br> <a href = "/public/loginUser.html"> 다시 로그인 </a>`)
            }
            else{
                res.send(`사용자 찾기 실패 !! <br> <a href = "/public/loginUser.html"> 다시 로그인 </a>`)
            }
        });
    })
})

router.route('/process/listuser').all((req, res)=>{
    console.log('/process/listuser 처리 중!!');

    pool.getConnection((err, conn)=>{
        if(err){
            console.log('getConnection() 에러 발생'+err);
            if(conn){
                conn.release();
            }
            return;
        }
        console.log('getConnection() 성공!!');

        //SQL문 실행!!
        conn.query('select * from users', (err, results)=>{
            conn.release();
            if(err){
                console.log('query() 에러 발생 : '+err);
                return;
            }
            console.log('query() 성공 !!');
            if(results.length>0){
                res.writeHead(200, {'Content-type':'text/html;charset=utf8'});
                res.write('<h2> 전체 사용자 리스트 </h2>');
                res.write('<div><ul>');
                for(let i=0; i<results.length; i++){
                    let id = results[i].id;
                    let name = results[i].name;
                    res.write(`<li> id : ${id}, name : ${name} </li>`);
                }
                res.write('</ul></div>');
                res.end(); //사용자 전송
            
            }
            else{
                res.send('사용자 데이터 없음!')
            }
        })
    });
})


router.route('/process/login/:name').post((req, res)=>{
    conn.release();
    console.log('/process/login/ 처리!!');
    let id = req.body.id || req.query.id;
    let password = req.body.password || req.query.password;
    let name = req.params.name; //요청 패스에 정보를 읽어오는 코드(params)
    res.send(`id:${id}, password:${password}`);
})

app.all('*', (req, res)=>{
    console.log('입력 패스 에러!!');
    res.status(404).send('<h2>요청한 페이지는 찾을 수 없습니다. </h2><br>체크하세요')
})


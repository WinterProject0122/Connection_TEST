const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '52.78.220.127',  // 서버주소
    port: '53570',       // 서버포트
    user: 'guest',       // mysql서버의 아무계정
    password: 'mysql',   // 그 계정의 비번
    database: 'TEST_DB'  // 기본적으로 접근할 데이터베이스 이름
});

connection.connect();

app.listen(3000, function(req, res) {
    console.log("서버 실행중...");
});

// nodejs 서버주소(https://nodejs-con-dcoxe.run.goorm.site)에 최초 접속시 호출되는 함수
app.get('/', function(req, res){
    connection.query('SELECT * FROM test', (error, rows) => {
        // 만약 SQL질의 했는데 에러발생시 클라이언트에 서버에러종류(500 Internal Server Error)를 확정하고 에러메시지를 전송
		if(error) res.status(500).send(error);
		
		var data = "";

        // rows 안에 test DB에 있는 모든 행에 대한 데이터가 배열형태로 있음
        // for-each문을 이용하여 배열데이터를 하나씩 빼옴
        // test DB는 3개의 열로 구성되있음 id, NAME, age
        // 그래서 1번째 행의 id 값은 rows[0].id 이렇게 접근하면 됨.
		for(var i in rows) {
			data += "<div>" + rows[i].id + " / " + rows[i].NAME + " / " + rows[i].age + "</div>";
		}
		
        // 클라이언트에 test DB에 있는 모든 데이터를 한줄한줄 가공하여 전송
		res.send(data);
	});
});

// https://nodejs-con-dcoxe.run.goorm.site/hello에 접속시 호출되는 함수
app.get('/hello', function(req, res){
    res.send("Hello Hello Hello~~~");
});
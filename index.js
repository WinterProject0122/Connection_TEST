const express = require('express');
const app = express();

app.listen(3000, function(req, res) {
    console.log("서버 실행중...");
});

// nodejs 서버주소(https://nodejs-con-dcoxe.run.goorm.site)에 최초 접속시 호출되는 함수
app.get('/', function(req, res){
    res.send("Hello World!");
});

// https://nodejs-con-dcoxe.run.goorm.site/hello에 접속시 호출되는 함수
app.get('/hello', function(req, res){
    res.send("Hello Hello Hello~~~");
});
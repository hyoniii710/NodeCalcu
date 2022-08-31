const express = require('express');
const port = 3000;
//서버 포트 번호, 사용중이면 변경해야함
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
/*
client에서 post로 보내준 데이터)들을 자동으로 파싱해주어서, 
진짜로 필요한 부분인 body부분을 쉽게 추출해주는 body-parser 모듈

- extended 옵션
1) true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다.
2) false인 경우에는 허용하지 않는다.
*/

// 클라이언트에서 http 요청 메소드 중 get을 이용해서
// 'host:port'로 요청을 보내면 실행되는 라우트
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/cal.html");
  });
app.post('/', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1+num2;
    res.send("연산의 결과 : "+result);
  });

// app.listen()함수를 사용해서 서버 실행
// 클라이언트는 'host:port'로 노드 서버에 요청을 보낼 수 있음
app.listen(port, () => {
    console.log(`Example app http://localhost:${port}`);
  });
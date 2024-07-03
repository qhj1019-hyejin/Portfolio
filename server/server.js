const express = require('express');
const path = require('path');
const app = express();

// 리액트 빌드 파일 설정 express.static 사용 시 특정 폴더 파일들을 static으로 보여줄 수 있다.
app.use(express.static(path.join(__dirname, '../portfolio/build'))); 

// 리액트 라우터로 메뉴를 개발해서 *로 모든 리액트 프로젝트를 보여달라고 요청
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../portfolio/build', 'index.html'));
});

app.listen(5000, ()=> { console.log(`Listening on prt 5000`) });
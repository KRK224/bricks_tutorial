const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) =>{
  console.log('모든 요청에 다 실행됩니다.');
  next();
})

app.get('/', (req, res) => {
  res.send('Hello, Express');
});

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '빈 포트에서 대기 중');
})
### ⭐️ 6주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [ ] HTTP 통신
- [X] API
- [ ] 데이터 포맷 - CSV, JSON, XML

<br>

## ❗️ notion에 키워드 정리 완료 여부
내가 notion에 키워드를 정리를 완료한 경우 체크표시 해주세요~

- [ ] 키워드 정리 완료

<br>

## ❗️ 6주차 과제
1. 개발환경 구축하기 - nodejs 설치 및 사전에 올려둔 템플릿 적용하기
   (완료된 내용 켬쳐본 올리기)
   ```bash
   location /test {
      proxy_pass http://127.0.0.1:3000/test;
   }
   ```
   /etc/nginx/sites-available에 위와 같은 구문 추가. -> :3000/test로 프록시

   ```javascript
   const express = require('express');
   const app = express();

   app.get('/test', (req, res) => {
      res.send("express test");
   });
   ```
   express.js에 테스트 구문 작성.

   http://gdschueok.shop/test << /test 경로로 접속 시 express로 프록시되어 아래와 같은 결과물 출력 </br>
   <img width="270" alt="image" src="https://github.com/Hueok/2023-Server-Study/assets/124287568/690ffdd6-5e4c-4212-9160-88db6688ce92">

   템플릿 적용하는법을 모르겠어서 프록시하구 express만 테스트 해봤습니다...

   
   
<br/>

2. 자신이 설계한 DB와 연동해서 API설계 (CRUD)
   (완료된 내용 켬쳐본 올리기)

<br/>

3. Postman으로 API 테스트
   (완료된 내용 켬쳐본 올리기)

<br/>

4. API Sheet 작성
   (완료된 내용 켬쳐본 올리기)
  

<br/>




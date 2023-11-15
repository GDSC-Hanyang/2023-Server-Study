### ⭐️ 6주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부

수강한 강의에 체크표시 해주세요~

- [x]  HTTP 통신
- [x]  API
- [x]  데이터 포맷 - CSV, JSON, XML

<br>

## ❗️ notion에 키워드 정리 완료 여부

내가 notion에 키워드를 정리를 완료한 경우 체크표시 해주세요~

- [ ]  키워드 정리 완료

<br>

## ❗️ 6주차 과제

1. 개발환경 구축하기 - nodejs 설치 및 사전에 올려둔 템플릿 적용하기   
   <img width="678" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/acff67c4-6c37-4c92-bc02-5478f8300174">
    
    <aside>
    ⛔ 502 BAD GATEWAY
    
    </aside>
    
    > *proxy_pass를 설정하고 아래와 같은 문제를 겪었다… (오마이갓….)*
    > 
    
   <img width="556" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/9bcbf78c-a447-446b-8807-6e504ef9e828">

    
    알고보니 `/` 아래경로에 대해 모두 proxy_pass를 해서 그랬다. 
    
   <img width="664" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/2e77cf93-2a0a-43f7-9d30-88bd0a82aacc">

    
    요렇게 해결해주니까 `/app/` 아래의 경로에 대해서만 proxy_pass를 하게 된다.
    

<br/>

2. 자신이 설계한 DB와 연동해서 API설계 (CRUD)
    - `RESTful API`에서 `HTTP Method`
        - GET: 조회(recieve)
        - POST: 리소스 생성(send)
        - PUT: 리소스 전체 갱신(put)
        - DELETE: 리소스 삭제(delete)   
           
    1. userList 안에 있는 유저명 조회 및 검색   
       `GET /app/users`
    2. userList 안에 유저 추가   
       `POST /app`
    3. userList 유저 전체 수정   
       `PUT /app/users`
    4. userList 유저 삭제   
       `DELETE /app/users`
        

<br/>

3. Postman으로 API 테스트

<img width="703" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/b8458656-ff18-42b9-83c0-bb2b1e337e6c">


<br/>

4. API Sheet 작성

<img width="708" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/7189cf93-4ffb-4a28-ac4e-793bee166ec7">

<br/>

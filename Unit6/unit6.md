### ⭐️ 6주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [x] HTTP 통신
- [x] API
- [x] 데이터 포맷 - CSV, JSON, XML

<br>

## ❗️ 6주차 과제
1. 개발환경 구축하기 - nodejs 설치 및 사전에 올려둔 템플릿 적용하기
   
   ![스크린샷 2023-11-09 04 42 23](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/982000c0-6401-435c-820c-b772050be544)

   갑작스럽게 ssh 접속이 connection time out이 일어났으나, vs-code에서 Remote-SSH: Kill VS Code Server on Host를 통해 갑작스럽게 해결되었다.
   참고한 사이트 :
   https://5bluewhale.tistory.com/25
<br/>

3. 자신이 설계한 DB와 연동해서 API설계 (CRUD)
   
   ![스크린샷 2023-11-09 05 29 31](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/7578e97c-9856-42db-9c54-47b91d374cc0)

   고민되는 점 :
   1. API 설계 할 때, user 2의 팔로워에 변동을 주고 싶으면 /user/2/follower 이렇게 작성해야 할지, /follower 로 작성하고 query로 userId = 2를 주는게 맞는지 헷갈린다.
   2. 항상 /user/{userId}로 접근해야 하나? 아니면 /{userId} 이렇게 바로 접근 가능할까?
      - 네이버웹툰, 인스타그램 api들을 확인해봤는데도 아직 감이 잘 안잡힌다.
      - 인스타그램에서는 /유저이름/following 이런 식으로 following과 follower를 확인한다. 그에 반면, 네이버 블로그는 /AdminMain.naver로 설정하고 blogId = 유저이름 & Redirect = BuddyMe 이런식으로 설정해놓았다.
      - 사이트마다 api 설계방식이 달라 아직 감이 잘 안잡힌다. 추가 공부가 필요할 것 같다. 

<br/>

3. Postman으로 API 테스트
4. 
   ![스크린샷 2023-11-09 04 29 48](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/741c5285-cbbb-44d4-953e-10a80f0d771f)

   ![스크린샷 2023-11-09 03 57 27](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/50ede8e8-0fa1-400c-9728-98cfa1e24ccd)


<br/>

4. API Sheet 작성
   (완료된 내용 켬쳐본 올리기)

  ![스크린샷 2023-11-09 04 41 41](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/543eb813-8551-48be-a8bd-478c161dad4c)


<br/>




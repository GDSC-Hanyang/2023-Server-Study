### ⭐️ 7주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [x] Restful API
- [x] Path Variable, Query Parameter

<br>

## ❗️ notion에 키워드 정리 완료 여부
내가 notion에 키워드를 정리를 완료한 경우 체크표시 해주세요~

- [x] 키워드 정리 완료

<br>

## ❗️ 7주차 과제
1. GET 메소드 함수 작성 완료하기

   index.js : 호출 시 가장 먼저 실행됨
   userRoute.js : API 지정해두는 곳 / index.js -> userRoute.js
   userController.js : userRoute.js -> userController.js / 받은 값 형식 맞는지 등의 에러 체크 / Return = SUCCESS or ERROR
   userService.js : Create, Update, Delete 비즈니스 로직 처리 / DB connection 후 userDao에 connection 전달 / Return = SUCCESS or ERROR
   userProvider.js : 데이터베이스 다루는 애한테 이런거 너가해줘! 요청하기. GET 다룸 / DB connection 후 userDao에 connection 전달 / Return = DB 값
   userDao.js : 데이터베이스 직접 만지는 애 / Query 통해 DB 값 직접 변경 / Return = DB 값

   baseResponseStatus.js : isSuccess인지, code는 무엇인지, 같이 전달할 message는 무엇인지 지정하는 곳
      ex ) SIGNUP_DESCRIPTION_LENGTH : {"isSuccess": false, "code": 2019, "message":"소개는 최대 45자리를 입력해주세요."}

   ![스크린샷 2023-11-23 04 17 14](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/253b080c-2fc4-40a2-9126-1562e751c52f)

   
<br/>

2. GET 메소드 test 진행하기(postman 이용하기)

   ![스크린샷 2023-11-23 01 58 57](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/0a8957fb-17e1-4fd2-93ef-8b15bf21636a)

   ![스크린샷 2023-11-23 01 59 48](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/1fabeb7e-898b-45e5-88f2-d14a7e189dff)


<br/>

3. SIGN UP POST 메소드 함수 작성 완료하기

   userController.js의 postUsers 함수에 name, password, description이 제대로 형식에 맞는지 체크하였다.
   
   ![스크린샷 2023-11-23 04 20 10](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/10018439-b830-44c7-860d-28745c90332b)


4. SIGN UP POST 메소드 test 진행하기(postman 이용하기)

   ![스크린샷 2023-11-23 03 22 33](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/6a306a96-5aaf-4c2f-aee9-2d73f7e0dc3a)

   Post 실행 후, Datagrip을 통해 데이터가 제대로 add 되었는지, password가 hash처리가 잘 되었는지 확인하였다.

   ![스크린샷 2023-11-23 03 22 46](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/513be6fe-e099-49ae-afdd-28f81166da1f)

5. Amazon ec2 ssh 연결 timeout 뜨는 이유
  - 다은 선배님이 알려주셔서 해결했던..!!! 기억해놓고 싶어서 적어놓게 되었습니당.

  - 이유 : Cpu 사용률이 Max를 찍으면서 강제로 연결을 끊어버린 것. 재부팅 하면 잠깐 동안은 해결되지만, 곧 다시 끊김.
          t2.micro는 RAM이 1GB으로 적음

  - 해결 방법 : SWAP 메모리를 지정한다. SWAP 메모리란 RAM이 부족할 경우가 있으므로 HDD의 일정공간을 마치 RAM처럼 사용하는 것이다. 이를 통해 반 강제적으로 RAM을 증설한 듯한 효과를 얻을 수 있다.

  - 참고 블로그
    1. https://sundries-in-myidea.tistory.com/102
    2. https://repost.aws/ko/knowledge-center/ec2-memory-swap-file


  
<br/>

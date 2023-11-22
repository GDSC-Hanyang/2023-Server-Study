### ⭐️ 5주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [x] 데이터베이스 실습
- [x] 데이터베이스 실습 2
- [x] SQL

<br>

## ❗️ notion에 키워드 정리 완료 여부
내가 notion에 키워드를 정리를 완료한 경우 체크표시 해주세요~

- [x] 키워드 정리 완료

<br>

## ❗️ 5주차 과제
1. ERD export해서 구축된 RDS에 반영하기
   (완료된 내용 켬쳐본 올리기)
   ![스크린샷 2023-11-02 06 21 20](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/0391857d-fc16-40b1-b1f9-1bae2e6d177b)

   어려움을 겪은 부분 1: CREATE database db_test;를 하려했으나 내가 로그인한 jooyj0529에는 그런 권한이 없다는 에러를 마주했다.
   
   해결 과정 :
   1. root의 모든 권한을 jooyj0529에게 주겠다고 query를 했으나 여전히 jooyj0529에게 database를 만들 권한이 없다고 뜸.
   -> 그렇다면 root에서 database를 생성하고, 그 database에 대한 모든 권한을 jooyj0529에게 설정해 주면 어떨까?
  
   2. root 사용자로 mysql 로그인하여 database db_test 생성 & 제대로 생성되었는지 확인

      ![스크린샷 2023-11-02 06 32 29](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/6f4cd2dc-7e00-42c1-b730-5e3dd272de70)

   3. root 사용자에서 GRANT 이용해서 joyj0529에게 db_test에 대한 모든 권한을 부여하고, FLUSH 이용해 변경사항 저장 & 제대로 저장되었는지 확인
      
      ![스크린샷 2023-11-02 06 34 56](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/eeb42d28-c48b-418d-9dbc-71f7f347ac67)

   4. 해결완료! 이제 jooyj0529로 로그인하여 db_test에 table을 생성하고 삭제할 수 있다.
  

   참고 블로그
   - https://velog.io/@leesomyoung/Datagrip을-사용하여-외부에서-MySQL에-접속하기
  

   어려움을 겪은 부분 2: userId에 AUTO_INCREMENT 설정을 해 주었더니 ( 한 유저 생성될 때마다 자동으로 id 1씩 올라가면 좋기 때문 ), Table이 CREATE 되지 않았다. 에러메시지에 AUTO_INCREMENT 되는 것은 Primary key여야 하고, auto column은 한개여야 한다고 되어있었는데 둘 다 만족을 하는데도 생성이 되지 않았다.

   해결 방법 :

   ![스크린샷 2023-11-02 06 44 31](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/0ec863a2-530a-4891-b6ad-1cd117e8bf71)
   
   ![스크린샷 2023-11-02 06 46 16](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/1fdf1a1b-71c1-46f2-8fd3-690f0efdeb56)


   Export한 Query를 살펴보니, 위와같이 Table을 CREATE 한 뒤 밑에서 Primary key를 설정해주고 있었다.
   -> CREATE 할 때 AUTO_INCREMENT 되는 것이 primary key가 아니라서 문제가 발생하므로, CREATE 내부에서 userId를 primary key로 지정해주자.

   ![스크린샷 2023-11-02 06 48 42](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/0b1ed476-2e30-447c-ae12-a7b74b31c5d8)

   위와같이 primary key(userId)를 추가하여 해결하였다.


   
<br/>

2. 데이터그립을 통해서 RDS에 접근하기
   
   ![스크린샷 2023-11-02 03 48 51](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/47210491-4553-4830-9d11-cda350f54f35)

   어려움을 겪은 부분 : Host를 RDS의 endpoint로 설정하고, 보안그룹 인바인드 규칙도 추가하고, User와 password도 문제가 없었는데 계속 Communication failure이 일어났다 ( 혹시 몰라 password도 바꿔보았는데 효과 X ).
   
   해결 방법 : Driver를 mysql에서 Amazon aurora mysql로 변경하였더니 해결할 수 있었다. ( mysql -> mysql 5.1 버젼으로 바꾸어도 해결된다 )

   참고 블로그
   - https://bba-jin.tistory.com/55
   - https://7942yongdae.tistory.com/187


<br/>

3. 접근된 RDS에 쿼리 작성하기 & 4. RDS에 더미데이터 반영하기 & 화면 최소 3개 이상 쿼리 작성하기

   1. USER에 3명 추가하고 여러 방법으로 확인하기
   
   ![스크린샷 2023-11-02 05 34 13](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/1abddffb-641d-44bf-9251-c8ffa4b1e222)

   ![스크린샷 2023-11-02 05 34 25](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/b403b01b-6ea8-4b37-bb16-0ea7c1b5a9c1)

   ![스크린샷 2023-11-02 05 34 40](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/73b4c01f-4454-4bb4-99d2-8bd9bcf975ca)


   2. FOLLWER에 follower, userId( 팔로워가 팔로우 하는 사람 ) 조합 2개 추가 뒤 확인
   
   ![스크린샷 2023-11-02 07 01 56](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/a36648a2-294d-43f8-8e31-caf929204fe2)

   3. UserId = 1을 팔로우하는 사람들의 이름은 뭘까? 를 확인해보자
      - USER table과 FOLLWER table을 JOIN 해보기
        
        ![스크린샷 2023-11-02 06 08 53](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/0ebe8f04-1038-425c-a8ea-cabe621fb4a8)
        
        from USER as U라고 쓴 것은 줄임말을 생성한 것이다. USER의 userId 값을 지칭하고 싶으면 U.userId로 표현 가능하다. JOIN 해보니 userId = 1을 팔로우하는 사람들의 이름을 알기 위해선 F.userId = 1 이고 F.userId = U.userId로 조건을 걸어줘야겠다는 생각이 들었다.

      - 이름을 가져오겠다고 선언하고, WHERE 사용해 조건 걸기
        
        ![스크린샷 2023-11-02 06 09 31](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/dcff10f9-1a38-41f6-945f-d9aff27d34c8)

        select U.name으로 이름이 궁금하다고 선언하고, WHERE을 사용해 조건을 걸었더니 userId = 1 ( yeonjin ) 을 팔로우하는 사람들이 누구인지 확인할 수 있었다. ( inner join이라 WHERE이나 ON을 둘 중 아무거나 사용해도 상관 없었다 )


      WHERE : join 후에 조건 필터링
      ON : join 전에 조건 필터링

      inner join을 사용할 때는 똑같이 작동하지만, outer join을 할 경우 ON으로 해야 원하는 결과를 얻을 수 있다.

      관련 블로그
      - https://velog.io/@crosstar1228/SQL-join할때-on-과-where의-차이
      - https://codingdog.tistory.com/entry/mysql-on절-vs-where절-언제-어떻게-필터링-되는가 // 자세히 설명되어 있다.



  

<br/>




### ⭐️ 4주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [x] 데이터베이스
- [x] 데이터베이스_MySQL
- [x] 리눅스에 MySQL 설치하기

<br>

## ❗️ notion에 키워드 정리 완료 여부
내가 notion에 키워드를 정리를 완료한 경우 체크표시 해주세요~

- [ ] 키워드 정리 완료

<br>

## ❗️ 3주차 과제
1. 관계형 데이터베이스 이론적으로 이해하기
- 관계형 데이터베이스(relational database): 테이블(table)로 이루어져 있으며, 이 테이블은 키(key)와 값(value)값의 관계를 나타낸다. 이처럼 데이터의 종속성을 관계로 표현하는 데이터베이스를 관계형 데이터 베이스라고 한다.
    
    - 특징
        1. 데이터의 분류,정렬,탐색 속도가 빠르다.
        2. 신뢰성이 높고 항상 무결성을 보장한다.
        3. 기존에 작성된 스키마 수정이 어렵다.
        4. 데이터베이스 부하 분석이 어렵다.
    - 용어
        1. 열(column): 각각의 열에는 유일한 이름이 있으며 자신만의 타입이 있다.
        다른 말로 필드(field) 또는 속성(attribute)라고도 불린다.
        2. 행(row): 관계된 데이터의 묶음을 의미한다. 한 테이블의 모든 행은 같은 수의 열을 갖는다.
        다른 말로 튜플(tuple) 또는 레코드(record)라고도 불린다.
        3. 값(value): 값은 항상 열의 타입에 맞는 값이어야 한다.
        4. 키(key): 테이블에서 행의 식별자로 이용되는 열을 키(key) 또는 기본 키(primary key)라고 한다.
        즉, 각 행을 고유하게 식별할 수 있는 열 또는 열 속성을 가진 후보 키(candidate key) 중에서 db 설계자가 지정한 속성을 의미한다.
        5. 관계(relationship): 테이블 간의 관계는 관계를 맺는 테이블의 수에 따라 다음과 같이 나눈다.
            1. 일대일
            2. 일대다
            3. 다대다
            
            <img width="452" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/6e793aa0-596b-4d3b-9214-00d92728176f">

            
        6. 스키마(schema): 데이터베이스라고도 부르며 디자인을 위한 청사진이라고 생각하면 된다. 단순히 테이블의 각 열에 대한 항목과 타입뿐만 아니라 기본 키와 외래 키도 나타내어야 한다.
    
    ```SQL
    Reservation(ID, Name, Date, RoomNum)
    ```
    
    <img width="393" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/ce9f9cdb-d995-4790-af47-f4042954a9a8">


<br/>

2. 원하는 서비스(당근마켓, 인스타그램 등) 분석하기
    <aside>
🛠 1번

</aside>

<img width="909" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/8cd6bb92-560e-4cc2-ac90-8e628b26a3d1">


- User
    - UserID
    - nickName
    - UserName
    - Password
    - profile_img

<aside>
🛠 2번

</aside>

<img width="552" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/cf70fa23-3147-4b8b-bc5b-b099300ba0aa">


- DM
    - nickName
    - content
    - sendedAt
    - reciev닉edBy
    - profile_img
    - img
    - mic
    - heartedBy

<aside>
🛠 3번

</aside>

<img width="770" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/aa21274a-7760-41a8-80f5-c1312aa01135">


- profile
    - nickName
    - profile_img
    - img
    - status
    - stored
    - post_no
    - follower_no
    - following_no
    - highlight

<aside>
🛠 4번

</aside>

<img width="768" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/b8a853e3-4b34-4df9-bcfd-98e4f1f22779">


- Post
    - nickName
    - title
    - content
    - hashtag
    - createdAt
    - createdBy
    - modifiedAt
    - modifiedBy

<br/>

3. ERD 설계하기
    <img width="1025" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/27def5bf-7aeb-4db7-985b-856abec0c61e">

- 참고
  - [https://velog.io/@doohyunlm/DB-ERD-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%B6%94%EC%B2%9C-%ED%88%B4](https://velog.io/@doohyunlm/DB-ERD-%EA%B0%9C%EB%85%90%EA%B3%BC-%EC%B6%94%EC%B2%9C-%ED%88%B4)
  - [https://mslilsunshine.tistory.com/164](https://mslilsunshine.tistory.com/164)
  - [https://inpa.tistory.com/entry/ERD-CLOUD-%E2%98%81%EF%B8%8F-ERD-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8%EC%9D%84-%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%97%90%EC%84%9C-%EA%B7%B8%EB%A0%A4%EB%B3%B4%EC%9E%90](https://inpa.tistory.com/entry/ERD-CLOUD-%E2%98%81%EF%B8%8F-ERD-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8%EC%9D%84-%EC%98%A8%EB%9D%BC%EC%9D%B8%EC%97%90%EC%84%9C-%EA%B7%B8%EB%A0%A4%EB%B3%B4%EC%9E%90)

<br/>

4. AWS RDS 구축하기
    <img width="1112" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/35d356aa-cf61-47cb-a428-685fa7eafa1f">


<br/>

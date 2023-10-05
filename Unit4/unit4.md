### ⭐️ 4주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [x] 데이터베이스
- [x] 데이터베이스_MySQL
- [x] 리눅스에 MySQL 설치하기

<br>

## ❗️ notion에 키워드 정리 완료 여부
   내가 notion에 키워드를 정리를 완료한 경우 체크표시 해주세요~

- [] 키워드 정리 완료

<br>

## ❗️ 3주차 과제
1. 관계형 데이터베이스 이론적으로 이해하기

관계형 데이터베이스(RDBMS = Relational DataBase Management System)는 현재 가장 많이 사용되고 있는 데이터베이스의 한 종류입니다.

행과 열로 이루어진 각각의 테이블을 고유값(Primary Key)을 참조하여 서로 종속되는 관계(=연결하는것)를 표현하는 데이터 베이스 구조를 관계형 데이터베이스라고 합니다.

RDBMS
관계형 데이터베이스를 생성하고 수정하고 관리할 수 있는 소프트웨어
ex) MySQL / Oracle / Maria-DB 등

키 : 특정 튜플을 식별할 때 사용하는 속성(Attribute) 혹은 속성의 집합

후보키(Candidate Key)
튜플을 유일하게 식별할 수 있는 최소 속성의 집합들
유일성 : Key로 하나의 튜플을 유일하게 식별
최소성 : 꼭 필요한 최소 속성으로 구성

기본키(Primary Key)
후보키 중에서 선택하여 대표로 삼은 키
유일성과 최소성을 모두 만족시킨 키 (후보키에서 골랐으니 당연)
개체 무결성 제약조건을 만족해야 함

대체키(Alternate Key)
후보키 중 기본키를 제외한 나머지 키 = 보조키

슈퍼키(Super Key)
유일성은 만족하지만, 최소성은 만족하지 못하는 키

외래키(Foreign Key)
다른 릴레이션(테이블)의 기본키를 그대로 참조하는 속성의 집합
릴레이션 간 관계(Relationship)을 표현함
참조 무결성 제약조건을 만족해야 함
<br/>

2. 원하는 서비스(당근마켓, 인스타그램 등) 분석하기
   - 원하는 서비스를 하나 타겟팅 후 페이지 4장가량을 선정하고 (캡쳐본 올리기) 데이터베이스에 들어갈 내용을 적어주세요.
   ![IMG_2062](https://github.com/dbtjgus6988/2023-Server-Study/assets/144633320/8b9fed65-97de-4902-98be-bf9f0d5b4f4a)
![IMG_2065](https://github.com/dbtjgus6988/2023-Server-Study/assets/144633320/d888ab31-89d7-40e5-a254-c084abf85ad2)
![IMG_2066](https://github.com/dbtjgus6988/2023-Server-Study/assets/144633320/3437c0cc-8dba-4bb4-8663-b3f822598528)
![IMG_2067](https://github.com/dbtjgus6988/2023-Server-Study/assets/144633320/5f8f910c-a3c0-463b-8fef-3f19f06fef54)

(1) user
- user_id
- user_pwd
- user_nickname
- profile image
- user_email
- user_name
- user_phonenum
- user_rank
- user_address

(2) order
- order_id
- price
- amount
- order date
- status
- delivery request
- purchase
- delivery address
- phone number
- name

(3) product
- product_name
- price
- product_image
- views
- sales amount
- brand
- gender
- product_info
- stars
- comments
- season
- likes
- released info
- delivery info

(4) comment
- comment_id
- content
- brightness
- colorsense
- thickness
- comment date
- review image

<br/>

3. ERD 설계하기
   - 2번에서 진행한 내용을 바탕으로 직적 ERD 제작 툴을 사용해 작성해봅시다. (완성 후 캡쳐본 올리기)
![무신사 _erd (2)](https://github.com/dbtjgus6988/2023-Server-Study/assets/144633320/218c034e-2284-4d1b-92ea-140ea859ab1c)


<br/>

4. AWS RDS 구축하기
   - ERD를 바탕으로 내가 기존에 만들어둔 AWS에서 RDS를 만들어 봅시다. (완성 후 캡쳐본 올리기)
<img width="569" alt="스크린샷 2023-10-05 오후 1 13 20" src="https://github.com/dbtjgus6988/2023-Server-Study/assets/144633320/be8f3b0d-3721-4857-8e58-d12acc04375d">

<br/>




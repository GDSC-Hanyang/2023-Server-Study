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
   - 간단히 여러분이 공부한 내용을 적어주세요.
   관계형 데이터베이스란? <br/>
   우리가 데이터베이스 과목을 배울때, DBMS라는 말을 들어보았을 것이다. 이것은 Database management system의 약자로 전공시간에 배울 때 사용하는 MySQL, MariaDB 등이 있다. 보편적으로 가장 많이 사용하는게 MySQL이고, 나도 그것밖에 사용해보지 못했다. 거기서 같이 나왔던 단어가 RDBMS인데, Relative Database ManagementSystem으로 관계형이라는 말을 앞에 붙였을 뿐이다. 통상적으로 저런 소프트웨어들은 관계형 데이터베이스의 management도 지원한다. 그렇다면 '관계형'이라는 말이 붙은 이유가 무엇일까? 데이터베이스 과목을 수강한 컴공 학생이라면, primary key, foreign key 등의 용어들을 공부했을 것이다. primary key가 무엇이었는가? 쇼핑몰 사이트의 회원 관리 데이터베이스를 생각해보자. 어떤 사람(예를 들자면 나, 장동우)이 회원가입을 했다. 이 사람은 아이디, 비밀번호, 결제를 위한 페이수단, 집 주소, 전화번호 등등을 등록하여 회원가입을 했을 것이다. 여기에서 각 사람들은 중복 아이디를 사용하지 않을 것이고(아이디가 같으면 안되기 때문) 그래서 이 '사용자의 id'를 primary key로 설정해준다.
<br/>

<img width="748" alt="image" src="https://github.com/jjangddu/GDSC-2023-Server-Study/assets/55375379/73f13af9-3979-465c-a818-e1c5a792d8e8">


<br/>
출처: https://cloud.google.com/learn/what-is-a-relational-database?hl=ko
<br/>
이런 식으로 주문을 하기 위해서는 고객의 id와 주문 고유 id, 상품 정보 등 수많은 정보들이 데이터베이스에 들어가야만 하고, 그것들을 효율적으로 관리하기 위한 것이 바로 관계형 데이터베이스이다. 각각의 정보들이 서로에게 연결되어 있고, 이로 인해 직관적이고 유연하게 정보들을 관리할 수 있다.

<br/>

2. 원하는 서비스(당근마켓, 인스타그램 등) 분석하기
   - 원하는 서비스를 하나 타겟팅 후 페이지 4장가량을 선정하고 (캡쳐본 올리기) 데이터베이스에 들어갈 내용을 적어주세요.

서비스:스포티파이
<br/>
<img src="https://github.com/jjangddu/GDSC-2023-Server-Study/assets/55375379/0cdc1699-f161-40e0-8611-6ac9cf60742f" width="40%" height="50%">
<img src="https://github.com/jjangddu/GDSC-2023-Server-Study/assets/55375379/fa01fc57-9c6b-4f45-a408-fd45bd6881da" width="40%" height="50%">
<br/>
<img src="https://github.com/jjangddu/GDSC-2023-Server-Study/assets/55375379/e3a96794-017a-4da5-85da-77c44a602a22" width="40%" height="50%">
<img src="https://github.com/jjangddu/GDSC-2023-Server-Study/assets/55375379/4de23546-6965-4008-98bc-78914baab587" width="40%" height="50%">
<br/>

데이터베이스로는
사용자: ID(Primary), PW, 플레이리스트ID, 좋아하는 아티스트 <br/>
플레이리스트: 음원 Id <br/>
음원: 아티스트ID, 가사, 총 조회수, 총 좋아요 수<br/>
아티스트: 음원Id들, 아티스트 정보<br/>

이런 식으로 생성하면 될 것 같다.


3. ERD 설계하기
   - 2번에서 진행한 내용을 바탕으로 직적 ERD 제작 툴을 사용해 작성해봅시다. (완성 후 캡쳐본 올리기)
   - ![image](https://github.com/jjangddu/GDSC-2023-Server-Study/assets/55375379/7229c4cb-3358-4bf1-93f9-913f77001375)

<br/>
대략적으로 ERD를 설계해 보았다.

<br/>

4. AWS RDS 구축하기
   - ERD를 바탕으로 내가 기존에 만들어둔 AWS에서 RDS를 만들어 봅시다. (완성 후 캡쳐본 올리기)

<br/>




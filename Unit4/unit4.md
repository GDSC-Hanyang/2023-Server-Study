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

아래 내용은 https://jie0025.tistory.com/112 블로그 내용을 따라쓰면서 공부하는 용도로 작성  

ER 모델 (Entity Relationship)  
-
세상의 사물 개체(Entity)간의 관계(Relationship)로 표현한다.

ER 다이어그램의 유형 (Peter chen 표기법 vs Crow-feet 표기법) 
-
<img width="404" alt="Peterchen 표기법" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/4d48049b-d64a-4b6e-8b24-6734b3f308cd">
위 사진은 Peter chen 표기법
<img width="398" alt="crow-feet 유형 " src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/96815db3-3143-480b-9d40-0085c4f16115">
위 사진은 Crow-feet 표기법 

내 생각에는 Peter chen 표기법이 처음 접하는 내 수준에 맞는 것 같다.  
익숙해진 다음에 Crow feet 표기법도 연습해봐야겠다. 

ER 다이어그램  
-
ER 모델을 표준화된 그림으로 나타낸 것  
<img width="596" alt="ERD 요소 예시 " src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/d8fa7238-9e3a-45ae-a7c9-abe844633562">
***
개체(Entity)  
-
* 독립적인 의미를 지닌 유무형의 사람/사물 , 실체   
* 속성에 의해 식별됨
* 개체끼리 관계를 가짐
* 비슷한 속성의 개체 타입(Entity type)을 구성 , 개체 집합(Entity set)으로 묶인다.

개체 타입 - ER 다이어그램의 표현 
-
<img width="200" alt="개체 타입 ER 다이어그램" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/76390177-35a9-40f1-86f3-9926c8ab8713">

* 강한 개체 (Strong entity) == 다른 개체의 도움없이 독자적으로 존재할 수 있는 개체
* 약한 개체 (Weak entity) == 독자적으로 존재할 수 없는,반드시 상위 개체 타입을 가지는 개체  
***
속성(Attribute)
-
개체가 가진 성질 ex) 개체가 도서일 경우 -> 도서 이름, 출판사 , 가격 등이 Attribute 가 됨 

속성-ER 다이어그램 표현
-
* 속성 : 타원으로 표현
* 개체 : 직사각형으로 표현
* 개체와 속성은 실선으로 연결
* 개체의 유일한 식별 키일경우 속성 이름에 밑줄을 긋는다.
<img width="298" alt="속성 - ER 다이어그램" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/3f9864a8-a026-482a-90e1-8def56c8af4c">
***
관계(Relationship)
-
개체 사이의 연관성을 나타내는 개념

관계 타입(Relationship type) + ER 다이어그램 표현법
-
개체 타입과 개체 타입간의 연결 가능한 관계를 정의한 것 
<img width="212" alt="ERD 관계 표현법 " src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/71fc3ecc-068f-4a75-a7c3-75828cdecbdd">

관계 집합(Relationship set)
-
관계로 연결된 집합
<img width="223" alt="관계 erd 예시" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/4e41dfeb-2924-4ffc-83f2-4323133e01ee">
***
관계 타입 유형 
-
**차수에 따른 유형**
차수 : 관계 집합에 참가하는 개체 타입의 **수** 
* 1진 관계
* 2진 관계
* 3진 관계 etc
**관계 대응수**
* 일대일 관계
* 일대다 관계, 다대일 관계
* 다대다 관계
더 많은데 , Peter chen 방식을 연습해보고 Crow feet 방식으로 바꾸는 방법도 연습해야겠당.

<br/>


2. 원하는 서비스(당근마켓, 인스타그램 등) 분석하기
   - 원하는 서비스를 하나 타겟팅 후 페이지 4장가량을 선정하고 (캡쳐본 올리기) 데이터베이스에 들어갈 내용을 적어주세요.



<br/>

3. ERD 설계하기
   - 2번에서 진행한 내용을 바탕으로 직적 ERD 제작 툴을 사용해 작성해봅시다. (완성 후 캡쳐본 올리기)

<br/>

4. AWS RDS 구축하기
   - ERD를 바탕으로 내가 기존에 만들어둔 AWS에서 RDS를 만들어 봅시다. (완성 후 캡쳐본 올리기)

<br/>




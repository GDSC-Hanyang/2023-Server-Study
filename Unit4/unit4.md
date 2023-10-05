### ⭐️ 4주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [x] 데이터베이스
- [x] 데이터베이스_MySQL
- [x] 리눅스에 MySQL 설치하기

<br>

## ❗️ 4주차 과제
1. 관계형 데이터베이스 이론적으로 이해하기
   - 관계형 데이터베이스란 개체(entity) 간의 관계를 나타내주어 데이터 간의 관계와 구성이 어떻게 되는지 알 수 있게 하는 것입니다.
   - 관계형 데이터베이스는 테이블로 이루어져 있고, key와 value의 관계를 나타냅니다.
   
PK (기본키) 란 무엇인가
- PK는 Primary Key의 약자로, 기본키입니다. PK는 특별히 선정된 키로 중복된 값을 가질 수 없고, 유일성과 최소성을 가집니다. NULL값을 가질 수 없습니다. 
- PK는 기본적으로 복수가 될 수 없으나 PK를 구성하는 컬럼이 복수일 순 있습니다. 이를 multi PK(다중 기본키)라고 합니다. PK 하나만으로 unique한 행을 얻어내지 못하는 경우가 있기에 다중 PK를 사용합니다. 
- ![스크린샷 2023-10-05 07 04 19](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/385b60ff-377a-4704-9913-4acd3f643b27)
- 예를 들어 위의 상황의 경우, user_id만 PK로 잡는다면 unique한 행을 얻어낼 수 없습니다. 이런 경우, multi PK로 user_id와 stock_id를 잡아 하나의 unique한 행을 끌어낼 수 있습니다.

FK (외래키) 란 무엇인가
- FK는 Foreign Key의 약자로, 외래키입니다. 외래키는 다른 entity의 PK를 참조하는 속성 또는 속성의 집합을 의미합니다.

ERD 관계선의 종류
1. 실선 ( Identifying ) - entity A와 B는 식별관계. 부모테이블(A)의 PK가 외래키로써 자식테이블(B)의 PK에 포함되는 경우.
2. 점선 ( Non-Identifying ) - entity A와 B는 비식별관계. 부모테이블(A)의 PK가 외래키로써 자식테이블(B)의 일반 속성에 포함되는 경우.


<br/>

2. 원하는 서비스(당근마켓, 인스타그램 등) 분석하기
   
   - 네이버 블로그 앱을 분석하였습니다.

   User
   ![User profile](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/86b1047e-1493-42d4-aaaa-3b5c1bd7c8db)
   1. user_id
   2. name
   3. password
   4. 소개
   5. 프로필 이미지
   6. 가입 시간
   7. 친구 수

   Post
   ![Post](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/3735cbf6-d0f6-460f-8aed-2dab8e297a67)
   ![Main page](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/0e0c34b3-f3e0-416b-86a7-2ab8927988df)
   1. post_id
   2. 올린 user_id
   3. 제목
   4. 대표 이미지 ( Nullable )
   5. 내용
   6. 댓글 수
   7. 공감 수
   8. 작성일
   9. 수정일 ( Nullable )

   Friend
   ![Friend list](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/2f377f28-e968-4152-b843-f098b0fe27af)
   1. friend_id
   2. user_id
   3. 내가 팔로우 중인지
   4. 상대가 팔로우 중인지 ( 그냥 이웃 vs 서로이웃 체크 필요 )

   Comment
   ![Comment](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/db5c23fc-aa92-4540-9ae9-3b89218359b9)
   1. comment_id
   2. post_id
   3. user_id ( 댓글 작성자 )
   4. content
   5. 작성일
   6. 수정일 ( Nullable )

<br/>

3. ERD 설계하기
   - Aquerytool이 테이블 5개 갯수제한이 있어서 erdcloud를 통해 설계해보았습니다.

   - https://inpa.tistory.com/entry/DB-📚-데이터-모델링-1N-관계-📈-ERD-다이어그램#
   - https://my-codinglog.tistory.com/27
   - ERD 개념 이해와 설계 방법 이해는 위의 블로그를 참고하였습니다.
   
   ![Blog ERD 설계](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/8b79b724-063d-4741-b195-13e4410bd609)


<br/>

4. AWS RDS 구축하기
   - AWS RDS 프리티어 생성 : https://velog.io/@yeoonnii/AWS-RDS-MariaDB-프리티어-생성
   - DB 파라미터 그룹 생성 후 DB 적용 : https://kitty-geno.tistory.com/11
   - ec2 RDS 연결 후 외부접속 : https://haksae.tistory.com/207
   - 위의 블로그를 참고하였습니다.
  
   - VPC와 subnet의 개념이 헷갈렸어서 조금 어려움을 겪었습니다. default VPC와, 제가 만든 ec2를 포함한 default subnet이 이미 자동으로 정의되어있었습니다. RDS VPC 값과 subnet 값에 default 값을 넣어주었더니 잘 연결되었습니다. 이걸 몰라서 ec2 포함한 새로운 서브넷 정의하고 RDS subnet값을 새로 정의한 서브넷으로 변경해주려고 했더니 이미 ec2와 RDS를 포함하는 서브넷이 있다는 에러를 겪었었습니다.
  
   ![ec2 RDS 연결](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/a6f430fe-ae04-4d42-a6e6-59e9e9438bcd)


<br/>




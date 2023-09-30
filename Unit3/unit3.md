### ⭐️ 3주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [x] 리눅스
- [x] URL,URI
- [x] AWS
- [x] 프록시 서버
- [x] HTTPS

<br>

## ❗️ notion에 키워드 정리 완료 여부
내가 notion에 키워드를 정리를 완료한 경우 체크표시 해주세요~

- [x] 키워드 정리 완료

<br>

## ❗️ 3주차 과제
1. AWS EC2 인스턴스 생성
   ![Assignment 1](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/c948512f-1cdd-4c67-9ff1-95cc2d14aca0)

<br/>

2. ssh 사용하여 ubuntu 인스턴스 외부 접속
   ![Assignment 2](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/caee0f6b-cec3-4ced-be88-a4d54850135e)


<br/>

3. Nginx 패키지 설치 후 http 외부 접속
   ![Assignment 3](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/d0903f66-0539-46bb-90f2-7360e408ad95)

   https://king-ja.tistory.com/100
   - ec2에 nginx를 연결할 때 유용하게 참고하였습니다.

<br/>

4. 가비아 or 후이즈에서 domain 연결 (.shop 도메인)
   ![Assignment 4](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/0d1d77c3-bada-47e4-9ede-a0c531800f86)

   https://developer-ping9.tistory.com/320
   - ec2와 도메인을 연결할 때 유용하게 참고하였습니다.
   
    순서 : 1. 가비아에서 yeonjin.shop 도메인 구매 ( 550원..!! )
          2. aws Route 53 호스팅 영역 생성
          3. Route 53 생성한 도메인의 레코드 생성
          4. 가비아에서 구매한 도메인의 네임서버 aws에 나와있는 주소들로 변경
          5. nslookup yeonjin.shop ( 도메인 이름 ) 으로 ip 잘 연결 됐는지 확인
          6. nslookup -type=ns yeonjin.shop 으로 네임서버 ( = ns )가 제대로 변경되었는지 확인 ( 네임서버 변경 적용 완료가 터미널로 확인 되기 전에도 yeonjin.shop으로 제대로 접속은 되더라구요. 추측으로는 실제 변경 된 것보다 변경되었다 !! 라고 공식적으로 뜨는게 더 오래걸리는 것 같습니다 )


   *어려움을 겪었던 부분 : 순서 1번과 2번을 반대로 수행해서.. 도메인과 ec2가 제대로 연결이 안되서 접속이 안되는 뭔가 이상한 오류가 발생했습니다. 정말 감사한 정범 선배님 조언덕에!!!! 생성했던 Route 53을 삭제하고, 새로 호스팅 영역과 레코드 생성 후 다시 시도해보니 해결할 수 있었습니다 ! 

<br/>

5. Let's Encrypt 를 이용해 HTTPS 적용
   ![Assignmet 5](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/f51c4544-6627-4e06-97b6-5ad52f1bf2d8)

   https://velog.io/@sanbonai06/Lets-encrypt로-HTTPS-연결
   - Let's Encrypt 로 HTTPS 적용할 때 유용하게 참고하였습니다. 


<br/>

6. Sub Domain 적용 (test)
   ![Assignment 6](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/82b2d78c-f8b9-4129-b45b-8014cf7cb21b)

   https://vividswan.tistory.com/entry/Sub-Domain-Redirection-적용
   https://velog.io/@banjjoknim/AWS-EC2-Ubuntu-서버에-도메인-연결하기
   - sub domain 적용할 때 유용하게 참고하였습니다.

   *문제 : 사진을 찍을 때까지만 해도 test.yeonjin.shop으로 접속이 느리지만 잘 되었는데.. 가비아 DNS 설정에서 레코드 설정을 꽤나 자주 변경하였더니.. 현재 접속이 되지 않고 있습니다. TTL 때문일까요?? 3600으로 설정하고 자주 변경하였는데 왜 접속이 안되는지 이유를 아직은 모르겠습니다ㅜㅜ 서브 도메인 잘 아시는 분 계시면 .. 알려주시면 감사하겠습니다 ㅜㅜ
   ![DNS 레코드 설정](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/99fa35f6-8165-4663-8dc2-f562d3ad0a6c)
   이건 제 DNS 레코드 설정창입니다..!!

<br/>

7. Redirection 적용 (IP to Domain)
   ![Assignment 7_IP](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/f7224c56-3529-4092-9657-7a256bfa9713)
   ![Assignment 7_Domain](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/29294511-c5e4-49d2-8e4e-49e3e2a503cc)

   https://you88.tistory.com/16
   https://jjeongil.tistory.com/1771
   - IP -> Domain 변경과 http -> https 변경 리다이렉션 적용할 때 유용하게 참고하였습니다.

   sudo vim /etc/nginx/sites-available/default
   여기에 접속해서,
   ![Assignment 7_server 내용 추가](https://github.com/yeonjinJoo/2023-Server-Study/assets/102257328/d0241d7d-c4b6-4d15-9f52-25bd158d9233)
   다음과 같이 추가했습니다. ip로 접속하거나, http로 yeonjin.shop에 접속할 때 https://yeonjin.shop으로 변경하도록 작성하였습니다.


<br/>


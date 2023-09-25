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
### 1. AWS EC2 인스턴스 생성
<img width="1158" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/f55c909a-16b1-4b48-b308-943ab296b236">


<br/>

### 2. ssh 사용하여 ubuntu 인스턴스 외부 접속
<img width="628" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/767fda0a-5c9a-42ff-ae4b-4ef4232a9121">


<br/>

### 3. Nginx 패키지 설치 후 http 외부 접속
* Nginx 실행시 다음과 같은 문제 발생
  nginx: [emerg] bind() to [::]:80 failed (98: Address already in use)
  => 우분투 20.0.4에서 일시적으로 발생하는 문제라고 간주
  -> 해결법:
  <pre>
    <code>
      $ netstat -anp | grep 80
    </code>
  </pre>
  <img width="743" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/d1aed14e-ff64-471d-b58d-c6dd0a576f44">
  현재 실행중인 tcp/80을 종료시켜줌
  
* NginX 문제를 해결하고 다음과 같은 문제가 또 발생...
  <pre>
    <code>
      ssh: connect to host xxx port 22: Operation timed out
    </code>
  </pre>
  -> 1차 해결책: 인스턴스 새로 만들고 이전에 안했던 명령어 추가해주자...
  <pre>
    <code>
      sudo ufw allow 22
      sudo ufw allow ssh
    </code>
  </pre>

  <img width="678" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/b8374aec-7c4a-43e5-bb32-a30ad46e68d4">
> 참고:    
  [Blog   ](https://jaehyeon48.github.io/nginx/configure-nginx-on-ubuntu-2004/, "Blog link")
  [Stackoverflow](https://stackoverflow.com/questions/64069312/ssh-connection-timed-out-on-ec2-ubuntu, "stackoverflow link")

> 결과:    
  <img width="648" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/20711fa1-9bd9-43b4-a589-fabfafbcff9b">____

  <img width="579" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/07ff7828-c425-4b23-930f-20a10c277a3e">

<br/>

### 4. 가비아 or 후이즈에서 domain 연결 (.shop 도메인)
> 참고:
  [Blog](https://developer-ping9.tistory.com/320,"Blog link")
<img width="788" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/82e9ec1b-e759-4440-ae5e-c6dae4f59f8e">

<img width="846" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/1d67f6ff-eb6d-4b48-8ed4-3e8842b12079">


### 5. Sub Domain 적용 (test)
<img width="270" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/df2131fd-7008-454a-af2f-29d7f6736434">

<img width="836" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/327c43f9-5065-4889-af98-3ff4bc48a8c0">


<br/>

### 7. Redirection 적용 (IP to Domain)
* 이런 문제가 발생함...
  <img width="674" alt="image" src="https://github.com/Dororo99/2023-Server-Study/assets/136609617/2d379646-7ecc-4516-89d0-fc901cd17aa2">



<br/>


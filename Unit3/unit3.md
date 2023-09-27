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
   - 수행한 화면 혹은 내용을 작성해 주세요
     
   AWS에서 Root 사용자에서 IAM으로 바꾸고 역할을 부여하기
   그 후 EC2 생성하는 것 까진 쉬웠다. 
<br/>

2. ssh 사용하여 ubuntu 인스턴스 외부 접속
   - 수행한 화면 혹은 내용을 작성해 주세요
     
   1.chmod 400 파일이름.pem  => 자기만 읽을 수 있도록 함
   2.ssh -i "key.pem" ubuntu~~~
     => key value를 통해 ubuntu에서 외부 ec2에 접속하는것 같음.
   ![ssh로 연결하는 과제 사진](https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/2cfe2ae0-0876-44b2-ab6f-3e5a785e2574)



<br/>

3. Nginx 패키지 설치 후 http 외부 접속
   - 수행한 화면 혹은 내용을 작성해 주세요
     
   1.sudo apt update
   2.sudo apt install nginx (설치)
   [sudo service nginx status (정상 작동하는 지 확인)]
   3. 잘 동작하는지 확인한 뒤 AWS에서 인바운드 규칙을 편집(http를 추가)

  ![nginx로 http 접속](https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/9b161976-c3f5-4866-9755-e9634e68755f)


<br/>

4. 가비아 or 후이즈에서 domain 연결 (.shop 도메인)
   - 수행한 화면 혹은 내용을 작성해 주세요
     
   1.가비아 결제
   2.AWS에서 ROUTE 53에 들어가 값/트래픽 라우팅 대상을 가비아에 옮겨 적어주기
   라고 생각하고 금방 끝난줄 알았따.
   다시해보니 잘 안되어서 정말 오래 걸렸다.
   내용을 다시 정리하면

   1.가비아에서 DNS 결제
   2.DNS를 산 뒤에 DNS 관리에서 IP 등록을 WWW와 @ 경우에 대해서 적어놓기
   3.Route 53에서 레코드를 만들어야하고
   4.Route 53에서 호스팅해서 생긴 NS(Name Server) 유형의 값 4개를 가비아의 Name Server에 적어준다.
   5. 기다리기 !
  
   과제하면서 생각한 과정은
   내 도메인을 검색창에 -> 가비아에서 route 53에서 적어놓은 영역으로 이동 -> 내 EC2 인스턴트 Ip로 이동하는 과정이다. 라구 내용이 정리가 되었다.
하면서 신기한 명령어도 많이 쳐봤다.
  nslookup (도메인이나 ip에대한 주소 연결성 확인)
  curl icanhazip.com (공인 ip 확인 방법에 대한 것)
    

<br/>


5. Let's Encrypt 를 이용해 HTTPS 적용 (.shop 도메인)
   - 수행한 화면 혹은 내용을 작성해 주세요
   여기서 한 번 막혔음.(재시도 하기)
   막혔던 이유가 내 EC2 인스턴트의 Public Ip와 가비아의 DNS 서버가 제대로 연결되었다고 착각하고 있었음 ㅠㅠ
   그 문제를 해결한 뒤에는
   sudo apt-get install certbot
   sudo apt-get install python3-certbot-nginx
   인증서 관련해서 설치하기
   sudo certbot --nginx -d " 도메인 " 을 통해 https 설정할 도메인 지정하기 
<img width="602" alt="https로잠구기" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/7d0b85dd-83e5-4d32-a311-b6e3c891f3d3">

<br/>

6. Sub Domain 적용 (test)
   - 수행한 화면 혹은 내용을 작성해 주세요
     1.가비아에서 cname에서 host명에 서브도메인 이름을 써주고 , 연결할 도메인을 써주기
     2.그 이후에 sudo vi /etc/nginx/sites-available/default 로 편집기를 킨 뒤 명령어를 작성한다.
     근데! Location 머시기를 쓰니까 에러가 난다...(다음에 다시 해봐야징)
     <img width="542" alt="스크린샷 2023-09-28 070336" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/9c62590b-ce4d-4440-b5c0-35b0d77a46be">


<br/>

7. Redirection 적용 (IP to Domain)
   - 수행한 화면 혹은 내용을 작성해 주세요

   sudo vi /etc/nginx/sites-available/default 로 편집기를 킨 뒤
   사진과 같은 내용을 맨 밑에 적어주었따.
   <img width="431" alt="redirection" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/d3d049ec-0f34-43ab-94b5-515caad1402e">

<br/>

이번 과제는 처음 해보는 방식의 과제였는데 , 다음에는 다시 서버 관련해서 작업을 한다면
지금처럼 오래 안걸리고 훨 씬 잘할 수 있을 것 같다.
그와 더불어 이번 과제를 하면서 ssh설정 , dns , ip 설정에 대해 좀 더 깊게 이해할 수 있었당.

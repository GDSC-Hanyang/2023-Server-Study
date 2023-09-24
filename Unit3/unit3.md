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

- [ ] 키워드 정리 완료

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

   ![가비아 - 도메인 연결](https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/06b7cc5e-b8ab-40d9-aead-9a0b76371c2e)

<br/>


6. 가비아 or 후이즈에서 domain 연결 (.shop 도메인)
   - 수행한 화면 혹은 내용을 작성해 주세요

<br/>

6. Sub Domain 적용 (test)
   - 수행한 화면 혹은 내용을 작성해 주세요

<br/>

7. Redirection 적용 (IP to Domain)
   - 수행한 화면 혹은 내용을 작성해 주세요

<br/>


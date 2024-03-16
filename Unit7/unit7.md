### ⭐️ 7주차 과제 제출 ⭐️

## ❗️ 강의 수강 여부
수강한 강의에 체크표시 해주세요~

- [x] Restful API
- [x] Path Variable, Query Parameter

<br>

## ❗️ notion에 키워드 정리 완료 여부
내가 notion에 키워드를 정리를 완료한 경우 체크표시 해주세요~

- [x] 키워드 정리 완료

<br>

[exports , app.get등 javascript 문법에 대해서 처음 보았는데 , 방학에 공부해봐야겠다.
처음에 과제를 할 때 처음보는 게 많아 일단 따라 써봤다. 근데 포트포워딩이 안되고 있다는 사실을 다음 사진에서 눈치챘다.   

<img width="650" alt="KakaoTalk_20231116_023110726" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/6f3ad74a-9655-4a9e-94dd-6b980d077c67">  

그 이유는 포트포워딩은 라우터에서 해주는 것인데 , 내가  userController.js 파일에다가 아래 사진과 같이 작성했기 때문이다.  

<img width="960" alt="KakaoTalk_20231116_023110726_02" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/945218aa-f3c1-47dc-8960-c8867ab6fa79">  

그래서 node index.js 를 실행했을 때 아래 사진처럼 app을 찾을 수 없다고 나왔다. 그래서 userRouter.js 파일에다가 app.get 명령어를 옮겨적어주었다.

<img width="852" alt="KakaoTalk_20231116_023110726_01" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/a4fd4405-fa2d-4108-9a60-f79b4d361ad1">  

그래도 아직은 문제가 있었따. 내가 Core님이 쓰신 DB 내용을 따라썼는데 , u_status라는 내용의 column이 없어서 문제가 생겼기에 그 내용을 추가해주었다.  

<img width="960" alt="KakaoTalk_20231116_023110726_05" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/dd607888-4444-48c4-b333-0b9edf7b514e">  

그냥 column 한 줄은 버튼 눌러서 추가해줬다.  

<img width="960" alt="KakaoTalk_20231116_023110726_04" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/e0a06e70-4691-4c09-a2af-9abb0e149d80">  

그렇게 두가지 문제를 고쳐보니 올바르게 작동했다. 이번주 주말에는 swagger ui도 한 번 적용해봐야겠다.

* 배운 내용
* lsof -i : 포트번호 // 현재 사용중인 포트번호를 알 수 있음  
* kill -9 {pid} // pid를 지울 수 있음  

## ❗️ 7주차 과제
1. GET 메소드 함수 작성 완료하기
   (fork에 코드 올린 후 PR 날리기)
   
   ![get 메소드](https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/3c0c1667-0407-4eec-a6f6-c786793a54b9)

   아직은 익숙하지 않아서 Core님 코드를 따라써봤다.   

<br/>

2. test 진행하기(postman 이용하기)
   (완료된 내용 켬쳐본 올리기)
   
<img width="960" alt="KakaoTalk_20231116_023110726_07" src="https://github.com/HyunminHong619/2023-Server-Study/assets/109195877/4eb1612b-660d-4015-b4e7-d9563bc9ba5b">  




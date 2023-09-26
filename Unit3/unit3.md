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

- [ ] 키워드 정리 완료 -> 결석으로 인한 참여 X

<br>

## ❗️ 3주차 과제

1. AWS EC2 인스턴스 생성
   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230420787110029/1._.png?ex=651436fe&is=6512e57e&hm=e70c5555bac6715da72f6dac5487a47646bc62926625140d9045ba5498f0e4b2&)

   인스턴스 이름을 PracticeServer로 정해주었습니다.

   <br>

   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230439959265421/2._OS_-_ubuntu_.png?ex=65143702&is=6512e582&hm=4aa3477b0ef6f6ece4cab3d8d6a4e6980f566f0b367c1f6867907ee05d17427d&)

   과제 명세에 나와있는 것 처럼 ubuntu로 설정을 해주었습니다.

   <br>

   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230456497410111/3.__-_t2_micro_.png?ex=65143706&is=6512e586&hm=80b2b436ccb2b1aabaa523c679b851a8b5745c57e5cbf1fe4dfac00e518470d9&)

   연습용으로 만드는 인스턴스 이기에 t2.micro로 설정하고, 간단하게 key-pair 하나 생성해서 적용해 주었습니다.

   <br>

   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230471169101904/4._-_ssh_http_https_.png?ex=6514370a&is=6512e58a&hm=e87d485169a9425980a9cdfe1adb7dc032da32baf466322a7388c09aa3c668cb&)

   뒤에 나올 과제들을 해결하기 위해서 ssh, http, https 접속이 가능하게 설정하였습니다.

   <br>

   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230485991772170/5._.png?ex=6514370d&is=6512e58d&hm=6c112e89c638e831e69bc51c707eadb4e27ea899f109241d3eb90e38226b170b&)

   스토리지(램)에 경우에는 설정을 따로 건들지 않았습니다.

<br/>

2. ssh 사용하여 ubuntu 인스턴스 외부 접속
   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230554832875550/ssh_.png?ex=6514371d&is=6512e59d&hm=d7ecab1c648a6da779818999dc8d509345d1760a385d2194ef0d0b19361073a3&)

   (아직 탄력적 IP를 적용하기 전입니다.) 최초 접속이라 나오는 경고 문구에 yes라고 대답해주고 접속을 했습니다.

<br/>

3. Nginx 패키지 설치 후 http 외부 접속
   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230649561223238/nginx_.png?ex=65143734&is=6512e5b4&hm=434b300c28340fe1bc1145a7185a6f5d8f1f49d7ab7632c948fcabcee3621c51&)

   apt update 이후에 nginx 다운로드 해주었구요

   <br/>

   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230719518015538/nginx_.png?ex=65143745&is=6512e5c5&hm=c38c4ef96079a2a242f9c06a8ed1b4f8a898cf8122a00319f3449a3f6e850505&)

   우선 ufw를 확인해서 방화벽 설정에 어떤 것들이 있는지 확인하고 제대로 nginx가 설치가 되었는지 확인했습니다. 우선은 http만 접속 가능하게 설정을 해주었구요, 해당 아이피 주소로 직접 접속해보았습니다.

   제가 https 설정을 뒤에서 하다가 ec2에 접속하지 못하는 현상이 발생했었는데, 생각해보니까 core님께 전에 여쭤보았던 문제에서 제가 여기서 https 설정을 해주지 않아서 무언가 문제가 발생했을 수 있을 것 같아요. 한 번 뒤에서 해보겠습니다.

   <br/>

   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230750505545769/nginx_.png?ex=6514374c&is=6512e5cc&hm=6405dbbd304b9662ae371a806db5b2158d81dce2ab95a3c7df779a4db7976515&)

   이제 성공적으로 제 ec2에 접속을 하는 모습입니다.

<br/>

4. 가비아 or 후이즈에서 domain 연결 (.shop 도메인)
   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230911323537488/c884f37c12014c20.png?ex=65143772&is=6512e5f2&hm=f200e8484dec21102cf672fce8ace4d134f87beabf9e065673a06763e5e6e9a9&)

   우선 도메인을 구입했습니다. 500원주고 하나 샀어요.

   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156231030857027614/d9c757662077cf5a.png?ex=6514378f&is=6512e60f&hm=8a778151f73cebe099bb7731d25b11ab2222f3ff042e7f85b8dc04f8b69a696e&)

   연결도 해주었습니다. 여기서 부터 탄력적 IP를 이용하여 변경하여서 해주었구요, 시간이 지나서 연결되는 장면을 보았었는데 서버가 접속이 되지 않아서 사진을 남기지 못했습니다.

<br/>

5. ## 이 이후

   여기서 부터 자꾸 문제가 발생을 하더라구요..?
   ![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156244696998354964/2023-09-27_12.03.33.png?ex=65144449&is=6512f2c9&hm=31f0e22822ab70a1b6b6cc9a12e4f03f6d59d4a0eb998790676229414ff89e5d&)

   인스턴스 설정이 문제인지 계속 time out 오류가 발생해서 인스턴스 자체 시스템 로그도 확인해 보았는데 딱히 ram swap 문제도 발견하지 못해서 인스턴스 접속이 어려워 슬프게도 여기까지 진행했습니다.

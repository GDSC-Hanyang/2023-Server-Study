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

## 1. AWS EC2 인스턴스 생성

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

## 2. ssh 사용하여 ubuntu 인스턴스 외부 접속

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230554832875550/ssh_.png?ex=6514371d&is=6512e59d&hm=d7ecab1c648a6da779818999dc8d509345d1760a385d2194ef0d0b19361073a3&)

(아직 탄력적 IP를 적용하기 전입니다.) 최초 접속이라 나오는 경고 문구에 yes라고 대답해주고 접속을 했습니다.

<br/>

## 3. Nginx 패키지 설치 후 http 외부 접속

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230649561223238/nginx_.png?ex=65143734&is=6512e5b4&hm=434b300c28340fe1bc1145a7185a6f5d8f1f49d7ab7632c948fcabcee3621c51&)

apt update 이후에 nginx 다운로드 해주었구요

   <br/>

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230719518015538/nginx_.png?ex=65143745&is=6512e5c5&hm=c38c4ef96079a2a242f9c06a8ed1b4f8a898cf8122a00319f3449a3f6e850505&)

우선 ufw를 확인해서 방화벽 설정에 어떤 것들이 있는지 확인하고 제대로 nginx가 설치가 되었는지 확인했습니다. 우선은 http만 접속 가능하게 설정을 해주었구요, 해당 아이피 주소로 직접 접속해보았습니다.

제가 https 설정을 뒤에서 하다가 ec2에 접속하지 못하는 현상이 발생했었는데, 생각해보니까 core님께 전에 여쭤보았던 문제에서 제가 여기서 https 설정을 해주지 않아서 무언가 문제가 발생했을 수 있을 것 같아요. 한 번 뒤에서 해보겠습니다.

-> 네, 이것과 관련해서는 이 오류 해석이 맞았습니다. ec2 에서는 포트를 모두 열어주었지만 nginx 설정을 하면서 ufw(방화벽) 설정에서 제가 http만 열어주는 바람에 발생한 문제였습니다. 이후에 ssh, http, https 모두 방화벽 설정을 해주니 잘 되었습니다.

   <br/>

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230750505545769/nginx_.png?ex=6514374c&is=6512e5cc&hm=6405dbbd304b9662ae371a806db5b2158d81dce2ab95a3c7df779a4db7976515&)

이제 성공적으로 제 ec2에 접속을 하는 모습입니다.

<br/>

## 4. 가비아 or 후이즈에서 domain 연결 (.shop 도메인)

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156230911323537488/c884f37c12014c20.png?ex=65143772&is=6512e5f2&hm=f200e8484dec21102cf672fce8ace4d134f87beabf9e065673a06763e5e6e9a9&)

우선 도메인을 구입했습니다. 500원주고 하나 샀어요.

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156231030857027614/d9c757662077cf5a.png?ex=6514378f&is=6512e60f&hm=8a778151f73cebe099bb7731d25b11ab2222f3ff042e7f85b8dc04f8b69a696e&)

가비아에서 레코드를 설정해주었습니다.

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156438901817356389/2023-09-27_12.55.13.png?ex=6514f927&is=6513a7a7&hm=03231db578a17e136c4c604a7841ac958b8a6e74a6c2af782f606bd8c2c8c176&)

nslookup 명령어로 dns가 잘 설정되었는지 확인해주고 접속해보겠습니다. (여기서부터 ip가 바뀌는데요, 제가 이것저것 실험하면서 ec2 인스턴스를 자주 삭제하고 새로 만들어서 그렇습니다.)

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156439323223281725/2023-09-27_12.56.51.png?ex=6514f98c&is=6513a80c&hm=725cbf81858cf55dbdd340e9626fc2b63775182d4ec4224ad608b045d35cd530&)

이제 저의 도메인과 ec2 인스턴스 ip가 서로 연결되었습니다.

<br/>

## 5. trouble shooting

여기서 부터 자꾸 문제가 발생을 하더라구요..?
![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156244696998354964/2023-09-27_12.03.33.png?ex=65144449&is=6512f2c9&hm=31f0e22822ab70a1b6b6cc9a12e4f03f6d59d4a0eb998790676229414ff89e5d&)

인스턴스 설정이 문제인지 계속 time out 오류가 발생해서 인스턴스 자체 시스템 로그도 확인해 보았는데 딱히 ram swap 문제도 발견하지 못했었습니다.

그런데 위에서도 말씀드렸다시피, 방화벽 설정을 잘못해서 마치 제가 집 문을 밖에서 잠가버린 꼴이 된 상황이었습니다. nginx에서 ufw 설정을 바꾸어주니 다시 잘 접속되었습니다.

그런데 이 이후에도 ip로는 접속이 잘 되는데, dns에 도메인이 잘 연결되어 있음에도 불구하고 도메인으로는 접속이 되지 않는 문제가 발생했습니다. 서버 블럭을 설정해주거나 그런 시도를 해보았는데 잘 되지 않더라구요.

제가 결과적으로 해결한 방법은 dns관련 정보가 브라우저에 캐시되어 있을 수 있다는 글을 읽고 크롬 시크릿 모드로 캐시를 모두 날리고 다시 해보니 정상 작동했습니다.

<br/>

## 6. Let's Encrypt 를 이용해 HTTPS 적용

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156433412278722572/2023-09-27_12.33.20.png?ex=6514f40a&is=6513a28a&hm=21637fa7202140f810f96aa038eda44c638cd2f4a9edf1caa152d9d3b7b26de2&)

<참고 repo>
https://yeonyeon.tistory.com/253

sudo apt-get install certbot / sudo apt-get install python3-certbot-nginx

이 두 명령어를 이용해서 certbot 관련 설치를 완료했습니다.

그리고 sudo certbot --nginx -d [도메인] 을 입력하여 모두 yes 해주니 쉽게 설정이 되더라구요.

찾아보니 https를 설정할 수 있는 방법은 정말 많았는데, let's encrypt는 인증서를 자주 갱신을 해주어야 한다고 해서 조금 아쉬웠습니다.

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156433724049727558/2023-09-27_12.34.39.png?ex=6514f455&is=6513a2d5&hm=fc7bbbda9f5acc7ea1b2109d009732d9c7a62bfbc94ab48280b267e507b9c48c&)

이제 https로도 접속이 잘 되는 모습입니다.

<br/>

## 7. Sub Domain 적용 (test)

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156435206740377610/2023-09-27_12.40.31.png?ex=6514f5b6&is=6513a436&hm=030f0836d5816669d33e61508cbbf8c6fd94cebb921fd1904dc5e842af1115c0&)

<참고 repo>
https://vividswan.tistory.com/entry/Sub-Domain-Redirection-%EC%A0%81%EC%9A%A9

가비아에서 쉽게 설정할 수 있었습니다. 가비아에선 예명, 별칭 정도의 의미로 불리는 것 같더라구요. dns 설정과 다르게 설정하자마자 바로 적용되었습니다.

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156435288369938523/2023-09-27_12.40.53.png?ex=6514f5ca&is=6513a44a&hm=03d6e5b3d2e7d684d1593af28d67295ef33e90411447fb62c12dcef566be9d4b&)

(이건 조금 신기했습니다) 뭐로 할까 하다가 그냥 제 성으로 해보았습니다:D

<br/>

## 8. Redirection 적용 (IP to Domain)

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156444283704967239/2023-09-27_1.16.34.png?ex=6514fe2a&is=6513acaa&hm=584483a0c257c42126df01a9c2eb6a32bbc75f75818df5c04372f063ad04cc0a&)

<참고 repo>
https://vividswan.tistory.com/entry/Sub-Domain-Redirection-%EC%A0%81%EC%9A%A9

cat을 해온 사진인데, 저 주소에 들어 있는 sites-available 파일에 server~ 부분을 추가해서 넣었다. 특정 웹 사이트 또는 애플리케이션에 대한 Nginx 구성을 정의하는 파일이라고 한다. server 부분의 코드는 [server_name]에 해당하는 ip에 80 포트로 접속이 들어오면 즉 http로 접속을 하려는 시도가 확인되면 https로 자동 변환을 해주라는 의미이다.

$ sudo vi /etc/nginx/sites-available/default
이렇게 수정하였다.

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156446021203804210/2023-09-27_1.23.32.png?ex=6514ffc9&is=6513ae49&hm=1676ab4255f67d09c5a51dff9be7d4956307b2dabad908d482cd9cb7bbb68840&)

![img](https://cdn.discordapp.com/attachments/1156230299202625608/1156446095254245396/2023-09-27_1.23.46.png?ex=6514ffda&is=6513ae5a&hm=e9a8341271390c46322c9e7c1b33428390dfaca36fa874e1111616291a14405c&)

그러면 간단하게 redirection을 구현할 수 있다!

### 8. 후기

만약에 잘 안된다면 시크릿 모드를 사용해보아요
<br>
ec2 뿐만아니라 nginx도 방화벽 설정을 잘 해주어야 합니다.

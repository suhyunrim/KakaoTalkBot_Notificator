# KakaoTalkMessageBot_Notifiactor
  
# 메신저봇 앱에서 사용하는 공지 기능
# https://play.google.com/store/apps/details?id=com.xfl.kakaotalkbot&hl=ko
  
***
  
메신저 앱에서 사용하는 파일 : Notificator.js  
윈도우에서 테스트하기 위한 파일 : TestCases.js  
  
Notificator.js 상단에 명령어 값 수정하여 사용. 기본 값은 [/공지 내용]
  
# 특징
- 봇 계정에게 개인 카톡으로 [/공지 내용]를 보내면 봇 계정이 참가하고 있는 모든 그룹 채팅방에 [내용]을 카톡으로 보냄.
- 다만 참가한 그룹 채팅방에서 최소 1건의 카톡 알림을 받은 상태여야 함.
  
*****
# 윈도우에서 테스트하기
- jdk 및 rhino.jar 필요.
- Command Line에서 java -Dfile.encoding=UTF-8 -jar rhino.jar -debug TestCases.js
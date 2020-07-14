// Rhino 환경에서 require 사용하기 번거로워서 어차피 테스트를 위한 코드들이니 eval로 처리
var rawText = readFile("Notificator.js", "utf8");
eval(rawText);

// 윈도우에서 테스트 하기 위한 임시 코드들
if (!this["DataBase"])
{
    function Replier() {}
    Replier.prototype.reply = function(msg) { print(msg); };
}

response("room1", "테스트1", "sender1", true, new Replier(), null, null, null);
response("room2", "테스트2", "sender1", true, new Replier(), null, null, null);
response("private1", "/공지 테스트", "sender1", false, new Replier(), null, null, null);
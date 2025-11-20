

//$マークというのがjQueryを使うという意味
//xxのところに、タグ名、class名、iD名を書く
$(".b").on("click", function() {

var random = Math.floor(Math.random() * 5);
// console.log(random, "ランダムな数字");

//HTML要素を取得
const clickButton = document.getElementById('clickButton');
const sound = document.getElementById('clickSound');

//ボタンにクリックイベントリスナーを設定
clickButton.addEventListener('click', () => {
  //音源でクリックさえても最初から音が鳴るようにする
  sound.currentTime = 0;
  //音源を再生
  sound.play();

});




$("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});

if(random===0) {
console.log("Great!! 今日は最高の1日でしょう!");
 $(".m1").html("Great!! 今日は最高の1日でしょう!");
 $(".m1").css("color","red");
 $("#mainImage1").attr("src", "画像/10.jpeg");
 $("#sound_xx1")[0].play();
 $("#header").css("background-image", "none");
 $(".wrap").css("background-image", "url('画像/100.jpeg')"); // 背景画像 (wrap)
 $(".wrap").css("background-size", "cover");
 $(".wrap").css("background-repeat", "no-repeat");
 $(".wrap").css("background-position", "center center");

}else if(random===1) {
  console.log("Good !良い1日になるでしょう");  
  $(".m1").html("Good! 良い1日になるでしょう"); 
  $(".m1").css("color","red");
  $("#mainImage1").attr("src", "画像/11.jpeg");
  $("#sound_xx2")[0].play();
  $("#header").css("background-image", "none");
  $(".wrap").css("background-image", "url('画像/110.jpeg')"); // 背景画像 (wrap)
  $(".wrap").css("background-size", "cover");
  $(".wrap").css("background-repeat", "no-repeat");
  $(".wrap").css("background-position", "center center");
  
}else if(random===2) {
  console.log("So-so 今日はいつも通りの1日です");
  $(".m1").html("So-so 今日はいつも通りの1日です");
  $(".m1").css("color","red");
  $("#mainImage1").attr("src", "画像/12.jpeg");
  $("#sound_xx3")[0].play();
  $("#header").css("background-image", "none"); // 画像をリセット
  // $(".wrap").css("background-image", "none");
  $(".wrap").css("background-image", "url('画像/120.jpeg')"); // 背景画像 (wrap)
  $(".wrap").css("background-size", "cover");
  $(".wrap").css("background-repeat", "no-repeat");
  $(".wrap").css("background-position", "center center");
  
}else if(random===3) {
  console.log("It is not day. 今日はイマイチ");  
  $(".m1").html("It is not day. 今日はイマイチ"); 
  $(".m1").css("color","red");
  $("#mainImage1").attr("src", "画像/13.jpeg");
  $("#sound_xx4")[0].play();
  $("#header").css("background-image", "none"); // 画像をリセット
  // $(".wrap").css("background-image", "none");
  $(".wrap").css("background-image", "url('画像/130.jpeg')"); // 背景画像 (wrap)
  $(".wrap").css("background-repeat", "no-repeat");
  $(".wrap").css("background-position", "center center");
  
}else if(random===4) {
  console.log("Bad Day… 今日は家にいましょう…😢"); 
  $(".m1").html("Bad Day… 今日は家にいましょう…😢");
  $(".m1").css("color","red");
  $("#mainImage1").attr("src", "画像/15.jpeg");
  $("#sound_xx5")[0].play();
  $("#header").css("background-image", "none"); // 画像をリセット
  // $(".wrap").css("background-image", "none");
  $(".wrap").css("background-image", "none");
  $(".wrap").css("background-size", "auto"); 
  $(".wrap").css("background-repeat", "repeat");
  $(".wrap").css("background-position", "0% 0%");
}  






// if(random===4) {
//  console.log("そんなあなたのラッキーアイテム");
//  $(".gl_frame").html("そんなあなたのラッキーアイテムは、「肉！」今日は朝から肉を食べましょう！！🍖🍖🍖");
//  $(".gl_frame").css("color","black");
//  $("body").css("background-color", "darkgray");  // 💡 【追記箇所】 背景色を黄色に設定
//  $("#mainImage3").attr("src", "画像/80.jpeg");
//  $("#mainImage3").show();
// } else {
//  console.log("MMMMMMM"); 
//  $(".gl_frame").empty();
//  $("body").css("background-color", "transparent"); // 💡 【追記箇所】 elseの場合、背景色を元に戻す（例: 透明に）
//  $("#mainImage3").attr("src", "");
//  $("#mainImage3").hide();
// };


// 1. ラッキーアイテムと背景色を random の値に応じて設定
    if(random === 1) { // 💡 random = 1 の場合
        console.log("ラッキーアイテムなし (Good!)");
        $(".gl_frame").empty(); // テキストなし     
        $("body").css("background-color", "transparent");
        $(".wrap").css("background-color", "transparent");
        $("#mainImage3").hide().attr("src", ""); // 画像非表示

    } else if(random === 2) { // 💡 random = 2 の場合
        console.log("ラッキーアイテムなし (So-so)");
        $(".gl_frame").empty(); // テキストなし
        $("body").css("background-color", "transparent"); // 背景色をリセット
        $(".wrap").css("background-color", "transparent");
        $("#mainImage3").hide().attr("src", ""); // 画像非表示

    } else if(random === 3) { // 💡 random = 3 の場合
        console.log("ラッキーアイテムなし (It is not day.)");
        $(".gl_frame").empty(); // テキストなし
        $("body").css("background-color", "transparent"); // 背景色をリセット
        $(".wrap").css("background-color", "transparent");
        $("#mainImage3").hide().attr("src", ""); // 画像非表示

    } else if(random === 4) { // 💡 random = 4 の場合 (既存)
        console.log("そんなあなたのラッキーアイテム");
        $(".gl_frame").html("そんなあなたのラッキーアイテムは、「肉！」今日は朝から肉を食べましょう！！🍖🍖🍖");
        $(".gl_frame").css("color","black");
        $(".wrap").css("background-color", "darkgray");  // 背景色
        $("body").css("background-color", "transparent");
        $("#mainImage3").attr("src", "画像/80.jpeg").show(); // 画像表示

    } else { // 💡 random = 0 の場合 (Great!!)
        console.log("MMMMMMM (ラッキーアイテムなし、背景色なし)"); 
        $(".gl_frame").empty();
        $("body").css("background-color", "transparent"); // 背景色を透明に
        $(".wrap").css("background-color", "transparent");
        $("#mainImage3").attr("src", "").hide();
    };






//  //この下は消さない
// });

});








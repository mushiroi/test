/**
 *
 */

$(function(){
 $(window).load(function(){
  $('.infiniteslide').infiniteslide({
   //オプションを記述
　　　　'height': 300, // 高さを指定
　　　　'speed': 10, // スピードを指定
　　　　'direction' : 'left', // スライドする向きを指定
　　　　'pauseonhover': true, // マウスオーバーでストップするかを指定
/*　　　　'clone' : 2 // 子要素のコピー数を指定*/
  });
 });
});
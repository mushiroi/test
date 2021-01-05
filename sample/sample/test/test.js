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




var $text, $textCurrent, $counter;
window.onload = function () {
    $text = document.getElementById( "sample2" ).firstChild.nodeValue;
    displayOneByOne();
}
function displayOneByOne() {
    $textCurrent = document.getElementById( "sample2" ).firstChild.nodeValue;
    if( $textCurrent.length == $text.length ){
        document.getElementById( "sample2" ).innerHTML = '';
        $counter = 0;
    }
    document.getElementById( "sample2" ).innerHTML = $text.substr( 0, ++$counter ) + '<br />';
    setTimeout( 'displayOneByOne()', 300 );
}

function funcAdd1() {
    document.getElementById( "sample1" ).innerHTML =
        parseInt( document.getElementById( "sample1" ).firstChild.nodeValue ) + 1;
}


var message = new Array(
    '1月のsample',
    '2月のsample',
    '3月のsample',
    '4月のsample',
    '5月のsample',
    '6月のsample',
    '7月のsample',
    '8月のsample',
    '9月のsample',
    '10月のsample',
    '11月のsample',
    '12月のSample'
);
var now = new Date();
var month = now . getMonth();
function monthlyMessage() {
    document . getElementById( 'monthly-message' ) . innerHTML = message[month];
}
window . onload = monthlyMessage;
// -->

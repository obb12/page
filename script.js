function interval() {
switch (current) {
  case 1:
    current = 2;
    $('#carousel1').hide();
    $('#carousel2').show();
    break;
  case 2:
    current = 3;
    $('#carousel1').hide();
    $('#carousel2').show();
      break;
  default:
  current = 1;
  $('#carousel1').show();
  $('#carousel3').hide();
}
}
var current = 1;
$(function() {
  $('#carousel2').hide();
  $('#carousel3').hide();
   setInterval(interval, 3000);
});

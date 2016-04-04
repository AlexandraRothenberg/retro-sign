var $body = $('body');
var $svg = $('svg');
var $btn = $('.btn');
var $btnClick = $('.btn-click');
var $engage = $('.engage');
var $engageClick = $('.engage-click');


$btn.on('click', function() {
  $btn.toggleClass('btn-click');
  $engage.toggleClass('engage-click');
});

var $body = $('body');
var $svg = $('svg');
var $btn = $('.btn');
var $btnClick = $('.btn-click');
var $engage = $('.engage');
var $engageClick = $('.engage-click');
var $lines = $('.lines');
var $linesOn = $('.lines-on');

$btn.on('click', function () {
  $btn.toggleClass('btn-click');
});

$btn.on('click', function () {
  $engage.toggleClass('engage-click');
});

$btn.on('click', function () {
  $lines.toggleClass('lines-on');
});
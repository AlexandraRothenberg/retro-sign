var $svg = $('svg');
var $btn = $('.btn');
var $engage = $('.engage');
var $lines = $('.lines');

$svg.on('click', function () {
  $svg.addClass('btn');
  $btn.toggleClass('btn-click');
  $engage.toggleClass('engage-click');
  $lines.toggleClass('lines-on');
});

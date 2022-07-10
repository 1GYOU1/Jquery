$(window).ready(function(){

  var $visualInner=$('#visual_inner')
  var $visualList=$('#visual_list')

  var visualWidth=$visualInner.innerWidth()
  var timer=null;

  $visualInner.css({'overflow':'hidden'});
  $visualList.css({left:0})

  slideVisualNext()
  autoPlay()

  function slideVisualNext(){
    var currentPosition=$visualList.position().left;
    $visualList.stop().animate({left:currentPosition-visualWidth},500, 'easeOutCubic', function(){
    $visualList.children().first().appendTo($visualList)
    $visualList.css({left:-visualWidth})
    })
  }

  function autoPlay(){
    timer=setInterval(slideVisualNext,2000)
  }

})
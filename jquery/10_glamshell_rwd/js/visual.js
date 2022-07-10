$(window).ready(function(){ //document로 했을때 안뜰 수 있음. resize 하는 경우 window

  visualEffect()

})

function visualEffect(){

  var $visualWrap=$('#visual_wrap')
  var $visualInner=$('#visual_inner')
  var $visualList=$('#visual_list')
  var $visualLi=$('#visual_list>li')
  var $visualImg=$('#visual_list>li>img')
  var $btnImg=$('#visual_inner span img')

  var visualLength=$visualLi.size()
  var visualWidth=$visualInner.innerWidth()
  var timer=null;

  $visualList.children().last().prependTo($visualList)

  visualSetting()
  initEvent()
  autoPlay()

  function initEvent(){
    $(window).on('resize', visualSetting)
    $('#next_btn').on('click', slideVisualNext)
    $('#prev_btn').on('click', slideVisualPrev)
    $visualWrap.on('mouseenter', stopAutoPlay)
    $visualWrap.on('mouseleave', autoPlay)

  }

  function visualSetting(){

    visualWidth=$visualInner.innerWidth() //반응형이라서 다시 셋팅해야함.
    $visualLi.css({width:visualWidth})
    $visualList.css({width:visualWidth*visualLength})
    $visualImg.css({width:visualWidth})
    $btnImg.css({width:visualWidth/20})
    $visualWrap.css({height:$visualImg.outerHeight()})
    $visualList.css({left:-visualWidth})  //반응형이라서 다시 셋팅해야함.
  }

  function slideVisualNext(){
    var currentPosition=$visualList.position().left;
    $visualList.stop().animate({left:currentPosition-visualWidth},500, 'easeOutCubic', function(){
    $visualList.children().first().appendTo($visualList)
    $visualList.css({left:-visualWidth})
    })
  }

  function slideVisualPrev(){
    var currentPosition=$visualList.position().left;
    $visualList.stop().animate({left:currentPosition+visualWidth},500, 'easeOutCubic', function(){
    $visualList.children().last().prependTo($visualList)
    $visualList.css({left:-visualWidth})//밀리니까 원위치
    })
  }

  function autoPlay(){
    timer=setInterval(slideVisualNext,2000)
  }

  function stopAutoPlay(){
    clearInterval(timer)
  }

}
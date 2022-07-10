$(document).ready(function(){
  var $mainMenu=$('#mainmenu_list>li>a')
  var $subMenu=$('.submenu_list')
  var $subBg=$('#sub_bg')
  var $headerWrap=$('#header_wrap')
  var menuOpen=false;

  $mainMenu.on('mouseenter focus', overMenu)
  $headerWrap.on('mouseleave', outMenu)



  function overMenu(){
    if(menuOpen==false){
      $subBg.stop().animate({height:160},300,'swing', function(){
        $subMenu.show();
        menuOpen=true;
      })
    }
  }
  function outMenu(){
    if(menuOpen==true){
      $subMenu.hide();
      $subBg.stop().animate({height:0},300,'swing', function(){
        menuOpen=false;
      })
    }
  }
})

//미완성
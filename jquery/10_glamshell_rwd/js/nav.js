$(document).ready(function(){

  naviEffect()
  
})

function naviEffect(){
    
  var $mainMenu=$('#mainmenu_list>li>a')
  var $subMenu=$('.submenu_list')
  var $subBg=$('#sub_bg')
  var $headerWrap=$('#header_wrap')
  var isSubMenuOpen=false;

  initEvent()

  function initEvent(){
    $mainMenu.on('mouseenter focus', overMainMenu)
    $headerWrap.on('mouseleave', outMainMenu)
  }

  function overMainMenu(){
    activateMainMenu($(this)) //mouseenter 된 $mainMenu에 매개변수(menu)를 지정해서 거기에 selected를 넣어준다.
    showSubMenu()
  }

  function activateMainMenu(menu){
    $mainMenu.parent().removeClass('selected')
    menu.parent().addClass('selected')
  }

  function showSubMenu(){

    if(isSubMenuOpen==false){
      
      $subBg.stop().animate({height:160},300,'easeOutCubic', function(){
        $subMenu.show()
        isSubMenuOpen=true;
      })
    }
  }

  function outMainMenu(){
    $mainMenu.parent().removeClass('selected')

    if(isSubMenuOpen==true){  //== 같다
      $subMenu.hide()
      $subBg.animate({height:0},300,'easeOutCubic',function(){
        isSubMenuOpen=false; //= 지정해줄때
      })
    }
  }
}
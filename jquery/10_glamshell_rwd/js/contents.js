// $(document).ready(function(){
  
//   contentsEffect()

//   function contentsEffect(){

//     var $banner=$('#banner_list>li')

//     $(window).on('scroll', scrollWindow)

//     function scrollWindow(){
//       var scrollHeight=$(document).scrollTop() //무조건 외우기
      
//       if(scrollHeight>=200){

//         for(var i=0; i<$banner.size(); i++){ //i = 순번
//           $banner.eq(i).animate({top:0, opacity:1},800+(800*i), 'easeOutCubic')
//         }
//       }
    
//     }
//   }
// })

$(document).ready(function(){
  contentsEffect()

  function contentsEffect(){
    var $banner=$('#banner_list>li')

    $(window).on('scroll', scrollWindow)

    function scrollWindow(){
      var scrollHeight=$(document).scrollTop()

      if(scrollHeight>=200){
        for(var i=0; i<$banner.size(); i++){//for문 변수; 끝나는 조건; 진행조건 순서로 적기
          $banner.eq(i).animate({top:0, opacity:1},500+(500*i),'swing')
        }
      }
    }
  }
})
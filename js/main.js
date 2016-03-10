$(window).load(function() {
        $('nav#menu').mmenu({
      extensions  : [ 'effect-slide-menu', 'pageshadow' ],
      searchfield : true,
      counters  : true, 
      navbars   : [
        {
          position  : 'top',
          content   : [ 'searchfield' ]
        }, {
          position  : 'top',
          content   : [
            'prev',
            'title',
            'close'
          ]
        },
      ]
    });
  });
$(document).ready(function() { 
  // dropdown
  $('.drop').on('click',function(){
    if($(this).hasClass('open') == true) {
      $('.drop').removeClass('open');
      $(this).removeClass('open');
    }else {
      $('.drop').removeClass('open');
      $(this).addClass('open');
    }
  });
  $(document).click(function(event) {
    if ($(event.target).closest(".drop").length) {
      return
    }
    $('.drop').removeClass('open');
    event.stopPropagation();
  });
  // dropdown
  // header
  var header_height=$('header').height();
    last_scroll=0;
    scto=null;
  
  $(document).scroll(function(){
    st=$(this).scrollTop();
      
    if(st<last_scroll){
      $('header').addClass('scrolled');
      scto=setTimeout(function(){$('header').removeClass('scrolled');},3000);
    }else{
      /* clearTimeout(scto);
      $('header').removeClass('scrolled'); */
    }
    
    last_scroll=st;

    if(st>header_height-5){
      $('header').addClass('fixed');
    }else{
      $('header').removeClass('fixed');
    }
  });
  $(document).scroll();
  // header
  // go top
  $(function(){
     $(window).scroll(function() {
      var top = $(document).scrollTop();

      if (top < 200) {$("#toTop").hide();}
      else {
        $("#toTop").show();
      }
    });
     $('#toTop').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 600);
          return false;
      });
  });
  // go top
});

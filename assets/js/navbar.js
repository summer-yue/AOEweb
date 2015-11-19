jQuery(document).ready(function(){

  if($(window).width()>1075) {
    $('.sidebar').removeClass('mini-sidebar');
  } else {
    $('.sidebar').addClass('mini-sidebar');
  }

  $('.fa-bars').click(function() {
    if($(this).hasClass('on')) {
      $('.sidebar-menu').removeClass('show');
      $('.mini-sidebar a').removeClass('show');
      $('.container').css({'margin-left' : '0px'});
      $('.sidebar-frame').css({'background-color' : 'transparent'});
      $(this).removeClass('on');
    } else {
      $('.sidebar-menu').addClass('show');
      $('.mini-sidebar > a').addClass('show');
      $('.container').css({'margin-left' : '105px'});
      $('.sidebar-frame').css({'background-color' : '#222'});
      $(this).addClass('on');
    }
  });

  $(window).resize(function() {
      if($(window).width()>1075) {
        $('.sidebar').removeClass('mini-sidebar');
      } else {
        $('.sidebar').addClass('mini-sidebar');
      }
  });
});
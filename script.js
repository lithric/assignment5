var main = function() {
    $('a.more-btn').click(function(){
      $(this).siblings('ul.more-menu').toggle();
    });
    $('li.share').click(function(){
      $(this).next().toggle();
    });
    $('.notification').click(function(){
      $(this).toggleClass('active');
    });
  };
  
  $(document).ready(main);
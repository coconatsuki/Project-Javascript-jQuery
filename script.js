


$(document).ready(function() {
for(var i = 1; i < 17; i++) {
      for(var y = 1; y < 17; y++) {
          $('#square').append("<div><p>" + y + "</p></div>");
      };
    };

    $('div').hover(function() {
        $(this).addClass('highlight');
    });

    $('.clear').on('click', function() {
      $('div').removeClass('highlight');
    });








});

$(document).ready(function() {

  var makeGrill = function() {
    $('#square').append("<div></div>");
    $('div').hover(function() {
        $(this).addClass('highlight');
    });
  };

  for(var i = 1; i < 17; i++) {
      for(var y = 1; y < 17; y++) {
          makeGrill();
      };
  };

  $('.clear').on('click', function() {
      $('div').removeClass('highlight');
      $('#square').children($('div')).detach();
      var grillSize = prompt("Quelle taille de grille souhaitez-vous (nombre de cases) ?");
      var resize = function () {
          $('div').width(480 / grillSize).height(480 / grillSize);
      };
      for(var i = 0; i < grillSize; i++) {
          for(var y = 0; y < grillSize; y++) {
                makeGrill();
                resize();
          };
      };
  });
});

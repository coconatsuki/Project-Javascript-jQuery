$(document).ready(function() {

    var bigGrill = $('#square');


    var makeGrill = function(size) {
      var cellSize = 480 / size;
      var cell = $('<div style="height: '+ cellSize +'px; width: '+ cellSize +'px"></div>');
      bigGrill.append(cell);
      cell.hover(function() {
          $(this).addClass('black');
          $(this).css("opacity", "+=0.10");
      });
    };


    for(var i = 0; i < 16; i++) {
        for(var y = 0; y < 16; y++) {
            makeGrill(16);
        };
    };

    $('.clear').on('click', function() {
        $('div').removeClass('highlight');
        bigGrill.children($('div')).detach();
        var grillSize = prompt("Quelle taille de grille souhaitez-vous (entre 1 et 40 cases) ?");
        for(var i = 0; i < grillSize; i++) {
            for(var y = 0; y < grillSize; y++) {
                makeGrill(grillSize);
            };
        };
    });


    $('.blue').on('click', function() {
      $('div').hover(function() {
          $(this).removeClass().addClass('blue');
      });
    });

    $('.black').on('click', function() {
      $('div').hover(function() {
          $(this).removeClass().addClass('black');
      });
    });
    $('.erase').on('click', function() {
      $('div').hover(function() {
          $(this).removeClass();
      });
    });
    $('.red').on('click', function() {
      $('div').hover(function() {
          $(this).removeClass().addClass('red');
      });
    });
    $('.yellow').on('click', function() {
      $('div').hover(function() {
          $(this).removeClass().addClass('yellow');
      });
    });
    $('.green').on('click', function() {
      $('div').hover(function() {
          $(this).removeClass().addClass('green');
      });
    });

});

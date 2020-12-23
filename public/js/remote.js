document.addEventListener("DOMContentLoaded", function() {
  var socket  = io.connect();
  var top = false;
  var right = false;
  var left = false;
  var bottom = false;
  var rotateLeft = false;
  var rotateRight = false;

  var topButton  = document.getElementById('top');
  var leftButton  = document.getElementById('left');
  var rightButton  = document.getElementById('right');
  var bottomButton  = document.getElementById('bottom');
  var rotateLeftButton  = document.getElementById('rotateLeft');
  var rotateRightButton  = document.getElementById('rotateRight');

  topButton.onmousedown = function(e){ top = true; };
  topButton.onmouseup = function(e){ top = false; };

  leftButton.onmousedown = function(e){ left = true; };
  leftButton.onmouseup = function(e){ left = false; };

  rightButton.onmousedown = function(e){ right = true; };
  rightButton.onmouseup = function(e){ right = false; };

  bottomButton.onmousedown = function(e){ bottom = true; };
  bottomButton.onmouseup = function(e){ bottom = false; };

  rotateLeftButton.onmousedown = function(e){ rotateLeft = true; };
  rotateLeftButton.onmouseup = function(e){ rotateLeft = false; };

  rotateRightButton.onmousedown = function(e){ rotateRight = true; };
  rotateRightButton.onmouseup = function(e){ rotateRight = false; };

    function mainLoop() {
        if ( top ) {
          socket.emit('move', 'top');
        }
        if ( left ) {
        socket.emit('move', 'left');
        }
        if ( right ) {
            socket.emit('move', 'right');
        }
        if ( bottom ) {
          socket.emit('move', 'bottom');
        }
        if ( rotateLeft ) {
          socket.emit('move', 'rLeft');
        }
        if ( rotateRight ) {
          socket.emit('move', 'rRight');
        }
       setTimeout(mainLoop, 25);
    }
    mainLoop();
 });

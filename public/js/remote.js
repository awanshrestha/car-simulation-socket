document.addEventListener("DOMContentLoaded", function() {
    var socket  = io.connect();
    var topBool, rightBool, leftBool, bottomBool, rotateLeftBool, rotateRightBool = false;
    // var directions = [ 'top', 'left', 'right', 'bottom', 'rotateLeft', 'rotateRight']
    // directions.forEach( direction =>{
    //   window[direction] = document.getElementById(direction)
    // })

    top.onmousedown = function(e){ topBool = true; };
    top.onmouseup = function(e){ topBool = false; };

    left.onmousedown = function(e){ leftBool = true; };
    left.onmouseup = function(e){ leftBool = false; };

    right.onmousedown = function(e){ rightBool = true; };
    right.onmouseup = function(e){ rightBool = false; };

    bottom.onmousedown = function(e){ bottomBool = true; };
    bottom.onmouseup = function(e){ bottomBool = false; };

    rotateLeft.onmousedown = function(e){ rotateLeftBool = true; };
    rotateLeft.onmouseup = function(e){ rotateLeftBool = false; };

    rotateRight.onmousedown = function(e){ rotateRightBool = true; };
    rotateRight.onmouseup = function(e){ rotateRightBool = false; };

    function mainLoop() {
        if ( topBool ) {
          socket.emit('move', 'top');
        }
        if ( leftBool ) {
        socket.emit('move', 'left');
        }
        if ( rightBool ) {
            socket.emit('move', 'right');
        }
        if ( bottomBool ) {
          socket.emit('move', 'bottom');
        }
        if ( rotateLeftBool ) {
          socket.emit('move', 'rLeft');
        }
        if ( rotateRightBool ) {
          socket.emit('move', 'rRight');
        }
       setTimeout(mainLoop, 25);
    }
    mainLoop();
 });
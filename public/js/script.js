$(function () {    
    var socket = io();
    socket.on('move', function(data){
        switch (data) {
            case 'left':
                car.style.left = parseInt(car.style.left) - moveBy + 'px';
                break;
            case 'right':
                car.style.left = parseInt(car.style.left) + moveBy + 'px';
                break;
            case 'top':
                car.style.top = parseInt(car.style.top) - moveBy + 'px';
                break;
            case 'bottom':
                car.style.top = parseInt(car.style.top) + moveBy + 'px';
                break;
            case 'rLeft':
                deg -= 5;
                car.style.webkitTransform = 'rotate('+deg+'deg)'; 
                car.style.mozTransform    = 'rotate('+deg+'deg)'; 
                car.style.msTransform     = 'rotate('+deg+'deg)'; 
                car.style.oTransform      = 'rotate('+deg+'deg)'; 
                car.style.transform       = 'rotate('+deg+'deg)'; 
                break;
            case 'rRight':
                deg += 5;
                car.style.webkitTransform = 'rotate('+deg+'deg)'; 
                car.style.mozTransform    = 'rotate('+deg+'deg)'; 
                car.style.msTransform     = 'rotate('+deg+'deg)'; 
                car.style.oTransform      = 'rotate('+deg+'deg)'; 
                car.style.transform       = 'rotate('+deg+'deg)'; 
                break;
        }
    });
});

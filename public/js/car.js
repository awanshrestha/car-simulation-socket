let car = document.querySelector('.car');
let moveBy = 10;
        
let midx = Math.floor(window.innerWidth / 2);
let midy = Math.floor(window.innerHeight / 2);

window.addEventListener('load', () => {
    car.style.position = 'absolute';
    car.style.left = 0;
    car.style.top = 0;
    car.style.left = parseInt(car.style.left) + midx + 'px';
    car.style.top = parseInt(car.style.top) + midy + 'px';

    myGameArea.start();
});


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
		this.canvas.id="demo";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

deg = 0;


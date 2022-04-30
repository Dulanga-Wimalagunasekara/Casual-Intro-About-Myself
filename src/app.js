var particlesSet = [];

function Particles(){
    var elm = document.createElement('div');
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = 1; //Math.sin((Math.floor(Math.random() * 91)) * (Math.PI/180));
    var angle = Math.floor(Math.random() * 361);
    var scale = Math.floor(Math.random() * 4);

    elm.style.backgroundColor='rgba('+r+', '+g+', '+b+', '+a+')';
    elm.style.transform='rotate('+angle+'deg) scale('+scale+')';
    elm.style.borderRadius=Math.floor(101 * Math.random())+'px';
    elm.style.position='absolute';
    elm.style.left= (Math.random() * (innerWidth-25)) +'px';
    elm.style.top=(Math.random() * (innerHeight-25))+'px';
    elm.style.width='25px';
    elm.style.height='25px';
    elm.style.transform='scale('+scale+')';

    this.elm=elm;
    this.dx = 10; //(5 + (Math.random() * 10)) * (Math.round(Math.random()) * 2  - 1);
    this.dy = 10; //(5 + (Math.random() * 10)) * (Math.random() > 0.5 ? 1 : -1) ;
    document.body.append(elm);

};

Particles.prototype.move=function(){
    var xPos = this.elm.offsetLeft + this.dx;
    var yPos = this.elm.offsetTop + this.dy;

    this.elm.style.left=xPos+'px';
    this.elm.style.top=yPos+'px';

    if( (yPos + this.elm.offsetHeight) > innerHeight ){
        yPos=innerHeight -this.elm.offsetHeight;
        this.dy=-this.dy;
    }

    if(yPos < 0){
        yPos = 0;
        this.dy = -this.dy;
    }

    if ((xPos + this.elm.offsetWidth) > innerWidth){
        xPos = innerWidth  - this.elm.offsetWidth;
        this.dx = -this.dx;
    }

    if (xPos < 0){
        xPos = 0;
        this.dx = -this.dx;
    }

    // if(!elmCircle.classList.contains('hide')){
    //     if(this.elm.offsetTop+this.elm.offsetHeight >= yPosition || this.elm.offsetLeft+this.offsetWidth >= xPosition){
    //         this.dy = - this.dy;
    //         this.dx = -this.dx
    //     }
    // }

};

for(var i=0; i<75; i++){
    particlesSet.push(new Particles());
}


var startingTime=null;

function animateParticles(stamp){
    if(!startingTime){
        startingTime=stamp;
    }

    var interval = stamp - startingTime;

    if(interval >= 30){
        startingTime=stamp;
        for(var i=0; i<particlesSet.length; i++){
            particlesSet[i].move();
        }
    }

    requestAnimationFrame(animateParticles);
}

requestAnimationFrame(animateParticles);
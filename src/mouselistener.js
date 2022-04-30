var elmCircle=document.createElement('div');
elmCircle.classList.add('pointer');
elmCircle.classList.add('hide');
document.body.append(elmCircle);
var tmrId=null;
var xPosition;
var yPosition;

addEventListener('mousemove',function(e){

    elmCircle.classList.remove('transitions');
    if(tmrId){
        clearTimeout(tmrId);
        tmrId=null;
    }

    tmrId = setTimeout(function(){
        elmCircle.classList.add('hide');
        elmCircle.classList.add('transitions');
    }, 2000);

    xPosition= e.pageX;
    yPosition=e.pageY;
    if(elmCircle.classList.contains('hide')){
        elmCircle.classList.remove('hide');
    }

    elmCircle.style.left=xPosition+'px';
    elmCircle.style.top=yPosition+'px';

});
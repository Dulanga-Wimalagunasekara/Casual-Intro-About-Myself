var text  = [
    'Hi There...!',
    'Here I am, Dulanga Wimalagunasekara',
    'A passionate programmer in Sri Lanka',
    'Having fun with HTML 5, CSS3 and JS',
    'Thanks for sparing your time on my crazy works',
    'Have a good day!!',
];

var st = null;
var i =0;
var k=0;
var elmStage=document.getElementById('stage');
var length=0;
var reverse = false;

function animateText(stamp){
    if(st===null){
        st=stamp;
    }
    var interval=stamp-st;

    if(interval>=70 && reverse){
        var txt = text[length];
        elmStage.innerText = txt.substring(0, k--);
        if (k === 0){
            length++;
            reverse = false;

            if (length >= text.length) length = 0;
        }
    }

    if(interval>=100 && !reverse){
        var txt=text[length];
        st=stamp;
        elmStage.innerText = txt.substring(0,i++);
        if(i >txt.length+8){
            reverse=true;
            i=0;
            if(length>=text.length){
                length=0;
            }
            k=txt.length;
        }

    }

    requestAnimationFrame(animateText);
}


requestAnimationFrame(animateText);
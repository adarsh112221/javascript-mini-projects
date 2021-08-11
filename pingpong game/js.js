var rod1 = document.getElementById("rod1");
var rod2 = document.getElementById("rod2");
var box = document.getElementById("box");
var ball = document.getElementById("ball");
 var previousbest1=document.getElementById("scoree");
var count = 10;
var highscore = 0;
let balld = ball.getBoundingClientRect();
var ballspeedx = 3;
var ballspeedy = 3;
var ballx = balld.x;
var bally = balld.y;
window.onresize = function(){ location.reload(); }
var gameon=false;
function setdefault(rod)
{
count=10;
highscore=0;
rod1.style.left = count + "%";
rod2.style.left = count + "%";
ball.style.left = box.getBoundingClientRect().x+"px";
if(rod==="rod1")
{
ball.style.top = rod1.getBoundingClientRect().height+"px";
ballspeedx = 3;
ballspeedy = 3;
}
if(rod==="rod2")
{
ball.style.top = (rod2.getBoundingClientRect().top-balld.width)+"px";
ballspeedx =-3;
ballspeedy = -3;
}
balld = ball.getBoundingClientRect();
ballx = balld.x;
bally = balld.y;
}
if(localStorage.getItem("previousbest")==null)
{
    
   previousbest1.innerHTML="0";
}
else
{
 previousbest1.innerHTML=localStorage.getItem("previousbest")
}
function sethigh(highscore)
{
  localStorage.setItem("highscore",highscore);
  if(localStorage.getItem("previousbest")==null)
 {
    localStorage.setItem("previousbest",highscore);
}
else if(highscore>localStorage.getItem("previousbest")) 
{
    localStorage.setItem("previousbest",highscore);
 
}

}

function gethigh()
{
  return localStorage.getItem("highscore");
}
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        if (count > 10) {
            count--;
            rod1.style.left = count + "%";
            rod2.style.left = count + "%";

        }
    }


    if (event.keyCode == 39) {

        if (count < 76) {
            count++;
            rod1.style.left = count + "%";
            rod2.style.left = count + "%";
        }
    }
    if (event.code === "Enter") {
        if(!gameon)
        {
            gameon=true;
        x = setInterval(function () {
            ballx = ballx + ballspeedx;
            bally = bally + ballspeedy;
            ball.style.left = ballx + 'px';
            ball.style.top = bally + 'px';
            if (ballx > box.getBoundingClientRect().left + box.getBoundingClientRect().width - balld.width || ballx < box.getBoundingClientRect().left) {

                ballspeedx = -ballspeedx;
            }
            let ballPos = ballx + ball.getBoundingClientRect().width / 2;
            if (ball.getBoundingClientRect().y <= rod1.offsetHeight) {
                ballspeedy = -ballspeedy;
                if ((ballPos < rod1.getBoundingClientRect().x) || (ballPos > (rod1.getBoundingClientRect().x) + rod1.getBoundingClientRect().width)) {
                    sethigh(highscore);
                    alert("rod2 wins with score of "+gethigh());
                    gameon=false;
                    setdefault("rod1");
                    clearInterval(x);
                }
                highscore++;
            }
            if ((bally + ball.getBoundingClientRect().width) >= (box.getBoundingClientRect().bottom - rod2.offsetHeight)) {
                ballspeedy = -ballspeedy;
               
                console.log(highscore)
                if (ballPos > rod2.getBoundingClientRect().x + rod2.getBoundingClientRect().width || ballPos < rod2.getBoundingClientRect().x) {
                    sethigh(highscore);
                     alert("rod1 wins with score of "+gethigh());
                     gameon=false;
                    setdefault("rod2");
                    clearInterval(x);
                }
                highscore++;
            }
        }, 10)
    }
}
});

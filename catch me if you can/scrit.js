var x=document.getElementsByTagName("div")[0];
var h=0.1*screen.height;
var w=0.1*screen.height;
function randomt()
{
return Math.floor(Math.random()*(window.innerHeight-h))+"px";
}
function randoml()
{
    return Math.floor(Math.random()*(window.innerWidth-w))+"px";
}
x.addEventListener('click',function()
{
x.style.top=randomt();
x.style.left=randoml();

})
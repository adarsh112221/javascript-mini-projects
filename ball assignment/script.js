var x=document.getElementById("first");
var y=document.getElementById("second");
var r=0;
var v=0;
var g=y.getBoundingClientRect().height;
document.addEventListener("keypress",function(event)
{
if(event.key=='d'&&r<89)
{
    if(r==0)
    r=2;
y.style.left=r+"%";
if(r<88)
r=r+1;

}
if(event.key=='a'&&r>=1)
{
 y.style.left=r+"%";
 r=r-1;
 }
 if(event.key=='w'&&y.getBoundingClientRect().top>=0&&y.getBoundingClientRect().top<=x.getBoundingClientRect().height-g+10)
 {  if(v==0)
    {
        v=3;
    }
    else
    {
        v=10;
    }
     var c=y.getBoundingClientRect();
     if(c.top>=10)
     y.style.top=(c.top-v)+"px";
  
 }
 if(event.key=='s'&&y.getBoundingClientRect().top>=0&&y.getBoundingClientRect().top<=x.getBoundingClientRect().height-g)
 {  if(v==0)
    {
        v=10;
    }
     var c=y.getBoundingClientRect();
     y.style.top=(c.top+v)+"px";
  
 }
})
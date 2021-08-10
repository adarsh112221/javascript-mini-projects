// make counter
var x=document.getElementById("firstdiv");
var y=document.getElementsByClassName("divsec")[0];
var t=x.innerHTML.trim();
var c=document.getElementsByTagName("button")[0];


c.onclick=function()
{
    let g=document.getElementById("getval").value;
    x.innerHTML=g;
  
    function adaa()
    {
    y.innerHTML=g-1;
    if(g>0)
    {
    y.classList.add('animat');
    setTimeout(function()
    {
        x.innerHTML=g;
        y.classList.remove('animat');
     
    },500) 
    g--;
   
   }
   else
   {
       clearInterval(adaa);
       return;
   }
}
var adaa=setInterval(adaa,1000);
}

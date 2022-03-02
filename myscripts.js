function fun1()
{
    x=document.getElementById("click");
    x.play();
    window.open("1.html")
}
function fun2()
{
    x=document.getElementById("click");
    x.play();
    window.open("2.html")
}
function fun3()
{
    x=document.getElementById("click");
    x.play();
    window.open("3.html")
}
var x1=document.getElementById("song");
let isplay=false;
function fun22()
{
    x1.play();
    isplay=true;
}
function fun33()
{
    isplay=false;
    x1.pause();
    
}
function music()
{
   if(isplay)
   {
       fun33();
   }
   else{
       fun22();
   }
}
function link1()
{
    window.open("https://www.facebook.com/pg/Science-1778206192281235/about/");
}
function link2()
{
    window.open("https://www.instagram.com/rajibpaul50/");
}
function link3()
{
    window.open("http://www.linkedin.com/in/rajib-paul-07162a1a6");
}
function link5()
{
    window.open("https://www.youtube.com/channel/UCAOU5SZ8vN-lFly3ZD3pDyA");
}
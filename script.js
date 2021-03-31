var scorecount=0;
var cross=true;

function myFunction() {
    document.getElementById("btn").style.display = "none";
    document.querySelector(".front a").style.display = "none";
    document.querySelector(".btnhover").style.display = "none";
    document.querySelector(".container").style.display = "block";
}
document.onkeydown=function(e)
{
    console.log("key code is  :",e.keyCode)
    if(e.keyCode==87)
    {
        jerry=document.querySelector(".jerry");
        jerry.classList.add('animatejerry');
        setTimeout(() => {
           jerry.classList.remove('animatejerry') 
        }, 500);
    }
    // if(e.keyCode==68)
    // {
    //     jerry=document.querySelector(".jerry");
    //     jerry.classList.add('animatejerryleft');
    //     setTimeout(() => {
    //        jerry.classList.remove('animatejerryleft') 
    //     }, 500);   
    // }
    if (e.keyCode == 68) {
        jerry = document.querySelector('.jerry');
        dinoX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 65) {
        jerry = document.querySelector('.jerry');
        dinoX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = (dinoX - 112) + "px";
    }
}
setInterval(() => {
    jerry=document.querySelector(".jerry");
    over=document.querySelector(".over");
    animatetom=document.querySelector(".animatetom");
    tom=document.querySelector(".tom");
    jx=parseInt(window.getComputedStyle(jerry,null).getPropertyValue("left"));
    jy=parseInt(window.getComputedStyle(jerry,null).getPropertyValue("top"));

    tx=parseInt(window.getComputedStyle(tom,null).getPropertyValue("left"));
    ty=parseInt(window.getComputedStyle(tom,null).getPropertyValue("top"));

    offsetx=Math.abs(jx-tx);
    offsety=Math.abs(jy-ty);

    console.log(offsetx,offsety);
    if(offsetx<60 && offsety<56)
    {
        scorecount=0;
        console.log("PRCEEDED")
        over.style.visibility='visible';
        over.style.display='block';
        over.style.visibility='visible';
        funny.innerHTML="<br>tom :hahahahahahahhahaha now any thingh to say"+"<br>jerry :yes leave me we are friends bro :)"
        // Over.innerHTML = "Game Over - Reload to Play Again"
        tom.classList.remove("animatetom");
        var i;
        var color = ['purple', 'yellow', 'orange', 'brown', 'black'];

        for(i=0;i<5;i++)
        {
            setTimeout(function ()  {
                over.style.color=color[i]; 
                console.log(color[i])
             }, 500);
        }
    }
    else if(offsetx<60 && cross){
        scorecount+=1;
        updatescore(scorecount);
        cross=false;
        setTimeout(() => {
            cross=true
        }, 1000);

    }
    if(scorecount>2&&scorecount<5)
    {
        console.log("yahooo")
        over.style.visibility='visible';
        funny.innerHTML=" jerry: Hey Tom Are You Loser"+"<br>Tom :Ill Catch you just wait";
        
    }
    else if(scorecount>5&&scorecount<9)
    {
        // console.log("yahooo")
        over.style.visibility='visible';
        funny.innerHTML="<br>jerry :catch me before the score is 12 i knowyou can't"+"<br>Tom :just wait"
    }
    else if(scorecount>15){
        over.style.visibility='visible';
        funny.innerHTML="<br>jerry :hahahahahahahhahaha"+"<br>Tom :just wait"
    }
    // if(scorecount>20)
    // {
    //     animatetom.style.animation='animatetom 2s linear infinite'; 
    //     tom.classList.remove("animatetom");
    // }
}, 100);
function updatescore(scorecount)
{
    score.innerHTML='Your Score is :'+scorecount;
}
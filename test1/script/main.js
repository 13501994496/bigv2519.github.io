function multiply(num1,num2)
{
    var result=num1*num2;
    return result
}

document.querySelector('h1').onclick = function(){alert('滚犊子');}

//下面调试失败，需要问胖胖
var myImige=document.querySelector('img')
myImige.onclick=function()
{
    var mySrc=myImige.getAttribute('src')
    if(mySrc==='img1/west勇士.jpg')
    {
        myImage.setAttribute('src','img1/west火箭.gif');
    }
    else
    {
        myImage.setAttribute('src','img1/west勇士.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName()
{
    var myName=prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent='LA湖人老板'+myName; 
}
if(!localStorage.getItem('name'))
{
    setUserName()
}
else
{
    var localName=localStorage.getItem('name');
    myHeading.textContent='LA湖人老板'+myName;
}
myButton.onclick=function(){setUserName()}
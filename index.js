let h=document.getElementById('hour');
let m=document.getElementById('minute')
let s=document.getElementById('second')

setInterval(setClock,1000)

function setClock(){
    let time=new Date()

    let second=time.getSeconds()/60;
    let minute=(second + time.getMinutes())/60;
    let hour=(minute+time.getHours())/12

    setRotation(s,second);
    setRotation(m,minute);
    setRotation(h,hour);

}
function setRotation(ele,r)
{
    ele.style.setProperty('--rotation',r*360);
}


setClock();
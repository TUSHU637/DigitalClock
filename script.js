let hour1=document.querySelector("#hours");
let minute1=document.querySelector("#minutes");
let second1=document.querySelector("#seconds");
let ampm1=document.querySelector("#ampm");
function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12){
        h=h-12;
        ampm="PM";
    }
    h=h<10 ? "0"+h:h;
    s=s<10 ? "0"+s:s;
    m=m<10 ? "0"+m:m;
    hour1.innerText=h;
    minute1.innerText=m;
    second1.innerText=s;
    ampm1.innerText=ampm;
    setTimeout(()=>{
        updateClock();//recursive function
    },1000)/*1s=1000ms*/
    
}

updateClock();//one time call
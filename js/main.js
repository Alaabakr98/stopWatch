var startButton=document.getElementById("btn-start")
var stopButton=document.getElementById("btn-stop")
var restButton=document.getElementById("btn-rest")
var timeElement= document.querySelector("h2")

let interval=null;
let second=0;
startButton.addEventListener("click" ,function (){

    start ();

})


function timer(){
    second ++ ;
   var secs=second%60;
   var hrs=Math.floor(second /3600);
  var mins= Math.floor( (second - ( hrs * 3600 )) / 60);
if(secs<10){ secs="0"+ secs}
if( hrs<10){ hrs="0"+ hrs}
if(mins<10){ mins="0"+ mins}
  timeElement.innerHTML=`${hrs} : ${mins} : ${secs}`;

}
function start (){
    if (interval){
        return
    }
    interval=setInterval(timer ,60)
}
stopButton.addEventListener("click" ,function(){
    stop()
})
function stop(){
    clearInterval(interval)
    interval=null;
}
restButton.addEventListener("click", function(){
    stop();
    second=0;
    timeElement.innerHTML="00 : 00 : 00"
}) 

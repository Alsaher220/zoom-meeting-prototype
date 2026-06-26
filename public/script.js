const video=document.getElementById("meetingVideo");

const leave=document.getElementById("leaveBtn");

if(video){

video.onended=function(){

window.location.href="ended.html";

}

}

if(leave){

leave.onclick=function(){

window.location.href="ended.html";

}

}

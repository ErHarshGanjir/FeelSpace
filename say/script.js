const text=`Hey Rahul,

I miss you, bro.

Things are different when you're not around, and I really need my brother by my side.

You are the kind of friend I can always count on, and I'm lucky to have you in my life.

Let's meet up soon.

❤️ Love you, man.`;

const message=document.getElementById("message");

let i=0;

function type(){

if(i<text.length){

message.innerHTML+=text.charAt(i);

i++;

setTimeout(type,35);

}

}

const canvas=document.getElementById("scratch");

const ctx=canvas.getContext("2d");

function resize(){

canvas.width=canvas.offsetWidth;

canvas.height=canvas.offsetHeight;

ctx.fillStyle="#777";

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

ctx.font="bold 28px Arial";

ctx.textAlign="center";

ctx.fillText("Scratch Here ✨",canvas.width/2,canvas.height/2);

}

resize();

window.onresize=resize;

ctx.globalCompositeOperation="destination-out";

let scratching=false;
let started=false;

canvas.addEventListener("mousedown",()=>{

scratching=true;

if(!started){

started=true;

document.querySelector(".hint").style.display="none";

type();

}

});

window.addEventListener("mouseup",()=>{

scratching=false;

});

canvas.addEventListener("mousemove",(e)=>{

if(!scratching)return;

const rect=canvas.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

ctx.beginPath();

ctx.arc(x,y,22,0,Math.PI*2);

ctx.fill();

});

canvas.addEventListener("touchstart",()=>{

if(!started){

started=true;

document.querySelector(".hint").style.display="none";

type();

}

});

canvas.addEventListener("touchmove",(e)=>{

e.preventDefault();

const rect=canvas.getBoundingClientRect();

const x=e.touches[0].clientX-rect.left;

const y=e.touches[0].clientY-rect.top;

ctx.beginPath();

ctx.arc(x,y,22,0,Math.PI*2);

ctx.fill();

},{passive:false});

function heart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML=Math.random()>.5?"❤️":"💖";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(h);

setTimeout(()=>h.remove(),7000);

}

setInterval(heart,700);

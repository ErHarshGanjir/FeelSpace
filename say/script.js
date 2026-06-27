```javascript
// ----------------------------
// Elements
// ----------------------------

const welcome = document.getElementById("welcome");
const envelopePage = document.getElementById("envelopePage");
const letterPage = document.getElementById("letterPage");

const openBtn = document.getElementById("openLetter");
const envelope = document.querySelector(".envelope");
const flap = document.querySelector(".envelope-top");
const preview = document.querySelector(".letter-preview");

const restart = document.getElementById("restart");

const paragraphs = document.querySelectorAll(".hidden");

// ----------------------------
// Change Screen
// ----------------------------

function showPage(page){

    document
        .querySelectorAll(".page")
        .forEach(p=>p.classList.remove("active"));

    page.classList.add("active");

}

// ----------------------------
// Welcome → Envelope
// ----------------------------

openBtn.onclick=()=>{

    showPage(envelopePage);

};

// ----------------------------
// Envelope → Letter
// ----------------------------

envelope.onclick=()=>{

    flap.style.transform="rotateX(180deg)";

    preview.style.transform=
    "translate(-50%,-120px)";

    preview.style.opacity="0";

    setTimeout(()=>{

        showPage(letterPage);

        revealMessage();

    },900);

};

// ----------------------------
// Reveal Letter
// ----------------------------

function revealMessage(){

    paragraphs.forEach(p=>{

        p.classList.remove("show");

    });

    paragraphs.forEach((p,index)=>{

        setTimeout(()=>{

            p.classList.add("show");

        },index*1800);

    });

}

// ----------------------------
// Restart
// ----------------------------

restart.onclick=()=>{

    flap.style.transform="";

    preview.style.transform="translateX(-50%)";

    preview.style.opacity="1";

    paragraphs.forEach(p=>{

        p.classList.remove("show");

    });

    showPage(welcome);

};

// ----------------------------
// Floating Hearts
// ----------------------------

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>0.5?"❤":"💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (16+Math.random()*18)+"px";

    heart.style.animationDuration=
    (6+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,900);

// ----------------------------
// Mouse Glow
// ----------------------------

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="300px";
glow.style.height="300px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background=
"radial-gradient(circle, rgba(255,255,255,.08), transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});
```

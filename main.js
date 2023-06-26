const mainText = document.getElementById("mainText");
mainText.addEventListener("mouseover", becomeBigger);
mainText.addEventListener("mouseout", becomeNormal);
const sizeFont = parseFloat(getComputedStyle(mainText).fontSize);
let x = sizeFont;
let intervalID;
let intervalID2;
let txt = "Originally from Kazakhstan, I have studied in the UK for the past 6 years. I have been coding since before I even moved to this amazing country. For my skillset see below in the skills section. Other than studies, on a daily basis I workout keeping myself healthy and from time to time even go for jogs. Find me on strava :)";
var speed = 50;
let i = 0;


function becomeBigger() {
    intervalID = setInterval(becomeBiggerhelper, 10);
}

function becomeNormal() {
    intervalID2 = setInterval(becomeNormalHelper, 10);
}

function becomeBiggerhelper() {
    if (x < (1.5 * sizeFont)) {
        x = x + 0.5;
        mainText.style.fontSize = x + "px";
    } else {
        clearInterval(intervalID);
    }
}


function becomeNormalHelper() {
    clearInterval(intervalID);
    if (x > sizeFont) {
        x--;
        mainText.style.fontSize = x + "px";
    } else {
        clearInterval(intervalID2);
    }
}

intervalID3 = setInterval(typeWriter, speed);

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("extract").innerHTML += txt.charAt(i);
        i++;
    } else {
        clearInterval(intervalID3);
    }
}

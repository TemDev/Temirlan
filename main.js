
const mainText = document.getElementById("mainText");
const sizeFont = parseFloat(getComputedStyle(mainText).fontSize);
let x = sizeFont;
let intervalID;
let intervalID2;
let intervalID3;
let txt = "Coming from Kazakhstan, I have studied in the UK for the past 6 years. My home city is Almaty and my interests range from purely academical ones to sports such as basketball and running. I love going for walks, watching plays (Hamilton is number 1) and travelling.";
const skillArray = ["Python, 4 years, made games, implemented machine learning algorithms, completed A-Level", "Haskell, functional programmming", "Kotlin, Java, object-oriented programming", "C, achieved 93% on Imperial assessment and made a group project", "HTML, CSS and Javascript made this website as an example"];
const skArray = ["sk1", "sk2", "sk3", "sk4", "sk5"]
var speed = 20;
var speed2 = 200;
let i = 0;
let i2 = 0;

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
let count = 0;

function becomeNormalHelper() {
    clearInterval(intervalID);
    if (x > sizeFont) {
        x--;
        mainText.style.fontSize = x + "px";
    } else {
        clearInterval(intervalID2);
    }
}

function startIntervalWriter(entries, observer) {
    if (count) {
        observer.unobserve(target);
        intervalID3 = setInterval(typeWriter, speed);
    } else {
        count++;
    }
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("extract").innerHTML += txt.charAt(i);
        i++;
    } else {
        clearInterval(intervalID3);
    }
}

const options = {
  root: null,
  threshold: 1
};

function main() {
  mainText.addEventListener("mouseover", becomeBigger);
  mainText.addEventListener("mouseout", becomeNormal);

}

main();
const observer = new IntersectionObserver(startIntervalWriter, options);

const target = document.getElementById("extract");
observer.observe(target);

// jQuery code copied from stackoverflow for smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

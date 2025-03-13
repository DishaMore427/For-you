// function thisletter(){
   
//     var img =document.getElementById("image");
//     img.src='sorry.jpg';
//     document.body.style.backgroundColor="pink";
//     document.getElementById("h3").textContent="Sorry to dudu for to late";
//     document.getElementById("pagebtn").textContent="Next";
//     document.getElementById("p").textContent="True love is always worth the wait.";  
// }
let clickCount = 0;
const maxClicks = 8;
const contextElement = document.getElementById("context");
const imageElement = document.getElementById("image");
const buttonElement = document.getElementById("changebtn");
const audio = document.getElementById("bg-music");
const playButton = document.getElementById("play-music");

const images = [
     // You can replace these with your actual image URLs
    "sorry.jpg",
    "calmdudu.jpg",
    "choco.jpg",
    "fatbubu.jpg",
    "herodudu.jpg",
    "hug.jpg",
    "love.jpg",
    "partner.jpg"
    
];

const contexts = [
   
    "Sorry dudu for to late.",
    "Thank you for being calm with.",
    "I only like chocolates because you give them to me.",
    "Thank you for loving me even when i am fat",
    "You're the only one for me. My Rock ,My Champion and My forever home",
    "Thank you for being the Best Boyfriend ever and also for not hating me when i get mad for no reason",
    "Thank you the way your love me\n Love you so much mera Dudu",
    "You are my forever and always."
];

// Event listener for the button click
buttonElement.addEventListener('click', () => {
    console.log('Button clicked,current click count:',clickCount);
    if (clickCount < maxClicks) {
        // Update the image and context based on the current count
        imageElement.src = images[clickCount];
        contextElement.textContent = contexts[clickCount];
        clickCount++;
    }
    else {
        buttonElement.disabled = true; // Disable the button after 10 clicks
        contextElement.textContent = "Be My Forever!";
    }
   
});



playButton.addEventListener("click", () => {
  audio.play();
  playButton.style.display = "none"; // Hide button after playing
});
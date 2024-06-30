/* VARIABLE DECLARATIONS */
/* --------------------- */

const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.jpg",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const dotlistener = [];
let Previous = 1;
let ActiveSlide = 1;

/* FUNCTIONS SECTION */

/* Add Function : bottom Dots  */

function AddDot(SlideNumber, ActiveSlide) {
  let NewDot = document.querySelector(".dots");

  if (SlideNumber === ActiveSlide) {
    let AddSpan = `

	<span class="dot dot_selected" id="dotnumber-${SlideNumber}"></span>
	
	`;

    NewDot.innerHTML += AddSpan;
  } else {
    let AddSpan = `

	<span class="dot" id="dotnumber-${SlideNumber}"></span>
	
	`;

    NewDot.innerHTML += AddSpan;
    
    
  }

}
 /* Init Bottom Dots */

for (let SlideNumber = 1; SlideNumber <= slides.length; SlideNumber++) {
  AddDot(SlideNumber, ActiveSlide);
}
for (let SlideNumber = 1; SlideNumber <= slides.length; SlideNumber++) {
  document.getElementById(`dotnumber-${SlideNumber}`).addEventListener("click",function(){
    let result = document.getElementsByClassName("banner-img");
    result[0].src = slides[SlideNumber - 1].image;
    UpdateSlides(Previous, SlideNumber)
    Previous = SlideNumber;
  })
}
/* Add function : Update Slides */

function  UpdateSlides(PreviousActive,ActiveSlide) {
	/* update active dot */
	for (let i = 0; i < slides.length; i++) {
    document.getElementById("dotnumber-" + (i+1)).classList.remove("dot_selected");
    }
	document.getElementById("dotnumber-" + ActiveSlide).classList.add("dot_selected");
	
	/* update tagline */

	let NewTagLine = document.getElementById("banner").querySelector("p")

	let AddTagLine = `

	${slides[ActiveSlide - 1 ].tagLine}
	
	`;

	NewTagLine.innerHTML = AddTagLine;
}

/* EVENT LISTENER SECTION */
/* Listen : Right image click */

let ArrowRightClick = document.getElementById("arrow-right-image");

ArrowRightClick.addEventListener("click", function () {
  PreviousActive = ActiveSlide;
  Previous = PreviousActive;
  ActiveSlide++;

  if (ActiveSlide === slides.length + 1) {
    ActiveSlide = 1;
  }
  UpdateSlides(PreviousActive,ActiveSlide)
  let result = document.getElementsByClassName("banner-img");

  result[0].src = slides[ActiveSlide - 1].image;
});

/* Listen : left Image Click */

let ArrowLeftClick = document.getElementById("arrow-left-image");
ArrowLeftClick.addEventListener("click", function () {
  PreviousActive = ActiveSlide;
  Previous= PreviousActive;
  ActiveSlide--;

  if (ActiveSlide === 0) {
    ActiveSlide = slides.length;
  }
  UpdateSlides(PreviousActive,ActiveSlide)
  let result = document.getElementsByClassName("banner-img");

  result[0].src = slides[ActiveSlide - 1].image;
});

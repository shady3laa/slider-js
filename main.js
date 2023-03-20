let sliderItems = Array.from(
  document.querySelectorAll(".slider-container img")
);

let slideCount = sliderItems.length;

let currentSlide = 1;

let slideNumberElement = document.getElementById('slide-number');

let nextButton = document.getElementById('next');

let prevButton = document.getElementById('prev');


nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


let createUl = document.createElement("ul");
createUl.setAttribute("id" , "pag");

for(let i =1; i <= slideCount ; i++) {
    
    let pagLi =document.createElement("li")
    pagLi.setAttribute("data-index" , i)
    
    pagLi.appendChild(document.createTextNode(i))
    
    createUl.appendChild(pagLi)
}
let bullets = document.getElementById("indicators").appendChild(createUl)


let newBullets = document.getElementById('pag');



let bulletsArray = Array.from(
    document.querySelectorAll("#pag li")
  );

  
  
checker();
function nextSlide() {
 if(nextButton.classList.contains("disabled")){
    return false;
 }  else {
    currentSlide++ 
    checker()
 }


}

function prevSlide() {
    if(prevButton.classList.contains("disabled")){
        return false;
     }  else {
        currentSlide-- 
        checker()
     }
}

function checker() {
    slideNumberElement.textContent= `slide # ${currentSlide} of ${slideCount}`
    
    removeAll()
    
    sliderItems[currentSlide - 1].classList.add("active")
    

    newBullets.children[currentSlide - 1].classList.add("active")
    
    if(currentSlide == 1) {
        prevButton.classList.add("disabled")
        
    }   else if (currentSlide == slideCount) {
        
        nextButton.classList.add("disabled")
    } else {

        prevButton.classList.remove("disabled")

        nextButton.classList.remove("disabled")

    }

}

function removeAll(){
    sliderItems.forEach((img) => {img.classList.remove("active")})

    bulletsArray.forEach((bul) => {bul.classList.remove("active")})
}
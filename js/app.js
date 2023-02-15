console.log('hello')

const images = [
    {
        image: './img/01.webp',
        title: 'Marvels Spiderman Miles Morales',
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

images.forEach(function(slidesArticle, i) {

    const { image, title, text } = slidesArticle

    let divElement = document.createElement("div")
    divElement.setAttribute("id", "place-img-here-" + (i + 1))

    if ( i === 0) {

        divElement.classList.add("active-slide")
    }

    divElement.classList.add("slide-thumb")
    document.getElementById("main-carousel").appendChild(divElement)

    const slideList = `

        <img src="${image}" class="card-img">
        <h5 class="my-card-title">${title}</h5>
        <p class="my-card-text">${text}</p>

    `
    divElement.innerHTML += slideList
})

// GET elements from HTML

let slideElements = document.querySelectorAll('.slide-thumb')
console.log(slideElements)

const leftSlideElement = document.querySelector('.arrow-left')
console.log(leftSlideElement)

const rightSlideElement = document.querySelector('.arrow-right')
console.log(rightSlideElement)

// ADD THE INCREASE VALUE FOR SLIDING SLIDERS

// increase
let slideCounter = 0

// WHEN I click on right arrow i get to the next element
rightSlideElement.addEventListener('click', function () {
    console.log('current slide', slideCounter)

    let actualSlide = slideElements[slideCounter]

    actualSlide.classList.remove('active-slide')

    slideCounter ++  

    if(slideCounter === slideElements.length) {

        slideCounter = 0
    }

    let nextSlide = slideElements[slideCounter]

    nextSlide.classList.add('active-slide')

    // console.log('next slide', slideCounter)
})

// WHEN I click on left arrow i get to the previous element

leftSlideElement.addEventListener('click', function () {
    console.log('current slide', slideCounter)

    let actualSlide = slideElements[slideCounter]

    actualSlide.classList.remove('active-slide')

    slideCounter --
    
    if(slideCounter < 0) {

        slideCounter = slideElements.length - 1
    }


    let previousSlide = slideElements[slideCounter]

    previousSlide.classList.add('active-slide')

    // console.log('previous slide', slideCounter)
})

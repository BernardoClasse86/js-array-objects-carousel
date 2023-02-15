console.log('hello')

const images = [
    {
        image: './img/BMTH-Sleepwalking.jpg',
        title: 'Sleepwalking',
        text: "Bring Me The Horizon song: Sleepwalking from Sempiternal",
    }, {
        image: './img/BMTH-Avalanche.jpg',
        title: 'Avalanche',
        text: "Bring Me The Horizon song: Avalanche from That's the Spirit",
    }, {
        image: './img/BMTH-i-dont-know-what-to-say.jpg',
        title: "i don't know what to say",
        text: "Bring Me The Horizon song: i don't know what to say from amo",
    }, {
        image: './img/BMTH-1x1.jpg',
        title: '1x1',
        text: "Bring Me The Horizon song: 1x1 from Post Human: Survival Horror",
    }, {
        image: './img/BMTH-Strangers.jpg',
        title: "sTraNgeRs",
        text: "Bring Me The Horizon last song: sTraNgeRs",
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

// aggiung autoplay stop e reverse autoplay

// recupero i bottoni dall HTML
const autoplayButton = document.getElementById('autoplay')
// console.log(autoplayButton)

// recupero i bottoni dall HTML
const stopButton = document.getElementById('stop')
// console.log(stopButton)

// recupero i bottoni dall HTML
const autoplayReverseButton = document.getElementById('reverse')
// console.log(autoplayReverseButton)

// inizializziamo una variabile vuota che poi prendera la timing function
let addAutoplay

// inizializzo la variabile per l'autoplay con false
let autoplayStart = false

// creiamo un event listener che faccia partire l'autoplay in avanti
autoplayButton.addEventListener('click', function() {

    // al momento del click controllo se la variabile e' false se lo e' la imposto su true e avvio l'autoplay 
    if (!autoplayStart) {

        autoplayStart = true

        addAutoplay = setInterval(function() {

        let actualSlide = slideElements[slideCounter]

        actualSlide.classList.remove('active-slide')

        slideCounter++

        if (slideCounter === slideElements.length) {

            slideCounter = 0
        }

        let nextSlide = slideElements[slideCounter]

        nextSlide.classList.add('active-slide')

        }, 3000)
    }
})

// al click su stop cancelliamo l'intervallo di 3sec e impostiamo l'autoplayStart su false in modo che non si ripeta
stopButton.addEventListener('click', function() {

  clearInterval(addAutoplay)

  autoplayStart = false
})

// creiamo un event listener che faccia partire l'autoplay all'indietro
autoplayReverseButton.addEventListener('click', function() {

  if (!autoplayStart) {

    autoplayStart = true

    addAutoplay = setInterval(function() {

      let actualSlide = slideElements[slideCounter]

      actualSlide.classList.remove('active-slide')

      slideCounter--

      if (slideCounter < 0) {

        slideCounter = slideElements.length - 1
      }
      let previousSlide = slideElements[slideCounter]

      previousSlide.classList.add('active-slide')

    }, 3000)
  }
})

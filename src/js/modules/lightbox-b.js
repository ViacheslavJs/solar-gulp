
export const lightboxSliderB = () => {

try {
  const moduleLightboxB = document.getElementById('lightbox-b'); 
  //console.log(moduleLightbox);
  if (moduleLightboxB !== null) {
/////////////////////////////////////

// TODO - swipe animation
function shiftRight() {
  const pictures = document.querySelectorAll('.lightbox-b__images-box');
  pictures.forEach(e => {
    e.classList.remove('to-left');
    e.classList.add('to-right');  
    //console.log(e);
  }); 
}

function shiftLeft() {
  const pictures = document.querySelectorAll('.lightbox-b__images-box');
  pictures.forEach(e => {
    e.classList.remove('to-right');
    e.classList.add('to-left');  
    //console.log(e);
  }); 
}

const btnPrev = document.querySelector('.lightbox-b__prev');
const btnNext = document.querySelector('.lightbox-b__next');

btnPrev.addEventListener('click', function() {
  shiftRight();
});

btnNext.addEventListener('click', function() {
  shiftLeft();
});
//


// TODO - lightbox:
const startLightbox = document.querySelector('.js-lightbox-b-start');
startLightbox.addEventListener('click', function() {
  showModal();
  currentSlide(1); 
});

const modal = document.getElementsByClassName('lightbox-b__modal')[0];
const close = document.getElementsByClassName('lightbox-b__close')[0];
const effect = document.getElementsByClassName('js-lightbox-b-effects');
const pageScroll = document.getElementsByTagName('body')[0]; 

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add('filter-blur-grayscale');
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove('filter-blur-grayscale');
      }  
    };

// page scroll disable function (body):
function disablePageScrolling () {
	 pageScroll.style.overflowY = "hidden";
}

// page scroll enable function (body):
function enablePageScrolling () {
	 pageScroll.style.overflowY = "visible"; // instead of visible - auto or ""
}
   
/*
// TODO - syntax variant
const controls = document.querySelectorAll('.controls');
controls.forEach(v => {
  document.addEventListener('click', (event) => { 
    //console.log(controls); 
    const click = event.target.classList.contains('click-controls');
    //console.log(click);
    if ( click === true ) {     
      //console.log(controls);
      //console.log(click);
      v.classList.toggle('show-hide-controls');
    }   
  });  
});
//
*/

// TODO - syntax variant
document.addEventListener('click', (event) => { 
const controls = document.querySelectorAll('.controls');
controls.forEach(v => {
  
    //console.log(controls); 
    const click = event.target.classList.contains('click-controls');
    //console.log(click);
    if ( click === true ) {     
      //console.log(controls);
      //console.log(click);
      v.classList.toggle('show-hide-controls');
    }   
  });  
});
//

//                     
function showModal() {
  const controls = document.querySelectorAll('.controls');
  controls.forEach(v => {
    setTimeout( function() {
      v.classList.add('show-hide-controls');
    }, 800);
    setTimeout( function() {
      v.classList.remove('show-hide-controls');
    }, 4500);   
  });
  
  modal.style.display = "block";
  //close.style.display = "block";  
  onEffect();
  disablePageScrolling();         
}

//TODO
close.addEventListener('click', hideModal);
function hideModal() {	
  modal.style.display = "none";
  //close.style.display = "none"; 
  offEffect(); 
  enablePageScrolling();     
}
//

// TODO - lightbox
const btn1 = document.querySelector('.lightbox-b__prev');
const btn2 = document.querySelector('.lightbox-b__next');

/* // TODO - syntax variant:
btn1.addEventListener('click', () => plusSlides(-1) );
btn2.addEventListener('click', () => plusSlides(1) );
*/

// TODO - syntax variant:
btn1.addEventListener('click', function() {
  plusSlides(-1);
});

btn2.addEventListener('click', function() {
  plusSlides(1);
});

btn1.addEventListener('click', function() {
  currentSlide(imagesIndex)
});

btn2.addEventListener('click', function() {
  currentSlide(imagesIndex)
});


let imagesIndex = 1;
viewSlides(imagesIndex); 

function plusSlides(num) {
  viewSlides(imagesIndex += num); 
}

function currentSlide(num) {
  viewSlides(imagesIndex = num); 
}

function viewSlides(num) {
  const img = document.getElementsByClassName('lightbox-b__images-box');
  const dots = document.getElementsByClassName("lightbox-b__dot");
  let i;
 
  if (num > img.length) {
    imagesIndex = 1
  }      
  
  if (num < 1) {
    imagesIndex = img.length
  }
  
  for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
  }
    
  img[imagesIndex-1].style.display = "block";
  dots[imagesIndex-1].className += " dot-active";  
  
}

////////////////////////////////////////////////
} // if (moduleLightboxB !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}


} // export




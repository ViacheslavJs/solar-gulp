
export const lightboxSliderB = () => {

try {
  const moduleLightboxB = document.getElementById('b-lightbox'); 
  //console.log(moduleLightbox);
  if (moduleLightboxB !== null) {
  
/////////////////////////////////////

(function() {

// TODO - swipe animation
function shiftRight() {
  const pictures = document.querySelectorAll('.b-lightbox__images-box');
  pictures.forEach(e => {
    e.classList.remove('to-left');
    e.classList.add('to-right');  
    //console.log(e);
  }); 
}

function shiftLeft() {
  const pictures = document.querySelectorAll('.b-lightbox__images-box');
  pictures.forEach(e => {
    e.classList.remove('to-right');
    e.classList.add('to-left');  
    //console.log(e);
  }); 
}

const btnPrev = document.querySelector('.b-lightbox__prev');
const btnNext = document.querySelector('.b-lightbox__next');

btnPrev.addEventListener('click', function() {
  shiftRight();
});

btnNext.addEventListener('click', function() {
  shiftLeft();
});
//


// TODO - lightbox:
const startLightbox = document.querySelector('.js-b-lightbox-start');
startLightbox.addEventListener('click', function() {
  showModal();
  currentSlide(1); 
});

const modal = document.getElementsByClassName('b-lightbox__modal')[0];
const close = document.getElementsByClassName('b-lightbox__close')[0];
const effect = document.getElementsByClassName('js-b-lightbox-effects');
const pageScroll = document.getElementsByTagName('body')[0]; 

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add('b-filter');
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove('b-filter');
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
const controls = document.querySelectorAll('.b-controls');
controls.forEach(v => {
  document.addEventListener('click', (event) => { 
    //console.log(controls); 
    const click = event.target.classList.contains('b-switching');
    //console.log(click);
    if ( click === true ) {     
      //console.log(controls);
      //console.log(click);
      v.classList.toggle('b-show');
    }   
  });  
});
//
*/

// TODO - syntax variant
document.addEventListener('click', (event) => { 
const controls = document.querySelectorAll('.b-controls');
const iconFull = document.querySelector('.b-icon-mod'); // full screen mode
controls.forEach(v => {
  
    //console.log(controls); 
    const click = event.target.classList.contains('b-switching');
    //console.log(click);
    
    const tag = event.target.tagName.toLowerCase();
    //console.log(tag);
    
    const whatClass = event.target.className;
    //console.log(whatClass);
    
    if ( click === true || whatClass === '' ) {     
      //console.log(controls);
      //console.log(click);
      v.classList.toggle('b-show');
      iconFull.classList.toggle('fa-expand-alt'); // full screen mode
    }   
  });  
});
//

//                     
function showModal() {
  const controls = document.querySelectorAll('.b-controls');
  const iconFull = document.querySelector('.b-icon-mod'); // full screen mode
  controls.forEach(v => {
    setTimeout( function() {
      v.classList.add('b-show');
      iconFull.classList.add('fa-expand-alt'); // full screen mode
    }, 800);
    setTimeout( function() {
      v.classList.remove('b-show');
      iconFull.classList.remove('fa-expand-alt'); // full screen mode
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

//TODO - full screen mode
const iconFull = document.querySelector('.b-icon-mod'); 
//console.log(iconFull);
iconFull.addEventListener('click', () => {

  hideElements(); // options

  iconFull.classList.toggle('fa-expand-alt'); 
  iconFull.classList.toggle('fa-compress-alt');
  const fullModal = document.querySelector('.b-lightbox__modal');
  fullModal.classList.toggle('b-full-modal');
  const fullImg = document.querySelectorAll('.b-lightbox__images-box');
  fullImg.forEach(f => {
    //console.log(fullImg);
    f.classList.toggle('b-full-img');    
  });
});

// options
function hideElements() {
const hide = document.querySelectorAll('.b-hide'); 
  hide.forEach(h => {
    h.classList.toggle('b-element-hide');
  });
}
//

// TODO - lightbox
const btn1 = document.querySelector('.b-lightbox__prev');
const btn2 = document.querySelector('.b-lightbox__next');

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
  const img = document.getElementsByClassName('b-lightbox__images-box');
  const dots = document.getElementsByClassName('b-lightbox__dot');
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
      dots[i].className = dots[i].className.replace(" b-dot-active", "");
  }
    
  img[imagesIndex-1].style.display = "block";
  dots[imagesIndex-1].className += " b-dot-active";  
  
}

////////////////////////////////////////////////

})(); // immediately invoked functions

} // if (moduleLightboxB !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}


} // export




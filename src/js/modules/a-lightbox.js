
export const lightboxSliderA = () => {

try {
  const moduleLightboxA = document.getElementById('a-lightbox'); 
  //console.log(moduleLightboxA);
  if (moduleLightboxA !== null) {
  
/////////////////////////////////////

(function() {

// TODO - swipe animation
function shiftRight() {
  const pictures = document.querySelectorAll('.a-lightbox__images-box');
  pictures.forEach(e => {
    e.classList.remove('to-left');
    e.classList.add('to-right');  
    //console.log(e);
  }); 
}

function shiftLeft() {
  const pictures = document.querySelectorAll('.a-lightbox__images-box');
  pictures.forEach(e => {
    e.classList.remove('to-right');
    e.classList.add('to-left');  
    //console.log(e);
  }); 
}

const btnPrev = document.querySelector('.a-lightbox__prev');
const btnNext = document.querySelector('.a-lightbox__next');

btnPrev.addEventListener('click', function() {
  shiftRight();
});

btnNext.addEventListener('click', function() {
  shiftLeft();
});
//


// TODO - slider, lightbox:
const startLightbox = document.querySelector('.js-a-lightbox-start');
startLightbox.addEventListener('click', function() {
  showModal();
  currentSlide(1); // можно передать любой слайд в виде индекса; если же currentSlide с индексом не вызвать - 
                   // будет неверно отцентрирован слайд!!!                                     
});

const modalLayer = document.getElementById('modal-layer');
const close = document.getElementsByClassName('a-lightbox__close')[0];
const effect = document.getElementsByClassName('js-a-lightbox-effects');
const pageScroll = document.getElementsByTagName('body')[0]; 

let onEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.add('a-filter');
      }  
    };
    
let offEffect = 
    function () {
      for (let i = 0; i < effect.length; i++) {
       effect[i].classList.remove('a-filter');
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
const controls = document.querySelectorAll('.a-controls');
controls.forEach(v => {
  document.addEventListener('click', (event) => { 
    //console.log(controls); 
    const click = event.target.classList.contains('a-switching');
    //console.log(click);
    
    const tag = event.target.tagName.toLowerCase();
    //console.log(tag);
    
    const whatClass = event.target.className;
    //console.log(whatClass);
    
    if ( click === true || whatClass === '' ) {     
      //console.log(controls);
      //console.log(click);
      v.classList.toggle('a-show');
    }  
  });  
});
//
*/


// TODO - syntax variant
document.addEventListener('click', (event) => { 
const controls = document.querySelectorAll('.a-controls');
controls.forEach(v => {
  
    //console.log(controls); 
    const click = event.target.classList.contains('a-switching');
    //console.log(click);
    
    const tag = event.target.tagName.toLowerCase();
    //console.log(tag);
    
    const whatClass = event.target.className;
    //console.log(whatClass);
    
    if ( click === true || whatClass === '' ) {     
      //console.log(controls);
      //console.log(click);
      v.classList.toggle('a-show');
    }   
  });  
});
//

                     
function showModal() {
  const controls = document.querySelectorAll('.a-controls');
  controls.forEach(v => {
    setTimeout( function() {
      v.classList.add('a-show');
    }, 800);
    setTimeout( function() {
      v.classList.remove('a-show');
    }, 4500);   
  });
  
  modalLayer.style.display = "block";
  //iconClose.style.display = "block";  
  onEffect();
  disablePageScrolling();
  lightboxCentering();    

  addEventListener("resize", rotationProcessing);         
}

function rotationProcessing() {
  lightboxCentering();   
}

//TODO
close.addEventListener('click', hideModal);
function hideModal() {	
  modalLayer.style.display = "none";
  //close.style.display = "none"; 
  offEffect(); 
  enablePageScrolling(); 
  
  removeEventListener("resize", rotationProcessing);
}
//

//TODO
modalLayer.addEventListener('click', closeLayer);
function closeLayer() {
  let clickedСlass = event.target.className; 
  //console.log(clickedСlass);
  if (clickedСlass === 'a-lightbox__modal-layer') {
    modalLayer.style.display = "none";  
    //close.style.display = "none";  
    offEffect(); 
    enablePageScrolling(); 
 
    removeEventListener("resize", rotationProcessing);
  }    
}
//

// TODO - lightbox
const btn1 = document.querySelector('.a-lightbox__prev');
const btn2 = document.querySelector('.a-lightbox__next');

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
lightboxCentering();

function plusSlides(num) {
  viewSlides(imagesIndex += num); 
  lightboxCentering();
}

function currentSlide(num) {
  viewSlides(imagesIndex = num); 
  lightboxCentering();
}

function viewSlides(num) {
  const img = document.getElementsByClassName('a-lightbox__images-box');
  const dots = document.getElementsByClassName("a-lightbox__dot");
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
      dots[i].className = dots[i].className.replace(" a-dot-active", "");
  }
    
  img[imagesIndex-1].style.display = "block";
  dots[imagesIndex-1].className += " a-dot-active";  
  
}

//////// TODO lightbox centering /////////
function lightboxCentering() {
  const slides = document.getElementsByClassName('a-lightbox__modal')[0];   
  const sizeLayer = document.getElementById('modal-layer'); 
  let heightLayer = sizeLayer.offsetHeight;                                     
  let widthLayer = sizeLayer.offsetWidth;
  let heightGallery = slides.offsetHeight;
  let widthGallery = slides.offsetWidth;
  //console.log(heightLayer);
  //console.log(heightGallery);
  
  // centering algorithm:
  let differenceLayerGallery = heightLayer - heightGallery;
  let remainder = differenceLayerGallery / 2;
  slides.style.top = remainder + "px";
  //console.log(remainder); 
  //console.log(heightLayer); 
  //console.log(heightGallery); 

  /*const landscapeImg = document.getElementsByClassName('a-lightbox__images');
  let landscape = 'landscape';
    for (let i = 0; i < landscapeImg.length; i++) {
      if (landscapeImg[i].height < landscapeImg[i].width) {
        slides.style.top = remainder + "px"; 
        console.log(landscape);         
      }
    }*/
  
  // отслеживание вертикальных изображений:  
  const portraitImg = document.getElementsByClassName('a-lightbox__images');
  //let portrait = 'portrait';
  for (let i = 0; i < portraitImg.length; i++) {
  //console.log(`${sizeImg[i].naturalWidth} x ${sizeImg[i].naturalHeight}`); // фактический размер 
                                                                             // изображения
                                                                                   
  //console.log(`${sizeImg[i].width} x ${sizeImg[i].height}`); // отображает размер <img> элемента  
          
    function recalculation() {        
      const slides = document.getElementsByClassName('a-lightbox__modal')[0]; 
      const sizeLayer = document.getElementById('modal-layer'); 
      let heightLayer = sizeLayer.offsetHeight;                                      
      let widthLayer = sizeLayer.offsetWidth;
      let heightGallery = slides.offsetHeight;  
      let widthGallery = slides.offsetWidth;
  
      // centering algorithm:
      let differenceLayerGallery = heightLayer - heightGallery;
      let remainder = differenceLayerGallery / 2;
      slides.style.top = remainder + "px";                        
    }   
    
    
    // TODO - variant-slider-0
    if (widthLayer < heightLayer && portraitImg[i].height > portraitImg[i].width) { 
                   
      portraitImg[i].style.width = 'calc(100%)';  
      portraitImg[i].style.margin = 'auto';           
      //console.log('if'); 
      //console.log(portraitImg[i].height);
      //console.log(heightGallery );  
                                   
    } else if (portraitImg[i].height > portraitImg[i].width && widthLayer > heightLayer) {
                                                   
      portraitImg[i].style.width = 'calc(45% - 7px)'; 
      portraitImg[i].style.margin = 'auto';           
      //console.log('else if');      
                  
    } // else if
    //
    
      
  addEventListener("resize", recalculation);
      
  } // for
  
  //    

} // lightboxCentering end

// Отслеживание изменения ориентации экрана:
//const emuleLoad = document.getElementById('load');
//const loadingIcon = document.getElementById('loading-icon');

// Window: resize event (https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event#event_type),
// https://developer.mozilla.org/ru/docs/Web/API/Window/resize_event - Last modified: 07 november 2022:
/*
// TODO - syntax variant
window.onresize = function () {
  setTimeout(lightboxCentering, 1500);
  const emuleLoad = document.getElementById('load');    
  galleryLayer.style.visibility = 'hidden';
  emuleLoad.classList.add('emule-load');
  loadingIcon.style.display = 'block';
}
*/
/* TODO - syntax variant
addEventListener("resize", function () {
  setTimeout(lightboxCentering, 1500);
  const emuleLoad = document.getElementById('load');    
  galleryLayer.style.visibility = 'hidden';
  emuleLoad.classList.add('emule-load');
  loadingIcon.style.display = 'block';
});
*/

//

/*
let thj = window.matchMedia('(orientation: landscape)');
console.log(thj);
*/
/* TODO - Deprecated!
const around = 
  addEventListener("orientationchange", function () {
    //lightboxCentering();
    setTimeout(lightboxCentering, 1500);
    const emuleLoad = document.getElementById('load');    
    galleryLayer.style.visibility = 'hidden';
    emuleLoad.classList.add('emule-load');
    loadingIcon.style.display = 'block';
  });
  
//
*/

////////////////////////////////////////////////

})(); // immediately invoked functions

} // if (moduleLightboxA !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}


} // export




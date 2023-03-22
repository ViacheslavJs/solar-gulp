'use strict'

import * as vjsFunctions from "./modules/functions.js"
vjsFunctions.isWebp();

import { scrolling } from "./modules/scrolling.js";
scrolling();

import { iconsControl } from "./modules/icons-control.js";
iconsControl();

import { lightboxSliderB } from "./modules/lightbox-b.js";
lightboxSliderB();

/////////////////////////////////////////////

// TODO - menu show/hidden
const iconMenu = document.querySelector('.menu-icon');

iconMenu.addEventListener('click', showMenu);
function showMenu() {
  iconMenu.classList.toggle('fa-times');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu-mobile'); 
    
  // TODO - optional - hide menu when clicked anywhere
  document.addEventListener('click', (event) => {
    const classIs = event.target.classList.contains('blind-click');
    //console.log(classIs);
    const clickedClass = event.target.className;
    //console.log(clickedClass); 
    if (classIs == false) {
      iconMenu.classList.remove('fa-times');
      menu.classList.remove('menu-mobile');      
    }
  });  
    
}    

/////////////////////////////////////////////

try {

  const moduleContacts = document.getElementById('contacts'); 
  //console.log(moduleContacts);
  if (moduleContacts !== null) {

/////////////////////////////////////////////////////////
let formCancel = document.getElementsByClassName("form__body")[0];
//let filePreviewReset = document.getElementsByClassName("file__preview")[0];

/*
// TODO - кнопка очистки формы:
let formButtonCancel = document.getElementsByClassName("form-button-cancel")[0];
formButtonCancel.addEventListener('click', buttonCancel);

function buttonCancel() {  
  formCancel.reset(); 
  //filePreviewReset.innerHTML = "";
}

*/
//
// скрипт для формы - валидация, отправка:

// стандартная проверка что документ уже загружен:
document.addEventListener("DOMContentLoaded", function () { 

/////////////////////////////////////////////////////
// TODO мой код - очистка формы при перезагрузке документа:

   formCancel.reset(); 
   //filePreviewReset.innerHTML = "";
   
/////////////////////////////////////////////////////

   // перехватываем отправку формы по нажатию кнопки:
   const form = document.getElementById("form"); // присваиваем весь объект форм в переменную
   
   form.addEventListener("submit", formSend); // вешаем событие на переменную - при отправке формы скрипт 
                                              // перейдёт в функцию formSend:
  
  
   // TODO - optional - tooltips:
   const inputName = document.getElementById('formName');
   const inputEmail = document.getElementById('formEmail');
   const tooltipName = document.getElementsByClassName('form__tooltip-text')[0];
   const tooltipEmail = document.getElementsByClassName('form__tooltip-text')[1];
        
   inputName.addEventListener("focus", function() {
     tooltipName.style.visibility = 'hidden';
   }, true);

   inputEmail.addEventListener("focus", function() {
     tooltipEmail.style.visibility = 'hidden';
   }, true);
   //
  
   async function formSend(e) {
      e.preventDefault(); // запрещаем стандартную отправку формы по нажатию - всё будет происходить в JS:
   
      // простая валидация формы:
      let error = formValidate(form); // переменная для результата работы formValidate
      
      let formData = new FormData(form); // эта строка вытягивает все данные полей
      //formData.append("image", formImage.files[0]); // добавляем в эту переменную файл, полученный в функ. uploadFile
      
      // если error равен 0 - форма прошла валидацию
      // отправка с помощью ajax(а именно fetch):
      if (error === 0) {
      	form.classList.add("_sending"); // добавляем класс
      	      	   	    	
      	//formButtonCancel.classList.add("hidden-cancel"); // TODO моя строка - скрываем кнопку "отмена" 
      	
         let response = await fetch( "sendmail.php", {
            method: "POST",
         	body: formData
         });
         // получаем ответ (в виде json) успешна ли отправка, и если да, то:
         if (response.ok) {
          	let result = await response.json();
          	alert(result.message); // ...выводим сообщение
          	formPreview.innerHTML = ""; // ...очищаем div с файлом
          	form.reset(); // ...очищаем поля формы
          	form.classList.remove("_sending"); 
         } else {
         	alert("Ошибка!");
         	form.classList.remove("_sending"); 
         	         	        	   	
         	//formButtonCancel.classList.remove("hidden-cancel"); // TODO моя строка - показываем кнопку "отмена"      
         	
         }
      } else {
      	//alert("Заполните обязательные поля!");
      	const isErrorName = inputName.classList.contains('_error');
      	const isErrorEmail = inputEmail.classList.contains('_error');
      	//console.log(isErrorName);
      	//console.log(isErrorEmail);
      	if ( isErrorName === true ) {     	
      	  tooltipName.style.visibility = 'visible';
      	}
      	if ( isErrorEmail === true ) {
      	  tooltipEmail.style.visibility = 'visible';
        }
      }
   }
   
   function formValidate(form) {
   	let error = 0;
   	let formReq = document.querySelectorAll("._req"); // присваиваем сюда все объекты с классом ._req
   	
   	for (let index = 0; index < formReq.length; index++) {
   		const input = formReq[index];
   		formRemoveError(input);
   		
   		if ( input.classList.contains("_email") ) {
   			if ( emailTest(input) ) {
   				formAddError(input);
   				error++;
   			}
   		} else if ( input.getAttribute("type") === "checkbox" && input.checked === false ) {
   			formAddError(input);
   				error++;
   		} else {
   			if (input.value === "") {
   				formAddError(input);
   				error++;
   			}
   		}
   	}
   	return error;
   }
   
   function formAddError(input) {
   	input.parentElement.classList.add("_error");
   	input.classList.add("_error");
   }
   
   function formRemoveError(input) {
   	input.parentElement.classList.remove("_error");
   	input.classList.remove("_error");
   }
   
   function emailTest(input) {
   	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }
   
   // TODO - optional:
   const checkboxLabel = document.querySelector('.checkbox__label');
   const checkbox = document.querySelector('.checkbox');
   const btn = document.querySelector('.form__button');
   
   checkboxLabel.addEventListener('click', () => {
     
     btn.classList.toggle('form__button--inactive');
     if ( btn.classList.contains('form__button--inactive') ) {
     btn.disabled = true;
     checkbox.classList.add('_error');
     
     } else {
       btn.disabled = false;
       checkbox.classList.remove('_error');
     }
     
   });  
   
   /*
   // получаем инпут file в переменную:
   const formImage = document.getElementById("formImage");
   // получаем див для превью в переменную:
   const formPreview = document.getElementById("formPreview");
   
   // слушаем изменения в инпуте file:
   formImage.addEventListener("change", () => {
   	uploadFile( formImage.files[0] ); // в данном случае файл у нас один
   });
   
   function uploadFile(file) {
   	// проверяем тип файла:
   	if ( !["image/jpeg", "image/png", "image/gif"].includes(file.type) ) {
   		alert("Разрешены только изображения!");
   		formImage.value = "";
   		return;
   	}
   	// проверяем размер файла (<2 Мб)
   	if (file.size > 2 * 1024 * 1024) {
   		alert("Файл должен быть менее 2 Мб!");
   		return;
   	}
      
      var reader = new FileReader();
      reader.onload = function (e) {
      	formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
      };
      reader.onerror = function (e) {
      	alert("Ошибка!");
      };
   	reader.readAsDataURL(file);
   }
   //
   */
      
}); 


} // if (moduleContacts !== null)

} // try

catch(err) {
  //console.log(err.name, err.message);
}





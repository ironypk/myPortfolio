// ;(function(){
//     let myForm = document.querySelector('.form');
//     let submitForm = document.querySelector('.form__button');
//     let error = document.querySelectorAll('.error');
//     let formOverlay = document.querySelector(".form__overlay");
//     let formOverlayBtn = document.querySelector(".form__overlay_button");
    
//     function modalOff() {
//       formOverlay.style.display = "none";
//       document.body.classList.remove("locked");
//     }
    
//     document.addEventListener("keyup", e => {
//       if (e.key === "Escape") {
//         modalOff();
//       }
//     });
    
//     formOverlayBtn.addEventListener("click", e => {
//       modalOff();
//     });
    

//     submitForm.addEventListener('click', function(e){
//         e.preventDefault();

//         if (validateForm(myForm)) {
//             let formData = new FormData();

//             formData.append("name", "Константин");
//             formData.append("phone", "89246866955");
//             formData.append("comment", "Привет LoftSchool");
//             formData.append("to", "irony11192@mail.ru");
        
//             // formData.append('name', myForm.elements.name.value);
//             // formData.append('telephone', myForm.elements.email.value);
//             // formData.append('street', myForm.elements.textarea.value);


//             let xhr = new XMLHttpRequest();
//             xhr.responseType = "json";
//             xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
//             xhr.send(formData);
//             xhr.addEventListener("load", () => {
//               if (xhr.response.status == 1) {
//                 formOverlay.style.display = "block";
//                 document.body.classList.add("locked");
//                 myForm.reset();
//               } else if (xhr.response.status == 0) {
//                 alert(xhr.response.message);
//               } else {
//                 alert("Неудача");
//               }
//             });
//         }
    
//     });


//     function validateForm(form) {
//         let valid = true;
      
//         if (!validateField(form.elements.name)) {
//           valid = false;
//         }
      
//         if (!validateField(form.elements.email)) {
//           valid = false;
//         }
//         if (!validateField(form.elements.textarea)) {
//           valid = false;
//         }
        
//         return valid;
//       }
      
//       function validateField(field) {
//         field.parentElement.nextElementSibling.textContent = field.validationMessage;
//         return field.checkValidity();
//       }


// })()
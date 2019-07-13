;(function(){
    //////////////FIXED- NAVBAR
    //Нажатие на бургер
    let popup = document.querySelector(".popup");
    let hamburger = document.querySelector(".hamburger-menu-link");
    
    popup.addEventListener('wheel', ()=>{
      return false;
    });
    
    hamburger.addEventListener("click", function(e) {
      e.preventDefault();
      popup.style.display = "block";
      document.body.classList.add("locked");
    });
    
    //Нажатие на бургер close and esc
    
    let menuClose = document.querySelector(".popup__btn_close");
    
    menuClose.addEventListener("click", function() {
      popup.style.display = "none";
      document.body.classList.remove("locked");
    });
    
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        popup.style.display = "none";
        document.body.classList.remove("locked");
      }
    });
    
    //Нажатие на ссылки nav-fixed
    
    let popupItem = document.querySelectorAll(".menu__item--popup"),
    popupItemLength = popupItem.length;
    
    for (let i = 0; i < popupItemLength; i++) {
      popupItem[i].addEventListener("click", function(e) {
        popup.style.display = "none";
        document.body.classList.remove("locked");
      });
    }
    })()
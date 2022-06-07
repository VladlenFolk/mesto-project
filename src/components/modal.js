const popups = document.querySelectorAll(".popup");

//Функция закрытия попапа по клику вне модального окна
function closePopupOnOverlay(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup();
  }
}

//функция закрыития попапа профиль по нажатию на кнопку escape
function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

//проверяем открыт ли попап
function isPopupOpened() {
  popups.forEach((el) => {
    if (el.classList.contains("popup_opened")) {
      el.classList.remove("popup_opened");
      document.removeEventListener("keydown", closePopupOnEsc);
      document.removeEventListener("click", closePopupOnOverlay);
    }
  });
}

//универсальные функции открытия/закрытия попапа
export function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
  document.addEventListener("click", closePopupOnOverlay);
}

export function closePopup() {
  isPopupOpened();
}



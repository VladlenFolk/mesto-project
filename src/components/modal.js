//переменные попапа профиль
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

//универсальные функции открытия/закрытия попапа
export function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
  document.addEventListener("click", closePopupOnOverlay);
}

//функция закрытия попапа
export function closePopup() {
  popups.forEach((el) => {
    if (el.classList.contains("popup_opened")) {
      el.classList.remove("popup_opened");
      document.removeEventListener("keydown", closePopupOnEsc);
      document.removeEventListener("click", closePopupOnOverlay);
    }
  });
}
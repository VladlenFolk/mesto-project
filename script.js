// Закрытие поп-апа редактирования профиля
const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const popUp = document.querySelector(".popup");
const closeButton = popUp.querySelector(".popup__close-button");
function openClosePopUp() {
  popUp.classList.toggle("popup_opened");
}
editButton.addEventListener("click", openClosePopUp);
closeButton.addEventListener("click", openClosePopUp);

// Добавление/изменение информации профиля
const nameInput = popUp.querySelector(".popup__item_el_name");
const jobInput = popUp.querySelector(".popup__item_el_job");
function formSubmitHandler(evt) {
  evt.preventDefault();
  const valueName = nameInput.value;
  const valueJob = jobInput.value;
  const profileName = document.querySelector(".profile__name");
  const profileJob = document.querySelector(".profile__description");
  profileName.textContent = valueName;
  profileJob.textContent = valueJob;
  openClosePopUp();
}
popUp.addEventListener("submit", formSubmitHandler);

// Закрытие поп-апа место
const addButton = profile.querySelector(".profile__add-button");
const popUpPlace = document.querySelector(".popup-place");
const closeButtonPlace = popUpPlace.querySelector(".popup-place__close-button");
function openClosePopUpPlace() {
  popUpPlace.classList.toggle("popup-place_opened");
}
addButton.addEventListener("click", openClosePopUpPlace);
closeButtonPlace.addEventListener("click", openClosePopUpPlace);

//Добавления массива с названием и картинкой карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];
  //Добавляем елементы карточек
  let listItem = document.createElement('li');
  
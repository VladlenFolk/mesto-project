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
function formSubmitHandler(evt) {
  evt.preventDefault();
  const valueName = popUp.querySelector(".popup__item_el_name").value;
  const valueJob = popUp.querySelector(".popup__item_el_job").value;
  document.querySelector(".profile__name").textContent = valueName;
  document.querySelector(".profile__description").textContent = valueJob;
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
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
//Добавляем елементы карточек
const blockTemplate = document.querySelector("#block").content;
function defaultCards() {
  initialCards.forEach(function (el) {
    let blockElement = blockTemplate.querySelector("li").cloneNode(true);
    blockElement.querySelector(".block__place-image").src = el.link;
    blockElement.querySelector(".block__place-image").alt = el.name;
    blockElement.querySelector(".block__place-name").textContent = el.name;
    let blockList = document.querySelector(".block__list");
    blockList.append(blockElement);
    //добавил кнопку лайк
    blockElement
      .querySelector(".block__place-like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("block__place-like_active");
      });
    //кнопка удаления карточки
    const trashElement = blockElement.querySelector(".block__trash");
    trashElement.addEventListener("click", function () {
      const deleteTrashElement = trashElement.closest("li");
      deleteTrashElement.remove();
    });
  });
}
defaultCards();
// Добавление/изменение информации карточки место
function formSubmitPlace(evt) {
  evt.preventDefault();
  const valuePlace = popUpPlace.querySelector(".popup__item_el_place").value;
  const valueLink = popUpPlace.querySelector(
    ".popup-place__item_el_link"
  ).value;
  let blockElement = blockTemplate.querySelector("li").cloneNode(true);
  let blockList = document.querySelector(".block__list");
  blockElement.querySelector(".block__place-image").src = valueLink;
  blockElement.querySelector(".block__place-image").alt = valuePlace;
  blockElement.querySelector(".block__place-name").textContent = valuePlace;
  blockList.prepend(blockElement);
  //добавил кнопку лайк
  blockElement
    .querySelector(".block__place-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("block__place-like_active");
    });

  //кнопка удаления карточки
  const trashElement = blockElement.querySelector(".block__trash");
  trashElement.addEventListener("click", function () {
    const deleteTrashElement = trashElement.closest("li");
    deleteTrashElement.remove();
  });
}
popUpPlace.addEventListener("submit", formSubmitPlace);
//кнопка закрытия попапа с картинкой
const popUpImage = document.querySelector(".popup-image");
const popUpImageOpen = popUpImage.querySelector(".popup-image__picture");
const popUpImageDescription = popUpImage.querySelector(
  ".popup-image__description"
);
const popUpImageCloseButton = popUpImage.querySelector(".popup-image__button");
function openClosePopUpImage() {
  popUpImage.classList.toggle("popup-image_opened");
}
popUpImageCloseButton.addEventListener("click", openClosePopUpImage);
//Функция вызова попапа с картинкой
let images = document.querySelectorAll('.block__place-image');
function selectImage (event) {
  popUpImageOpen.src = event.target.src;
  popUpImageOpen.alt = event.target.alt;
  popUpImageDescription.textContent = event.target.alt;
  popUpImage.classList.toggle("popup-image_opened");
}
images.forEach(images => {
  images.addEventListener('click', selectImage);
});
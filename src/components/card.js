import { openPopup, closePopup } from "./modal";
//Переменные template и места добавления карточек
const popUpPlace = document.querySelector(".popup_value_place");
const blockTemplate = document.querySelector("#block").content;

const blockList = document.querySelector(".block__list");

//переменные для попапа с картинкой
const popUpImage = document.querySelector(".popup_value_image");
const popUpImageOpen = popUpImage.querySelector(".popup__picture");

const popUpImageDescription = popUpImage.querySelector(".popup__description");

//Добавления массива с названием и картинкой карточки
export const initialCards = [
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

// Функция добавления лайка
function addLike(evt) {
  evt.target.classList.toggle("block__place-like_active");
}

// Функция удаления карточки
function deleteCard(item) {
  const trashElement = item.querySelector(".block__trash").closest(".list");
  trashElement.remove();
}

//Функция добавления попапа с картинкой
function openImg(name, link) {
  const imgDescription = popUpImageDescription;
  const imgLink = popUpImageOpen;
  imgDescription.textContent = name;
  imgLink.src = link;
  imgLink.alt = name;
  openPopup(popUpImage);
}

//Функция создания карточки
function createCard(name, link) {
  const cardElement = blockTemplate.querySelector(".list").cloneNode(true);
  const blockElementImage = cardElement.querySelector(".block__place-image");
  blockElementImage.src = link;
  blockElementImage.alt = name;
  cardElement.querySelector(".block__place-name").textContent = name;
  //обработчик кнопки лайк
  cardElement
    .querySelector(".block__place-like")
    .addEventListener("click", addLike);
  //Обработчик удаления карточки
  const trashButton = cardElement.querySelector(".block__trash");
  trashButton.addEventListener("click", () => {
    deleteCard(cardElement);
  });
  //обработчик попапа с картинкой
  blockElementImage.addEventListener("click", () => {
    openImg(name, link);
  });
  return cardElement;
}

//Функция для добавления карточек в начало
export function renderCard(name, link) {
  blockList.prepend(createCard(name, link));
}

//Функция добавления новой картинки из данных формы
export function addNewCard(evt) {
  evt.preventDefault();
  const valuePlace = popUpPlace.querySelector(".popup__item_el_place");
  const valueLink = popUpPlace.querySelector(".popup__item_el_link");
  renderCard(valuePlace.value, valueLink.value);
  closePopup();
}

import "../pages/index.css";
import {enableValidation, disableValidation} from "./validate";
import { openPopup, closePopup } from "./modal";
import { renderCard, initialCards,addNewCard } from "./card";

//переменные попапа профиль
const profile = document.querySelector(".profile");
const openProfileButton = profile.querySelector(".profile__edit-button");
const popUpProfile = document.querySelector(".popup_value_profile");
const valueName = popUpProfile.querySelector(".popup__item_el_name");
const valueJob = popUpProfile.querySelector(".popup__item_el_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

//переменные попапа место
const popUpPlace = document.querySelector(".popup_value_place");
const popUpImage = document.querySelector(".popup_value_image");
const formPlace = popUpPlace.querySelector(".popup__form_type_place");
const popUpImageCloseButton = popUpImage.querySelector(".popup__close-button");

//Кнопки открытия и закрытия
const closeProfileButton = popUpProfile.querySelector(".popup__close-button");
const closeButtonPlace = popUpPlace.querySelector(".popup__close-button");
const openButtonPlace = profile.querySelector(".profile__add-button");

//переменная/объект для настройки валидации
const validationConfiguration = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__item_type_error",
  errorClass: "popup__input-error_active",
};

//попап аватар
const popUpAvatar = document.querySelector(".popup_value_avatar");
const popUpAvatarOpen = profile.querySelector(".profile__avatar-hover");
const popUpAvatarClose = popUpAvatar.querySelector(".popup__close-button");
const avatar = profile.querySelector(".profile__avatar");


//работаем с попапом профиль
// Добавление/изменение информации профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = valueName.value;
  profileJob.textContent = valueJob.value;
  closePopup();
}

//Функци открытия профиля и заполнения инпутов содержимым
function editProfile() {
  valueName.value = profileName.textContent;
  valueJob.value = profileJob.textContent;
  disableValidation(popUpProfile, validationConfiguration);
  openPopup(popUpProfile);
}

//Закрытие/открытие попапа профиль и добавление информации из данных формы
openProfileButton.addEventListener("click", editProfile);
closeProfileButton.addEventListener("click", () => {
  closePopup();
});
popUpProfile.addEventListener("submit", handleProfileFormSubmit);


//Работаем с попапом место
//Добавляем карточки на страницу из данных массива
initialCards.forEach(function (item) {
  const name = item.name;
  const link = item.link;
  renderCard(name, link);
});

// Закрытие/открытие попапа место и добавление карточки из данных формы
openButtonPlace.addEventListener("click", () => {
  formPlace.reset(); //очищаем форму при каждом открытии
  disableValidation(popUpPlace,  validationConfiguration);
  openPopup(popUpPlace);
});
closeButtonPlace.addEventListener("click", () => {
  closePopup();
});
popUpPlace.addEventListener("submit", addNewCard);

//Кнопка закрытия попапа с картинкой
popUpImageCloseButton.addEventListener("click", () => {
  closePopup();
});


//Работаем с попапом аватар
//функция получения картинки из значения инпута (url)
function createAvatar(link) {
 avatar.src = link;
}

//функция изменения аватара из данных формы
function addNewAvatar(evt) {
  evt.preventDefault();
  const valueAvatar = popUpAvatar.querySelector('.popup__item_el_avatar');
  createAvatar(valueAvatar.value);
  closePopup();
}

//открываем/попап аватар и меняем аватар по url
popUpAvatarOpen.addEventListener("click", () => {
  const formAvatar = popUpAvatar.querySelector(".popup__form");
  formAvatar.reset();
  disableValidation(popUpAvatar, validationConfiguration)
  openPopup(popUpAvatar);
});
popUpAvatarClose.addEventListener("click", () => {
  closePopup();
});
popUpAvatar.addEventListener('submit', addNewAvatar);



//включаем валидацию на странице
enableValidation(validationConfiguration);
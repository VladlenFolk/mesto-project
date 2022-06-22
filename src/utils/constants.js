//переменные попапа профиль
const profile = document.querySelector(".profile");
const popUpProfile = document.querySelector(".popup_value_profile");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const valueProfileName = popUpProfile.querySelector(".popup__item_el_name");
const valueProfileJob = popUpProfile.querySelector(".popup__item_el_job");
const profileSaveBtn = popUpProfile.querySelector(".popup__save-button");

//Переменные template и места добавления карточек
const popUpPlace = document.querySelector(".popup_value_place");
const formPlace = popUpPlace.querySelector(".popup__form_type_place");
const btnPlace = popUpPlace.querySelector(".popup__save-button");
const valuePlace = popUpPlace.querySelector(".popup__item_el_place");
const valueLink = popUpPlace.querySelector(".popup__item_el_link");

//Кнопки открытия и закрытия
const openProfileButton = profile.querySelector(".profile__edit-button");
const openButtonPlace = profile.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll('.popup__close-button');

//переменные для попапа с картинкой
const popUpImage = document.querySelector(".popup_value_image");
const popUpImageCloseButton = popUpImage.querySelector(".popup__close-button");

//попап  аватар
const popUpAvatar = document.querySelector(".popup_value_avatar");
const popUpAvatarOpen = profile.querySelector(".profile__avatar-hover");
const valueAvatar = popUpAvatar.querySelector(".popup__item_el_avatar");
const formAvatar = popUpAvatar.querySelector(".popup__form");
const avatar = profile.querySelector(".profile__avatar");
const avatarSaveBtn = popUpAvatar.querySelector(".popup__save-button");

//объект конфигурации для валидации
const validationConfiguration = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__item_type_error",
  errorClass: "popup__input-error_active",
};

export{validationConfiguration}

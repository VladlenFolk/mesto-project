import "../pages/index.css";
import { enableValidation, disableValidation } from "./validate.js";
import { openPopup, closePopup } from "./modal";
import { addCardToStart, createNewCards } from "./card";
import {
  getUserData,
  getInitialCards,
  changeUserInfo,
  changeAvatar,
  createNewCard,
} from "./api";

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
let userId;

//объект конфигурации для валидации
export const validationConfiguration = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__item_type_error",
  errorClass: "popup__input-error_active",
};

//Создаем промис для отрисовки страницы
Promise.all([getInitialCards(), getUserData()])
  .then(([cards, userData]) => {
    cards.forEach((card) => {
      addCardToStart(createNewCards(card, userData));
      editUserData(userData.name, userData.about, userData.avatar);
      userId = userData;
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Слушатель на кнопки закрытия попапов
closeButtons.forEach((button) => {
  button.addEventListener('click', () => closePopup());
});

//функция добавления новой карточки
function addNewCard(evt) {
  evt.preventDefault();
  btnPlace.textContent = "Добавление...";
  const cardItem = {
    name: valuePlace.value,
    link: valueLink.value,
  };
  createNewCard(cardItem)
    .then((res) => {
      addCardToStart(createNewCards(res, userId));
      formPlace.reset();
      closePopup();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      btnPlace.textContent = "Добавить";
    });
}

//Работаем с профилем
//функция добавления данных профиля
function editUserData(userName, userJob, userAvatar) {
  profileName.textContent = userName;
  profileJob.textContent = userJob;
  avatar.src = userAvatar;
}

// функция отправки данных формы профиля
function editSubmitForm(event) {
  event.preventDefault();
  profileSaveBtn.textContent = "Сохранение...";
  const userData = {
    name: valueProfileName.value,
    about: valueProfileJob.value,
  };
  changeUserInfo(userData)
    .then((res) => {
      editUserData(res.name, res.about, res.avatar);
      closePopup();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      profileSaveBtn.textContent = "Сохранить";
    });
}

//Открытие профиля и заполнение инпутов содержимым
function editProfile() {
  valueProfileName.value = profileName.textContent;
  valueProfileJob.value = profileJob.textContent;
  disableValidation(popUpProfile ,validationConfiguration);
  openPopup(popUpProfile, validationConfiguration);
}

//Слушатели открытия и отправки попапа профиля
openProfileButton.addEventListener("click", editProfile);
popUpProfile.addEventListener("submit", editSubmitForm);

//функция отправки аватара на сервер
function changeAvatarEdit(evt) {
  evt.preventDefault();
  avatarSaveBtn.textContent = "Сохрание...";
  changeAvatar(valueAvatar.value)
    .then((res) => {
      avatar.src = res.avatar;
      formAvatar.reset();
      closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarSaveBtn.textContent = "Сохранить";
    });
}

//Открытие и отправка формы с аватаром
popUpAvatarOpen.addEventListener("click", () => {
  formAvatar.reset();
  disableValidation(popUpAvatar, validationConfiguration);
  openPopup(popUpAvatar, validationConfiguration);
});
popUpAvatar.addEventListener("submit", changeAvatarEdit);

// Слушатель открытия и отправки попапа место
openButtonPlace.addEventListener("click", () => {
  formPlace.reset(); //очищаем форму при каждом открытии
  disableValidation(popUpPlace, validationConfiguration);
  openPopup(popUpPlace, validationConfiguration);
});
popUpPlace.addEventListener("submit", addNewCard);

//Слушатель кнопки закрытия попапа с картинкой
popUpImageCloseButton.addEventListener("click", () => {
  closePopup();
});

//включаем валидацию
enableValidation(validationConfiguration);
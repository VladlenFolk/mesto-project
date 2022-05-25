//переменные попапа профиль
const profile = document.querySelector(".profile");
const openProfileButton = profile.querySelector(".profile__edit-button");
const popUpProfile = document.querySelector(".popup_value_profile");
const valueName = popUpProfile.querySelector(".popup__item_el_name");
const valueJob = popUpProfile.querySelector(".popup__item_el_job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const valueProfileName = popUpProfile.querySelector(".popup__item_el_name");
const valueProfileJob = popUpProfile.querySelector(".popup__item_el_job");
//Переменные template и места добавления карточек
const popUpPlace = document.querySelector(".popup_value_place");
const formPlace = popUpPlace.querySelector(".popup__form_type_place");
const blockTemplate = document.querySelector("#block").content;
const blockList = document.querySelector(".block__list");
const valuePlace = popUpPlace.querySelector(".popup__item_el_place");
const valueLink = popUpPlace.querySelector(".popup__item_el_link");

//Кнопки открытия и закрытия
const closeProfileButton = popUpProfile.querySelector(".popup__close-button");
const closeButtonPlace = popUpPlace.querySelector(".popup__close-button");
const openButtonPlace = profile.querySelector(".profile__add-button");

//переменные для попапа с картинкой
const popUpImage = document.querySelector(".popup_value_image");
const popUpImageOpen = popUpImage.querySelector(".popup__picture");
const popUpImageCloseButton = popUpImage.querySelector(".popup__close-button");
const popUpImageDescription = popUpImage.querySelector(".popup__description");

//все попапы
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
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
  document.addEventListener("click", closePopupOnOverlay);
}

function closePopup() {
  popups.forEach((el) => {
    if (el.classList.contains("popup_opened")) {
      el.classList.remove("popup_opened");
      document.removeEventListener("keydown", closePopupOnEsc);
      document.removeEventListener("click", closePopupOnOverlay);
    }
  });
}

//работаем с попапом профиль
// Добавление/изменение информации профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = valueName.value;
  profileJob.textContent = valueJob.value;
  closePopup();
}
closeProfileButton.addEventListener("click", () => {
  closePopup();
});
popUpProfile.addEventListener("submit", handleProfileFormSubmit);

//Открытие профиля и заполнение инпутов содержимым
function editProfile() {
  openPopup(popUpProfile);
  valueProfileName.value = profileName.textContent;
  valueProfileJob.value = profileJob.textContent;
}
openProfileButton.addEventListener("click", editProfile);

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
function renderCard(name, link) {
  blockList.prepend(createCard(name, link));
}

//Функция для добавления карточек на страницу из данных массива
initialCards.forEach(function (item) {
  const name = item.name;
  const link = item.link;
  renderCard(name, link);
});

//Функция добавления новой картинки из данных формы
function addNewCard(evt) {
  evt.preventDefault();
  renderCard(valuePlace.value, valueLink.value);
  closePopup();
}

// Закрытие/открытие попапа место
openButtonPlace.addEventListener("click", () => {
  openPopup(popUpPlace);
  formPlace.reset(); //очищаем форму при каждом открытии
});

closeButtonPlace.addEventListener("click", () => {
  closePopup();
});

//Обработчик отправки формы место
popUpPlace.addEventListener("submit", addNewCard);

//Кнопка закрытия попапа с картинкой
popUpImageCloseButton.addEventListener("click", () => {
  closePopup();
});

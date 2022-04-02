//переменные попапов, а также кнопок их открытия и закрытия
const profile = document.querySelector(".profile");
const openProfileButton = profile.querySelector(".profile__edit-button");
const popUpProfile = document.querySelector(".popup_value_profile");
const closeProfileButton = popUpProfile.querySelector(".popup__close-button");
const popUpPlace = document.querySelector(".popup_value_place");
const closeButtonPlace = popUpPlace.querySelector(".popup__close-button");
const openButtonPlace = profile.querySelector(".profile__add-button");
//переменные для попапа с картинкой
const popUpImage = document.querySelector(".popup_value_image");
const popUpImageOpen = popUpImage.querySelector(".popup__picture");
const popUpImageCloseButton = popUpImage.querySelector(".popup__close-button");
const popUpImageDescription = popUpImage.querySelector(".popup__description");
//универсальные функции открытия/закрытия попапа
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
}

function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
}
//работаем с попапом профиль
// Добавление/изменение информации профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const valueName = popUpProfile.querySelector(".popup__item_el_name").value;
  const valueJob = popUpProfile.querySelector(".popup__item_el_job").value;
  document.querySelector(".profile__name").textContent = valueName;
  document.querySelector(".profile__description").textContent = valueJob;
  closePopup(popUpProfile);
}
closeProfileButton.addEventListener("click", () => {
  closePopup(popUpProfile);
});
popUpProfile.addEventListener("submit", handleProfileFormSubmit);
//Открытие профиля и заполнение инпутов содержимым
const valueProfileName = popUpProfile.querySelector(".popup__item_el_name");
const valueProfileJob = popUpProfile.querySelector(".popup__item_el_job");
const profileName = profile.querySelector(".profile__name");
const profileJob = profile.querySelector(".profile__description");
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
//Добавляем елементы карточек
const blockTemplate = document.querySelector("#block").content;
function addCards() {
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
    //обработчик попапа с картинкой
    let images = document.querySelectorAll(".block__place-image");
    function selectImage(event) {
      popUpImageOpen.src = event.target.src;
      popUpImageOpen.alt = event.target.alt;
      popUpImageDescription.textContent = event.target.alt;
      openPopup(popUpImage);
    }
    images.forEach((images) => {
      images.addEventListener("click", selectImage);
    });
  });
}
addCards();
//работаем с попапом место
// Добавление/изменение информации карточки место
function createCard(evt) {
  evt.preventDefault();
  const valuePlace = popUpPlace.querySelector(".popup__item_el_place").value;
  const valueLink = popUpPlace.querySelector(".popup__item_el_link").value;
  const blockElement = blockTemplate.querySelector("li").cloneNode(true);
  const blockList = document.querySelector(".block__list");
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
  //обработчик попапа с картинкой
  let images = document.querySelectorAll(".block__place-image");
  function selectImage(event) {
    popUpImageOpen.src = event.target.src;
    popUpImageOpen.alt = event.target.alt;
    popUpImageDescription.textContent = event.target.alt;
    openPopup(popUpImage);
  }
  images.forEach((images) => {
    images.addEventListener("click", selectImage);
  });
}
// Закрытие/открытие попапа место
openButtonPlace.addEventListener("click", () => {
  openPopup(popUpPlace);
});
closeButtonPlace.addEventListener("click", () => {
  closePopup(popUpPlace);
});
popUpPlace.addEventListener("submit", createCard);
//кнопка закрытия попапа с картинкой
popUpImageCloseButton.addEventListener("click", () => {
  closePopup(popUpImage);
});
import { disableValidation } from "./validate";
import { validationConfiguration } from "./index.js";
import { openPopup } from "./modal";
import { setLike, deleteLike, deleteCard } from "./api";
import Api from "./ApiT";

//Переменные template и места добавления карточек
const blockTemplate = document.querySelector("#block").content;

//переменные для попапа с картинкой
const popUpImage = document.querySelector(".popup_value_image");
const popUpImageOpen = popUpImage.querySelector(".popup__picture");
const popUpImageDescription = popUpImage.querySelector(".popup__description");
const blockList = document.querySelector(".block__list");

//функция добавления карточки в начало
export function addCardToStart(card) {
  blockList.prepend(card);
}

export function createNewCards(card, userData) {
  const cardElement = blockTemplate.querySelector(".list").cloneNode(true);
  const blockElementImage = cardElement.querySelector(".block__place-image");
  const trashButton = cardElement.querySelector(".block__trash");
  const likesQuantity = cardElement.querySelector(
    ".block__place-likes-quantity"
  );
  const btnLike = cardElement.querySelector(".block__place-like");
  blockElementImage.src = card.link;
  blockElementImage.alt = card.name;
  cardElement.querySelector(".block__place-name").textContent = card.name;
  whoOwnerCard(trashButton, card, userData);
  //добавляем счетчик лайков на новую карточку и если мы лайкали карточку при загрузке будет лайк
  if (card.likes.length > 0) {
    likesQuantity.textContent = card.likes.length;
  }
  if (card.likes.some((elem) => elem._id === userData._id)) {
    btnLike.classList.add("block__place-like_active");
  }
  // устанавливаеv id для взаимодействия
  cardElement.setAttribute("data-id", card._id);
  // слушатели на различные элементы карточки
  btnLike.addEventListener("click", (evt) =>
    haveLikes(evt, card, likesQuantity)
  );
  trashButton.addEventListener("click", (evt) => deleteCards(evt));
  blockElementImage.addEventListener("click", () => openImg(card));
  return cardElement;
}

//Проверяем кто владелец
function whoOwnerCard(btnDelete, card, userData) {
  if (card.owner._id !== userData._id) {
    btnDelete.classList.add("block__trash_hidden");
  }
}

//Функция проверки лайка
function haveLikes(evt, card, likesAmount) {
  const cardId = card._id;
  if (evt.target.classList.contains("block__place-like_active")) {
    deleteLike(cardId)
      .then((res) => {
        evt.target.classList.remove("block__place-like_active");
        if (res.likes.length > 0) {
          likesAmount.textContent = res.likes.length;
        } else {
          likesAmount.textContent = "";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    setLike(cardId)
      .then((res) => {
        likesAmount.textContent = res.likes.length;
        evt.target.classList.add("block__place-like_active");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

//Функция удаления карточки
function deleteCards(event) {
  const cardElement = event.target.closest(".list");
  const cardId = cardElement.getAttribute("data-id");
  deleteCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((error) => {
      console.log(error);
    });
}

//функция открытия попапа с картинкой
function openImg(card) {
  popUpImageOpen.src = card.link;
  popUpImageOpen.alt = card.name;
  popUpImageDescription.textContent = card.name;
  openPopup(popUpImage, validationConfiguration);
}

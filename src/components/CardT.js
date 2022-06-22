//Функция удаления карточки
function deleteCards(event) {
    const cardElement = event.target.closest(".list");
    const cardId = cardElement.getAttribute("data-id");
    const config = {
      baseUrl: "https://nomoreparties.co/v1/plus-cohort-10",
      headers: {
        authorization: "37902dfd-5a6e-4faf-80b8-bf8cf2d76230",
        "Content-Type": "application/json",
      }
    }
    const api = new Api(config);
    api.deleteCard(cardId)
      .then(() => {
        cardElement.remove();
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-10",
  headers: {
    authorization: "37902dfd-5a6e-4faf-80b8-bf8cf2d76230",
    "Content-Type": "application/json",
  },
};

//функция проверки запросов
export const checkResponseServer = (answ) => {
  if (answ.ok) {
    return answ.json();
  }
  return Promise.reject(`Ошибка: '${answ.status}'`);
};

//получаем инфо о пользователе с сервера
export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((answ) => checkResponseServer(answ));
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((answ) => checkResponseServer(answ));
};

//отправляем данные пользователя на сервер
export const changeUserInfo = (userData) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: userData.name,
      about: userData.about,
    }),
  }).then((answ) => checkResponseServer(answ));
};

//изменяем аватар
export const changeAvatar = (url) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: url,
    }),
  }).then((answ) => checkResponseServer(answ));
};

//добавляем лайк карточке
export const setLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((answ) => checkResponseServer(answ));
};

//удаляем лайк
export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((answ) => checkResponseServer(answ));
};

//добавляем новую карточку
export const createNewCard = (card) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: card.name,
      link: card.link,
    }),
  }).then((answ) => checkResponseServer(answ));
};

//удаляем карточку
export const deleteCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((answ) => {
    checkResponseServer(answ);
  });
};

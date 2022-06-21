export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  //функция проверки запросов
  _checkResponseServer(answ) {
    if (answ.ok) {
      return answ.json();
    }
    return Promise.reject(`Ошибка: '${answ.status}'`);
  }


  //получаем инфо о пользователе с сервера
  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((answ) => this._checkResponseServer(answ));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((answ) => this._checkResponseServer(answ));
  }

  //отправляем данные пользователя на сервер
  changeUserInfo(userData) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then((answ) => this._checkResponseServer(answ));
  }

  //изменяем аватар
  changeAvatar(url) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((answ) => this._checkResponseServer(answ));
  }

  //добавляем лайк карточке
  setLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    }).then((answ) => this._checkResponseServer(answ));
  }

  //удаляем лайк
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((answ) => this._checkResponseServer(answ));
  }

  //добавляем новую карточку
  createNewCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((answ) => checkResponseServer(answ));
  }

  //удаляем карточку
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((answ) => this._checkResponseServer(answ));
  }
}
export default class ApiT{
  constructor(config){
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  //функция проверки запросов
  _checkResponseServer(answ){
    if (answ.ok) {
      return answ.json();
    }
    return Promise.reject(`Ошибка: '${answ.status}'`);
  }


//получаем инфо о пользователе с сервера
getUserData() {
  return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers,
  }).then((answ) => checkResponseServer(answ));
}

}
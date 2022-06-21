export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;

  }

  //показываем валидацию
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  //убираем валидацию
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClass);
  }

  //проверяем инпуты и показываем либо прячем валидацию
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //если хотя бы в одном импуте ошибка возвращаем false в параметр валидации validity.valid
  _hasInvalidInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  //убираем или добавляем модификаторы кнопки, а также параметр disabled в зависимости от проверки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this._config.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._config.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
//метод, который будет отслеживать валидацию при введении данных
_setEventListener(){

}

}
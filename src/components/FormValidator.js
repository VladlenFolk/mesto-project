export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._inputElement.querySelectorAll(this._config.submitButtonSelector));
    this._buttonElement = this._formElement.querySelector(
    this._config.submitButtonSelector
    );
  }

  //показываем валидацию
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

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
  }

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
  _setEventListener() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState(inputList, buttonElement, config);
        this._isValid(formElement, inputElement, config);
    });
  });
this._formList.addEventListener("submit", (evt) => {
  evt.preventDefault();
})
}
}
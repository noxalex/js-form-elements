const Input = require("../input");

class TextInput extends Input {
  constructor({
    tag,
    id,
    className,
    type,
    name,
    disabled,
    required,
    value = "",
    minlength,
    maxlength,
    ...args
  }) {
    super({ tag, id, className, type, name, disabled, required });
    this._value = value;
    this.minlength = minlength;
    this.maxlength = maxlength;
  }

  get isValid() {
    return this._value.length >= this.minlength &&
      this._value.length <= this.maxlength
      ? true
      : false;
  }
}

module.exports = TextInput;

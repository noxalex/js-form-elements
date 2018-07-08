const TextInput = require("../text-input");

class EmailInput extends TextInput {
  constructor({
    tag,
    id,
    className,
    type,
    name,
    disabled,
    required,
    value,
    minlength,
    maxlength,
    ...args
  }) {
    super({
      tag,
      id,
      className,
      type,
      name,
      disabled,
      required,
      value,
      minlength,
      maxlength
    });
    this._value = value;
  }

  get isValid() {
    let regex = new RegExp(
      /^[a-zA-Z0-9'._%+-]+@[a-zA-Z0-9-][a-zA-Z0-9.-]*\.[a-zA-Z]{2,63}$/
    );
    return regex.test(this._value);
  }
}

module.exports = EmailInput;

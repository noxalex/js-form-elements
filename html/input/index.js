const Element = require("../element");

class Input extends Element {
  constructor({
    tag,
    id,
    className,
    type = "text",
    name,
    value,
    disabled = false,
    required = false,
    ...args
  }) {
    super({ tag, id, className });
    this.type = type;
    this.name = name;
    this._value = value;
    this.disabled = disabled;
    this.required = required;
  }

  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.emit("change", this.value);
  }

  get isValid() {
    if (this.required) {
      return this.value === undefined ? false : true;
    }
  }
}

module.exports = Input;

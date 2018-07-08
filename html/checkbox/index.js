const Input = require("../input/");

class Checkbox extends Input {
  constructor({
    tag,
    id,
    className,
    type,
    name,
    value = false,
    disabled = false,
    required = true,
    checked = false,
    ...args
  }) {
    super({ tag, id, className });
    this.type = type;
    this.name = name;
    this.disabled = disabled;
    this.required = required;
    this.value = value;
    this._checked = typeof checked === "boolean" ? checked : false;
  }

  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (typeof value === "boolean") {
      this._checked = value;
      this.emit("change", value);
    } else {
      this._checked = false;
    }
  }

  get isValid() {
    if (this.required) {
      return this._checked;
    }
  }
}

module.exports = Checkbox;

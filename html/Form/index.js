const Element = require("../element");

class Form extends Element {
  constructor(args, ...inputs) {
    super(args);
    this.inputs = inputs;
  }

  submit() {
    this.emit("submit", "yes, clearly this is data");
  }
}

module.exports = Form;

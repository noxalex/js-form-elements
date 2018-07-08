const EventEmitter = require("../event-emitter");

class Element extends EventEmitter {
  constructor({ tag, id, className = "" }) {
    super();
    this.tag = tag;
    this.id = id;
    this._className = className;
  }

  get className() {
    return this._className;
  }

  addClass(className) {
    if (this.hasClass(className)) return;

    if (this._className !== "") {
      this._className += " " + className;
    } else {
      this._className += className;
    }
  }

  removeClass(className) {
    if (!this.hasClass(className)) return;

    let classList = this._className.split(" ");

    let newClassList = classList.filter(currentClass => {
      return currentClass !== className;
    });
    this._className = newClassList.toString();
  }

  hasClass(className) {
    let classList = this._className.split(" ");
    let containsClass = false;

    classList.forEach(currentClass => {
      if (currentClass === className) containsClass = true;
    });

    return containsClass;
  }

  toggleClass(className) {
    if (!this.hasClass(className)) {
      this.addClass(className);
    } else {
      this.removeClass(className);
    }
  }
}

module.exports = Element;

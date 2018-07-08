class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Добавляем слушателя на событие.
   */
  on(event, listener) {
    if (this.events[event]) {
      this.events[event].push(listener);
    } else {
      this.events[event] = [listener];
    }
  }

  /**
   * Сообщаем слушателям о событии.
   */
  emit(event, arg) {
    if (this.events[event]) {
      this.events[event].forEach(fn => {
        fn.call(null, arg);
      });
    }
  }
}

module.exports = EventEmitter;

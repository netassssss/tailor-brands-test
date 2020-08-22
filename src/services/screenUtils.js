export class ScreenUtils {
  constructor() {
    this.screenSize = window.innerWidth;
    this.bindedCallback = null;
    window.addEventListener('resize', () => this.onResize());
  }

  setBindedFunction(callback) {
    if (!this.bindedCallback) this.bindedCallback = callback;
  }

  onResize() {
    this.screenSize = window.innerWidth;
    if (this.bindedCallback) this.bindedCallback(this.screenSize);
  }
}

export default new ScreenUtils();

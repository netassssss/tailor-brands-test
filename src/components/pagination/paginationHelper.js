export class PaginationHelper {
  constructor(callback) {
    this.disableNext = false;
    this.disablePrev = false;
    this.minPage = 0;
    this.maxPage = 2;
    this.currentPage = 0;
    this.arrayLen = 0;
    this.itemsInPage = 6;

    this.setPageCallback = callback;
  }

  setArrayLength(len) {
    this.arrayLen = len;
  }

  disableNext() {
    return !((this.currentPage + 1) * this.itemsInPage < this.arrayLen);
  }

  disablePrev() {
    return this.currentPage <= 0;
  }

  changePage(num) {
    if (num > this.maxPage) this.maxPage = num;
    else if (num < this.minPage) this.minPage = num;
    this.currentPage = num;

    if (this.setPageCallback) this.setPageCallback(num);
  }
}

export default PaginationHelper;

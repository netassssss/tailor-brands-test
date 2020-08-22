import { componentNames } from './tableConsts';
import defaultImage from '../assets/location_icon.svg';

export class CardHelper {
  constructor() {
    this.components = [];
  }

  addRecords(componentsRecords) {
    this.components = componentsRecords
      .map((item) => {
        const copyItem = { ...item };
        const image = item[componentNames.headerImages];
        if (image && Array.isArray(image)) {
          [copyItem[componentNames.headerImages]] = image;
        } else {
          copyItem[componentNames.headerImages] = { url: defaultImage };
        }
        return copyItem;
      });
  }

  getRecords() {
    return this.components;
  }
}

export default CardHelper;

import Airtable from 'airtable';
import { tables, componentNames } from './tableConsts';
import CardRecordsHelper from './cardHelper';

/* eslint no-console: 0 */
export class AirtableHelper {
  constructor() {
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'key7f9qIbyNOUXQkf',
    });

    this.base = Airtable.base('appnu2K48wl5zzTVa');
    this.componentsInPage = 6;
    this.cardHelper = new CardRecordsHelper();
  }

  async getContent() {
    try {
      await this.base(tables.content.table).select({
        view: tables.content.view,
        fields: [
          tables.content.headline,
          tables.content.subheadline,
          tables.content.headerImage,
        ],
      })
        .eachPage((records, fetchNextPage) => {
          const componentsRecords = records
            .reduce((acc, record) => {
              acc.push({
                [componentNames.headlines]: record.get(tables.content.headline),
                [componentNames.subheadlines]: record.get(tables.content.subheadline),
                [componentNames.headerImages]: record.get(tables.content.headerImage),
              });
              return acc;
            }, []);
          this.cardHelper.addRecords(componentsRecords);
          fetchNextPage();
        });
    } catch (e) {
      console.log(e);
    }

    return this.cardHelper.getRecords();
  }
}

export default new AirtableHelper();

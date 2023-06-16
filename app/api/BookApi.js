import Api, { ApiMethod } from './Api';

export default class BookApi extends Api {
  constructor() {
    super('book');
  }

  async getAll() {
    const response = await this.call(this.getApi(''), ApiMethod.API_METHOD_Get);
    if (this.isApiError(response)) {
      return null;
    }
    const json = await response.json();
    return json;
  }

  async generateBook(title, prompt) {
    const response = await this.call(this.getApi(''), ApiMethod.API_METHOD_Post, {
      title, prompt,
    });
    if (this.isApiError(response)) {
      return null;
    }
    const json = await response.json();
    return json;
  }

  async getBook(bookId) {
    const response = await Api.call(this.getApi(bookId), ApiMethod.API_METHOD_Get);
    if (this.isApiError(response)) {
      return null;
    }
    const json = await response.json();
    return json;
  }
}

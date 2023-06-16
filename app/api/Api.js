// eslint-disable-next-line no-unused-vars
export const ApiMethod = {
  API_METHOD_Get: 'GET',
  API_METHOD_Post: 'POST',
  API_METHOD_Patch: 'PATCH',
  API_METHOD_Delete: 'DELETE',
};

// eslint-disable-next-line no-unused-vars
export const ResponseCode = {
  RESPONSE_CODE_Ok: 200,
};

class Api {
  constructor(group) {
    this.group = group ?? null;
    this.getEndpoint = () => process.env.API_ENDPOINT ?? 'http://localhost:8080/api/v1/';
    this.getApi = (apiFunctionName) => `${this.group}/${apiFunctionName}`;
    this.isApiError = (response) => response.status !== ResponseCode.RESPONSE_CODE_Ok;
  }

  async call(api, method, body) {
    try {
      const response = await fetch(
        this.getEndpoint() + api,
        {
          method,
          body,
        },
      );
      return response;
    } catch (err) {
      return err;
    }
  }
}

export default Api;

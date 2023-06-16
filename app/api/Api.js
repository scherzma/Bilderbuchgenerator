import { isUndefinedOrNull } from '../shared/utils';
// eslint-disable-next-line import/no-cycle
import store from '../store/store';
import { setAuthToken } from '../store/authSlice';

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
  constructor(group, authState) {
    this.authState = authState;
    this.group = group ?? null;
    this.getEndpoint = () => process.env.API_ENDPOINT ?? 'http://localhost:8080/api/v1/';
    this.getApi = (apiFunctionName) => `${this.group}/${apiFunctionName}`;
    this.isApiError = (response) => response.status !== ResponseCode.RESPONSE_CODE_Ok;
    this.hasTokenInResponse = (response) => {
      if (isUndefinedOrNull(response)) {
        return false;
      }
      return response;
    };
  }

  async call(api, method, body) {
    try {
      const response = await fetch(
        this.getEndpoint() + api,
        {
          method,
          body,
          headers: (!isUndefinedOrNull(this.authState.token)) ? { Authentication: `Bearer ${this.authState.token}` } : {},
        },
      );
      const token = this.hasTokenInResponse(await response.json());
      if (token !== false) {
        store.dispatch(setAuthToken(token));
      }
      return response;
    } catch (err) {
      return err;
    }
  }
}

export default Api;

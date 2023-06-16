import { isUndefinedOrNull } from '../shared/utils';
import { setAuthToken } from '../store/authSlice';
import store from '../store/store';
import Api, { ApiMethod } from './Api';
// eslint-disable-next-line import/no-cycle

export default class AuthApi extends Api {
  constructor(authState) {
    super('auth', authState);
  }

  async login(username, password) {
    const response = this.call(this.getApi('login'), ApiMethod.API_METHOD_Post, {
      username, password,
    });
    if (this.isApiError(response)) {
      return null;
    }
    // const json = await response.json();
    return response;
  }

  async register(username, email, password) {
    const response = await this.call(this.getApi('register'), ApiMethod.API_METHOD_Post, {
      username, email, password,
    });
    if (this.isApiError(response)) {
      return null;
    }
    // const json = await response.json();
    return response;
  }
}

const AuthManager = (authState) => ({
  async login(usernameOrEmail, password) {
    const success = await new AuthApi(authState).login(usernameOrEmail, password);
    if (isUndefinedOrNull(success)) {
      store.dispatch(setAuthToken(null));
      return false;
    }
    store.dispatch(setAuthToken(null));
    // await store.dispatch(setSession(success));
    return true;
  },
  async register(username, email, password) {
    const success = await new AuthApi(authState).register(username, email, password);
    if (isUndefinedOrNull(success)) {
      // store.dispatch(setError);
      // store.dispatch(logout);
      return false;
    }
    // store.dispatch(({ isLoggedIn: true }));
    return true;
  },
});

export { AuthManager };

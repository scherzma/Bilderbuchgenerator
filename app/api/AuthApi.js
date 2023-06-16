import { setError, setSession } from '../features/auth/actions';
import { isUndefinedOrNull } from '../shared/utils';
import Api, { ApiMethod } from './Api';
import store from '../store/store';

export default class AuthApi extends Api {
  constructor() {
    super('auth');
  }

  async login(username, password) {
    const response = this.call(this.getApi('login'), ApiMethod.API_METHOD_Post, {
      username, password,
    });
    if (this.isApiError(response)) {
      return null;
    }
    const json = await response.json();
    return json;
  }

  async register(username, email, password) {
    const response = await this.call(this.getApi('register'), ApiMethod.API_METHOD_Post, {
      username, email, password,
    });
    if (this.isApiError(response)) {
      return null;
    }
    const json = await response.json();
    return json;
  }
}

const AuthManager = {
  async login(usernameOrEmail, password) {
    const success = await new AuthApi().login(usernameOrEmail, password);
    if (isUndefinedOrNull(success)) {
      store.dispatch(setError());
      // store.dispatch(logout());
      return false;
    }
    await store.dispatch(setSession(success));
    return true;
  },
  async register(username, email, password) {
    const success = await new AuthApi().register(username, email, password);
    if (isUndefinedOrNull(success)) {
      store.dispatch(setError);
      // store.dispatch(logout);
      return false;
    }
    store.dispatch(setSession({ isLoggedIn: true }));
    return true;
  },
};

export { AuthManager };

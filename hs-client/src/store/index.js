import { Module } from 'cerebral';
import HttpProvider from '@cerebral/http';

import model from './model';
import ApiProvider from './providers/Api';
import JwtProvider from './providers/Jwt';
import SettingsStoreProvider from './providers/SettingsStore';

import * as sequences from './sequences';
import { isPatron, isLoggedIn, hasLogIn } from './getters';

export default Module({
  model,
  state: {
    hasLoadedApp: false,
    jwt: null,
    isAuthenticating: true,
    user: null,
    authHeader: null
  },
  getters: {
    isPatron,
    isLoggedIn,
    hasLogIn,
  },
  signals: {
    signInClicked: sequences.signIn,
  },
  catch: [],
  modules: {
  },
  providers: {
    api: ApiProvider,
    jwt: JwtProvider,
    http: HttpProvider(),
    settingsStore: SettingsStoreProvider,
  },
});

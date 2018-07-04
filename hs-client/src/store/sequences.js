import { sequence } from 'cerebral';
import { when, push, unset, set, equals } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';
import * as actions from './actions';

export const signIn = [
    set(state`isAuthenticating`, true),
    actions.login,
    {
      success: [
        actions.setJwtFromProps,
        actions.createHeaders,
        actions.getUser,
        {
          success: [
            set(state`user`, props`user`),
          ],
          error: [
            //factories.addNotification('Github Authentication Error', 'error'),
          ],
        },
      ],
      error: [],
    },
    set(state`isAuthenticating`, false),
  ];
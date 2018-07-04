import { types } from "mobx-state-tree";

export default {
  hasLoadedApp: types.boolean,
  jwt: types.maybe(types.string),
  isAuthenticating: types.maybe(types.boolean),
  user: types.maybe(
    types.model({
      avatarUrl: types.maybe(types.string),
      emmail: types.maybe(types.string),
      id: types.maybe(types.string),
      name: types.maybe(types.string),
      username: types.maybe(types.string)
    })
  ),
  authHeader: types.maybe(types.model({
    Authorization: types.string
  }))
};

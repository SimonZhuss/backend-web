export function login({ api, path, props }) {
  const { username, password } = props;

  return api.post("/login").then(data => {
    const jwt = data.jwt;

    if (jwt) {
      return path.success({ jwt });
    }

    return path.error();
  });
}

export function createHeaders({ state, jwt }) {
  const foundJwt = state.get("jwt") || jwt.get();

  const headers = foundJwt
    ? {
        Authorization: `Bearer ${foundJwt}`
      }
    : {};
  state.set("authHeader", headers);  
}

export function getUser({ api, path }) {
  return api
    .post("/users/current")
    .then(data => path.success({ user: data }))
    .catch(() => path.error());
}

export function setJwtFromProps({ jwt, state, props }) {
  jwt.set(props.jwt);
  state.set("jwt", props.jwt);
}

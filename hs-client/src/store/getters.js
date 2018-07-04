import store from 'store/dist/store.modern';

export function isPatron() {
  return Boolean(
    this.user
  );
}

export function isLoggedIn() {
  return Boolean(this.jwt) && Boolean(this.user);
}

export function hasLogIn() {
  return !!this.jwt || !!store.get('jwt');
}
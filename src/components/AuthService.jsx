// AuthService.js
export const ADMIN_USERNAME = 'admin';
export const ADMIN_PASSWORD = 'password';

export const authenticateAdmin = (username, password) => {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
};

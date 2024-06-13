const port = 3000;
export const MEMES = `http://localhost:${port}/memes`;
export const MEMES_BY_ADDED_BY = (username) =>
  `http://localhost:${port}/memes?added_by=${username}`;
export const MEME = (id) => `http://localhost:${port}/memes/${id}`;
export const USER = (username) =>
  `http://localhost:${port}/users?username=${username}`;
export const USER_BY_ID = (id) => `http://localhost:${port}/users?id=${id}`;
export const LOGIN = (username, password) =>
  `http://localhost:${port}/users?username=${username}&password=${password}`;

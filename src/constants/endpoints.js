const port = 3000;
export const MEMES = `http://localhost:${port}/memes`;
export const MEME = (id) => `http://localhost:${port}/memes/${id}`;
export const USER = (username) =>
  `http://localhost:${port}/users?username=${username}`;

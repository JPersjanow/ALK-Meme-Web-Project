const envUrl = import.meta.env.VITE_API_URL;
const envApiKey = import.meta.env.VITE_API_KEY;
var headers =
    {
        "apikey": envApiKey,
        "Authorization":`Bearer ${envApiKey}`
    };
var url = envUrl;

export const MEMES = `${url}/memes`;
export const MEMES_BY_ADDED_BY = (username) =>
  `${url}/memes?added_by=eq.${username}`;
export const MEME = (id) => `${url}/memes?id=eq.${id}`;
export const USER = (username) =>
  `${url}/users?username=eq.${username}`;
export const USERS = `${url}/users`;
export const CONFIG = { headers: headers };
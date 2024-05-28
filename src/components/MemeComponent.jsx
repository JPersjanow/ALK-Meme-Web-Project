import { useState } from "react";
import axios from "axios";
import * as endpoints from "../constants/endpoints";

export function MemeCompontent({ meme }) {
  const [title, setTitle] = useState(meme.title);
  const [img, setImg] = useState(meme.img);
  const [upvotes, setUpvotes] = useState(meme.upvotes);
  const [downvotes, setDownvotes] = useState(meme.downvotes);

  const updateStateAndReturnPayload = (type, response) => {
    switch (type) {
      case "upvotes":
        setUpvotes(response.data.upvotes + 1);
        return {
          ...response.data,
          upvotes: response.data.upvotes + 1,
        };
      case "downvotes":
        setDownvotes(response.data.downvotes + 1);
        return {
          ...response.data,
          downvotes: response.data.downvotes + 1,
        };
      default:
        return {
          ...response.data,
        };
    }
  };

  const updateLikes = (type) => () => {
    axios
      .get(endpoints.MEME(meme.id))
      .then((response) => {
        const payload = updateStateAndReturnPayload(type, response);
        return axios.put(endpoints.MEME(meme.id), payload);
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt={`Meme containing ${title}`} />
      <h2>{upvotes}</h2>
      <h2>{downvotes}</h2>
      <button onClick={updateLikes("upvotes")}>Upvote</button>
      <button onClick={updateLikes("downvotes")}>Downvote</button>
    </div>
  );
}

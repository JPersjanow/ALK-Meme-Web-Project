import { useEffect, useState } from "react";
import axios from "axios";

export function MemeCompontent({ meme, setMemeChangedFlag }) {
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
      .get(`http://localhost:3000/memes/${meme.id}`)
      .then((response) => {
        const payload = updateStateAndReturnPayload(type, response);
        return axios.put(`http://localhost:3000/memes/${meme.id}`, payload);
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (upvotes - downvotes > 5 || downvotes > upvotes) {
      console.log("change needed");
      setMemeChangedFlag(true);
    }
  }, [upvotes, downvotes, setMemeChangedFlag]);

  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="pic" />
      <h2>{upvotes}</h2>
      <h2>{downvotes}</h2>
      <button onClick={updateLikes("upvotes")}>Upvote</button>
      <button onClick={updateLikes("downvotes")}>Downvote</button>
    </div>
  );
}

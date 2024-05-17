import { useState } from "react";
import axios from "axios";

// start
export function MemeCompontent({ meme }) {
  const [title, setTitle] = useState(meme.title);
  const [img, setImg] = useState(meme.img);
  const [upvotes, setUpvotes] = useState(meme.upvotes);
  const [downvotes, setDownvotes] = useState(meme.downvotes);

  function updateData() {
    const payload = { ...meme, upvotes: upvotes + 1 };

    axios
      .put(`http://localhost:3000/memes/${meme.id}`, payload)
      .then((response) => {
        console.log("Success:", response.data);
        setUpvotes(upvotes + 1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="pic" />
      <h2>{upvotes}</h2>
      <h2>{downvotes}</h2>
      <button onClick={updateData}>Upvote</button>
    </div>
  );
}

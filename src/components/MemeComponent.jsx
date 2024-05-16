import { useState } from "react";

// start
export function MemeCompontent({ meme }) {
  const [title, setTitle] = useState(meme.title);
  const [img, setImg] = useState(meme.img);
  const [upvotes, setUpvotes] = useState(meme.upvotes);
  const [downvotes, setDownvotes] = useState(meme.downvotes);
  
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="pic" />
      <h2>{upvotes}</h2>
      <h2>{downvotes}</h2>
    </div>
  );
}

import { useState } from "react";

export function MemePreviewComponent({ memeTtle, memeImg }) {
  const [title, setTitle] = useState(memeTtle);
  const [img, setImg] = useState(memeImg);
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt={`Meme containing ${title}`} />
      <h2>{upvotes}</h2>
      <h2>{downvotes}</h2>
    </div>
  );
}

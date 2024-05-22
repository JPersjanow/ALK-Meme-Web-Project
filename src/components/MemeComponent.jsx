import { useState } from "react";
import axios from "axios";

export function MemeCompontent({ meme }) {
  const [title, setTitle] = useState(meme.title);
  const [img, setImg] = useState(meme.img);
  const [upvotes, setUpvotes] = useState(meme.upvotes);
  const [downvotes, setDownvotes] = useState(meme.downvotes);

  function updateLike() {
    // Pobranie danych z bazy
    axios
      .get(`http://localhost:3000/memes/${meme.id}`)
      .then((response) => {
        const actualMeme = response.data;
        const updatedUpvotes = actualMeme.upvotes + 1;
        const payload = { ...actualMeme, upvotes: updatedUpvotes };
        console.log("pobieram najnowsze dane z bazy");

        // wysyłam zaktualizowane dane
        return axios.put(`http://localhost:3000/memes/${meme.id}`, payload);
      })
      .then((response) => {
        console.log("wysyłam nowe dane");
        console.log("Success:", response.data);

        setUpvotes(response.data.upvotes); // Zaktualizuj stan z odpowiedzi serwera
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
      <button onClick={updateLike}>Upvote</button>
    </div>
  );
}

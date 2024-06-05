import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import * as constants from "../constants";

export function MemeCompontent({ meme, setMemeChangedFlag }) {
  const [title, setTitle] = useState(meme.title);
  const [img, setImg] = useState(meme.img);
  const [upvotes, setUpvotes] = useState(meme.upvotes);
  const [downvotes, setDownvotes] = useState(meme.downvotes);
  const location = useLocation().pathname;

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
      .get(constants.endpoints.MEME(meme.id))
      .then((response) => {
        const payload = updateStateAndReturnPayload(type, response);
        return axios.put(constants.endpoints.MEME(meme.id), payload);
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (
      (location === constants.routes.HOTPAGEROUTE &&
        upvotes - downvotes <= 5) ||
      (location === constants.routes.REGULARPAGEROUTE &&
        upvotes - downvotes > 5)
    ) {
      console.log("change needed");
      setMemeChangedFlag(true);
    }
  }, [upvotes, downvotes, setMemeChangedFlag, location]);

  return (
    <div className="">
      <div className="containermem">
        <h1 className="titlemem">{title}</h1>
        <img src={img} alt={`Meme containing ${title}`} className="imgmem"/>
        <h2>{upvotes}</h2>
        <h2>{downvotes}</h2>
        <button onClick={updateLikes("upvotes")}>Upvote</button>
        <button onClick={updateLikes("downvotes")}>Downvote</button>
      </div>
    </div>
  );
}

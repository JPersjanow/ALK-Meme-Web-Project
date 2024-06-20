import * as constants from "../../constants/index.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { generate } from "random-words";
import axios from "axios";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BsFire } from "react-icons/bs";
import { ButtonLikeComponent } from "./MemeButtonVote.jsx";
import {
  notifyError,
  notifySuccess,
} from "../Notifications/ToastNotification.jsx";
import PropTypes from "prop-types";

export const Meme = ({ meme, setMemeChangedFlag }) => {
  const title = meme.title;
  const img = meme.img;
  const [upvotes, setUpvotes] = useState(meme.upvotes);
  const [downvotes, setDownvotes] = useState(meme.downvotes);
  const location = useLocation().pathname;

  const updateStateAndReturnPayload = (type, response) => {
    switch (type) {
      case "upvote":
        setUpvotes(response.data.upvotes + 1);
        return {
          ...response.data,
          upvotes: response.data.upvotes + 1,
        };
      case "downvote":
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
        notifySuccess(generate() + "!");
      })
      .catch((error) => {
        notifyError("We couldn't update the likes, please try again later");
      });
  };

  useEffect(() => {
    if (
      (location === constants.routes.HOTPAGEROUTE &&
        upvotes - downvotes <= 5) ||
      (location === constants.routes.REGULARPAGEROUTE &&
        upvotes - downvotes > 5)
    ) {
      setMemeChangedFlag(true);
    }
  }, [upvotes, downvotes, setMemeChangedFlag, location]);

  return (
    <div>
      <div
        className={
          location === constants.routes.USERPAGE && upvotes - downvotes > 5
            ? "meme-container--hot"
            : "meme-container"
        }
      >
        <h1 className="meme-title">
          {location === constants.routes.USERPAGE && upvotes - downvotes > 5 ? (
            <BsFire className="text-red-600" />
          ) : (
            ""
          )}
          {title}
        </h1>
        <img src={img} alt={`Meme containing ${title}`} />
        <div className="meme-container-buttons">
          <ButtonLikeComponent
            updateLikes={updateLikes}
            buttonText={<AiOutlineLike></AiOutlineLike>}
            updateLikeSwitch={"upvote"}
            buttonClass="button-upvote"
            numberVotes={upvotes}
          ></ButtonLikeComponent>
          <ButtonLikeComponent
            updateLikes={updateLikes}
            buttonText={<AiOutlineDislike></AiOutlineDislike>}
            updateLikeSwitch={"downvote"}
            buttonClass="button-downvote"
            numberVotes={downvotes}
          ></ButtonLikeComponent>
        </div>
      </div>
    </div>
  );
};

Meme.propTypes = {
  meme: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
  }).isRequired,
  setMemeChangedFlag: PropTypes.func.isRequired,
};

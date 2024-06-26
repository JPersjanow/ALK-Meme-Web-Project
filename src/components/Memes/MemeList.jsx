import * as constants from "../../constants/index.js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { ThreeCircles } from "react-loader-spinner";
import { Meme } from "./Meme.jsx";
import { MemeSortButton } from "./MemeSortButton.jsx";
import { notifyError } from "../Notifications/ToastNotification.jsx";

export const MemeList = ({ addedBy }) => {
  const [memes, setMemes] = useState(null);
  const [memeChangedFlag, setMemeChangedFlag] = useState(false);
  const location = useLocation().pathname;
  const [sort, setSort] = useState(false);
  const navigate = useNavigate();
  var endpoint = "";

  if (addedBy) {
    endpoint = constants.endpoints.MEMES_BY_ADDED_BY(addedBy);
  } else {
    endpoint = constants.endpoints.MEMES;
  }

  const sortMemes = (meme1, meme2) => {
    var meme1Date = new Date(meme1.added_at);
    var meme2Date = new Date(meme2.added_at);
      if (sort) {
      return meme1Date - meme2Date;
    } else {
      return meme2Date - meme1Date;
    }
  };

  const handleSortClick = () => {
    if (sort) {
      setSort(false);
    } else {
      setSort(true);
    }
  };

  useEffect(() => {
    axios
      .get(endpoint, constants.endpoints.CONFIG)
      .then((response) => {
        const memesList = response.data;
        const filteredMemesList = memesList
          .filter((meme) => {
            if (addedBy) {
              return meme;
            }
            if (
              location === constants.routes.HOTPAGEROUTE ||
              location === constants.routes.MAINROUTE
            ) {
              return meme ? meme.upvotes - meme.downvotes > 5 : null;
            } else {
              return meme ? meme.upvotes - meme.downvotes <= 5 : null;
            }
          })
          .sort((meme1, meme2) => sortMemes(meme1, meme2));
        setMemes(filteredMemesList);
        setMemeChangedFlag(false);
      })
      .catch((error) => {
        notifyError("Error getting memes");
        navigate(constants.routes.ERRORROUTE, {
          state: { error: error.message, errorCode: error.code },
        });
      });
  }, [memeChangedFlag, location, sort]);

  return (
    <div className="meme-list-container">
      <MemeSortButton sortState={sort} handleFunction={handleSortClick} />
      {memes ? (
        memes.map((meme) => {
          return (
            <Meme
              key={meme.id}
              meme={meme}
              setMemeChangedFlag={setMemeChangedFlag}
            />
          );
        })
      ) : (
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color={
            location === constants.routes.HOTPAGEROUTE ? "#dc2626" : "#16a34a"
          }
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass="loading"
        />
      )}
    </div>
  );
};

MemeList.propTypes = {
  addedBy: PropTypes.string,
};

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { MemeComponent } from "./MemeComponent.jsx";
import { SortButtonComponent } from "./SortButtonComponent.jsx";
import * as constants from "../../constants/index.js";
import { ThreeCircles } from "react-loader-spinner";
import { notifyError } from "./ToastNotification.jsx";

export const MemeListComponent = ({ addedBy }) => {
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
    if (sort) {
      return meme1.added_at - meme2.added_at;
    } else {
      return meme2.added_at - meme1.added_at;
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
      .get(endpoint)
      .then((response) => {
        const memesList = response.data;
        const filteredMemesList = memesList
          .filter((meme) => {
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
        navigate(constants.routes.ERRORROUTE);
      });
  }, [memeChangedFlag, location, sort]);

  return (
    <div className="meme-list-container">
      <SortButtonComponent
        sortState={sort}
        handleFunction={handleSortClick}
      ></SortButtonComponent>
      {memes ? (
        memes.map((meme) => {
          return (
            <MemeComponent
              key={meme.id}
              meme={meme}
              setMemeChangedFlag={setMemeChangedFlag}
            ></MemeComponent>
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
        ></ThreeCircles>
      )}
    </div>
  );
};

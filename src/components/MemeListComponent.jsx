import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { MemeComponent } from "./MemeComponent";
import { SortButtonComponent } from "./SortButtonComponent";
import * as constants from "../constants";

export const MemeListComponent = () => {
  const [memes, setMemes] = useState(null);
  const [memeChangedFlag, setMemeChangedFlag] = useState(false);
  const location = useLocation().pathname;
  const [sort, setSort] = useState(false);

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
    axios.get(constants.endpoints.MEMES).then((response) => {
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
    });
  }, [memeChangedFlag, location, sort]);

  return (
    <div>
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
        <p>Loading...</p>
      )}
    </div>
  );
};
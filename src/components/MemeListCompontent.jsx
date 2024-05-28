import { useEffect, useState } from "react";
import { MemeCompontent } from "./MemeComponent";
import { useLocation } from "react-router-dom";
import axios from "axios";
import * as routesDeclaration from "../constants/routesDeclarations";

const MemeListComponent = () => {
  const [memes, setMemes] = useState(null);
  const [memeChangedFlag, setMemeChangedFlag] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    axios.get("http://localhost:3000/memes").then((response) => {
      const memesList = response.data;
      const filteredMemesList = memesList.filter((meme) => {
        if (
          location === routesDeclaration.HOTPAGEROUTE ||
          location === routesDeclaration.MAINROUTE
        ) {
          return meme ? meme.upvotes - meme.downvotes > 5 : null;
        } else {
          return meme ? meme.upvotes - meme.downvotes <= 5 : null;
        }
      });
      setMemes(filteredMemesList);
      setMemeChangedFlag(false);
    });
  }, [memeChangedFlag, location]);

  return (
    <div>
      {memes ? (
        memes.map((meme) => {
          return (
            <MemeCompontent
              key={meme.id}
              meme={meme}
              setMemeChangedFlag={setMemeChangedFlag}
            ></MemeCompontent>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MemeListComponent;

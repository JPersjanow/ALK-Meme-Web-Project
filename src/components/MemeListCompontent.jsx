import { useEffect, useState } from "react";
import { MemeCompontent } from "./MemeComponent";

const MemeListComponent = () => {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/memes");
      const data = await response.json();
      setMemes(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {memes ? (
        memes.map((meme) => {
          return <MemeCompontent meme={meme}></MemeCompontent>;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MemeListComponent;

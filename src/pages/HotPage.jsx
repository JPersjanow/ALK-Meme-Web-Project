import { MemeList } from "../components/Memes/MemeList.jsx";
import { BsFire } from "react-icons/bs";

export const HotPage = () => {
  return (
    <div className="title-container">
      <div className="title-header--red-shadow">
        <h2>Hottest Memes in town!</h2>
        <div className="title-header-icon text-red-500">
          <BsFire />
        </div>
      </div>
      <MemeList />
    </div>
  );
};

import { MemeListComponent } from "../components/Memes/MemeListComponent.jsx";
import { BsFire } from "react-icons/bs";
import MemeBackground from "../assets/meme-background.png";

export const HotPage = () => {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${MemeBackground})` }}
    >
      <div className="title-header--red-shadow">
        <h2>Hottest Memes in town!</h2>
        <div className="title-header-icon text-red-500">
          <BsFire></BsFire>
        </div>
      </div>
      <MemeListComponent></MemeListComponent>
    </div>
  );
};

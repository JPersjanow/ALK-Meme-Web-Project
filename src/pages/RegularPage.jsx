import { MemeListComponent } from "../components/MemeListComponent";
import { BiSolidHome } from "react-icons/bi";
import MemeBackground from "../assets/meme-background.png";

export const RegularPage = () => {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${MemeBackground})` }}
    >
      <div className="title-header--green-shadow">
        <h2>Great Memes</h2>
      <div className="title-header-icon text-green-500">
          <BiSolidHome></BiSolidHome>
        </div>
      </div>
      <MemeListComponent></MemeListComponent>
    </div>
  );
};

import { MemeListComponent } from "../components/Memes/MemeListComponent.jsx";
import { BiSolidHome } from "react-icons/bi";

export const RegularPage = () => {
  return (
    <div>
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

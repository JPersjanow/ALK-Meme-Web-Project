import { MemeListComponent } from "../components/MemeListComponent";
import { BsFire } from "react-icons/bs";

export const HotPage = () => {
  return (
    <div className="">
      <div className="titlepage">
        <h2>Hot Page</h2>
        <div className="title-page-icon">
          <BsFire></BsFire>
        </div>
      </div>
      <MemeListComponent></MemeListComponent>
    </div>
  );
};

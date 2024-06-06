import { MemeFormComponent } from "../components/MemeFormComponent";
import { MdOutlineAddCircle } from "react-icons/md";

export const AddMemePage = () => {
  return (
    <div className="">
      <div className="titlepage text-blue-500">
      <h2 className="">Add your own Meme</h2>
      <div className="title-page-icon text-blue-500">
          <MdOutlineAddCircle></MdOutlineAddCircle>
        </div>

      </div>
      <MemeFormComponent></MemeFormComponent>
    </div>
  );
};

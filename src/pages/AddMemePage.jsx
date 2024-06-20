import { MemeForm } from "../components/Memes/MemeForm.jsx";
import { MdOutlineAddCircle } from "react-icons/md";

export const AddMemePage = () => {
  return (
    <div>
      <div className="title-header--blue-shadow">
        <h2 className="">Add your own Meme</h2>
        <div className="title-header-icon text-blue-500">
          <MdOutlineAddCircle />
        </div>
      </div>
      <MemeForm />
    </div>
  );
};

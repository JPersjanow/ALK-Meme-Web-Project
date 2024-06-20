import { MemeForm } from "../components/Memes/MemeForm.jsx";
import { MdOutlineAddCircle } from "react-icons/md";
import { useEffect } from "react";
import { notifyError } from "../components/Notifications/ToastNotification.jsx";
import * as constants from "../constants/index.js";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AddMemePage = () => {
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.userData) {
      notifyError("Seems you are not logged babe!");
      navigate(constants.routes.ERRORROUTE, {
        state: {
          error: "Login first to be able to add memes!",
          errorCode: 404,
        },
      });
    }
  }, []);

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

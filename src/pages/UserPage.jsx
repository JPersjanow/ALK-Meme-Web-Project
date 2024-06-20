import { useCookies } from "react-cookie";
import { IoPersonSharp } from "react-icons/io5";
import { MemeList } from "../components/Memes/MemeList.jsx";
import * as constants from "../constants/index.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { notifyError } from "../components/Notifications/ToastNotification.jsx";

export const UserPage = () => {
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.userData) {
      notifyError("Seems you are not logged babe!");
      navigate(constants.routes.ERRORROUTE, {
        state: { error: "Login first to access user page!", errorCode: 404 },
      });
    }
  }, []);

  return (
    <>
      {cookies.userData && (
        <div>
          <div className="title-header--cyan-shadow">
            <h2>Hello {cookies.userData.username}</h2>
            <div className="title-header-icon text-cyan-500">
              <IoPersonSharp />
            </div>
          </div>
          <h1 className="text-center">Check out how your memes are doing!</h1>
          <MemeList addedBy={cookies.userData.username} />
        </div>
      )}
    </>
  );
};

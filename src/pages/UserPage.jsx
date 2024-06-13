import { useCookies } from "react-cookie";
import { IoPersonSharp } from "react-icons/io5";
import { MemeListComponent } from "../components/Memes/MemeListComponent.jsx";

export const UserPage = () => {
  const [cookies, setCookies] = useCookies();
  return (
    <div>
      <div className="title-header--cyan-shadow">
        <h2>Hello {cookies.userData.username}</h2>
        <div className="title-header-icon text-cyan-500">
          <IoPersonSharp></IoPersonSharp>
        </div>
      </div>
      <h1 className="text-center">Check out how your memes are doing!</h1>
      <MemeListComponent
        addedBy={cookies.userData.username}
      ></MemeListComponent>
    </div>
  );
};

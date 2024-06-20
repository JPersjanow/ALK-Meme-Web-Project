import { useCookies } from "react-cookie";
import { IoPersonSharp } from "react-icons/io5";
import { MemeList } from "../components/Memes/MemeList.jsx";

export const UserPage = () => {
  const [cookies, setCookies] = useCookies();
  return (
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
  );
};

import { IoPersonSharp } from "react-icons/io5";
import { useCookies } from "react-cookie";

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
    </div>
  );
};

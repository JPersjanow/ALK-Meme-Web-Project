import { useLocation } from "react-router-dom";
import { MdError } from "react-icons/md";
import { BiSolidMessageSquareError } from "react-icons/bi";

export const ErrorPage = () => {
  let location = useLocation();
  return (
    <div>
      <div className="title-header--red-shadow">
        <h2>Ooops! I think we got an error</h2>
        <div className="title-header-icon text-red-500">
          <MdError />
        </div>
      </div>
      {location.state ? (
        <div className="error-container">
          <h2>
            <BiSolidMessageSquareError />
            {location.state.errorCode}
          </h2>
          <h3>Please contact system administrator</h3>
          <h3>{location.state.error}</h3>
        </div>
      ) : (
        <div className="error-container">
          <h3>
            <BiSolidMessageSquareError /> This is not a page you are looking for
          </h3>
        </div>
      )}
    </div>
  );
};

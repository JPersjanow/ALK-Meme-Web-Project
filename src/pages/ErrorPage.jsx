import { MdError } from "react-icons/md";
import MemeBackground from "../assets/meme-background.png";


export const ErrorPage = () => {
    return (
        <div>
          <div
            className="background"
            style={{ backgroundImage: `url(${MemeBackground})` }}
          >
            <div className="title-header--red-shadow">
              <h2>Ooops! I think we got an error</h2>
              <div className="title-header-icon text-red-500">
                <MdError></MdError>
              </div>
            </div>
          </div>
        </div>
      );
}

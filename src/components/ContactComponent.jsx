import { IoLogoLinkedin } from "react-icons/io5";

export const ContactComponent = ({ namePerson, urlPerson, urlPersonImg }) => {
  return (
    <div>
      <div className="container-persons">
        <div className="person-module">
          <img className="img-person-module" src="" alt="" />
          <h2>{namePerson}</h2>
          <a href="{urlPerson}">
            <IoLogoLinkedin></IoLogoLinkedin>
          </a>
        </div>
        <div className="person-module">
          <img className="img-person-module" src="" alt="" />
          <h2>{namePerson}</h2>
          <a href="{urlPerson}">
            <IoLogoLinkedin></IoLogoLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

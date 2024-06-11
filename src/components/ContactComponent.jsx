import { IoLogoLinkedin } from "react-icons/io5";

export const ContactComponent = ({ namePerson, urlPerson, urlPersonImg }) => {
  return (
    <div className="person-module">
      <img
        className="img-person-module"
        src={urlPersonImg}
        alt={`${namePerson} creator of the page`}
      />
      <h3>{namePerson}</h3>
      <a href={urlPerson}>
        <IoLogoLinkedin></IoLogoLinkedin>
      </a>
    </div>
  );
};

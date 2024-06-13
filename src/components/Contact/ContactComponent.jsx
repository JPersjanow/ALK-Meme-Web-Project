import { IoLogoLinkedin } from "react-icons/io5";

export const ContactComponent = ({ name, url, image }) => {
  return (
    <div className="person-module">
      <img
        className="img-person-module"
        src={image}
        alt={`${name} creator of the page`}
      />
      <h3>{name}</h3>
      <a href={url}>
        <IoLogoLinkedin></IoLogoLinkedin>
      </a>
    </div>
  );
};

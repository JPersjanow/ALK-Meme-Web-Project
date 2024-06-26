import { MdOutlineContactSupport } from "react-icons/md";
import { ContactPane } from "../components/Contact/ContactPane.jsx";
import JPContactImage from "../assets/JP-contact-profile.png";
import MKContactImage from "../assets/MK-contact-profile.png";

export const ContactPage = () => {
  const contacts = [
    {
      id: 1,
      name: "Jakub Persjanow",
      url: "https://www.linkedin.com/in/jakub-persjanow/",
      img: JPContactImage,
    },
    {
      id: 2,
      name: "Michał Kostrzewa",
      url: "https://www.linkedin.com/in/kostrzewamichal/",
      img: MKContactImage,
    },
  ];

  return (
    <div>
      <div className="title-header--orange-shadow">
        <h2>Meet the creators</h2>
        <div className="title-header-icon text-orange-500">
          <MdOutlineContactSupport />
        </div>
      </div>
      <div className="container-person-module">
        {contacts.map((element) => {
          return (
            <ContactPane
              key={element.id}
              name={element.name}
              url={element.url}
              image={element.img}
            />
          );
        })}
      </div>
    </div>
  );
};

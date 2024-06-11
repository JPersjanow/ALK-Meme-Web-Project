import { ContactComponent } from "../components/ContactComponent";
import { MdOutlineContactSupport } from "react-icons/md";

export const ContactPage = () => {
  return (
    <div>
      <div className="title-header--orange-shadow">
        <h2>Meet the creators</h2>
        <div className="title-header-icon text-orange-500">
          <MdOutlineContactSupport></MdOutlineContactSupport>
        </div>
      </div>
      <div className="container-person-module">
        <ContactComponent
          namePerson="Jakub Persjanow"
          urlPerson="https://www.linkedin.com/in/jakub-persjanow/"
          urlPersonImg="https://media.licdn.com/dms/image/C4D03AQED4G_6wcEvmQ/profile-displayphoto-shrink_400_400/0/1636657336668?e=1723075200&v=beta&t=kXHk86BwWFMXV8fWh2dkeOnCYHkbpq-t07_JjK3ef5E"
        ></ContactComponent>
        <ContactComponent
          namePerson="Michał Kostrzewa"
          urlPerson="https://www.linkedin.com/in/kostrzewamichal/"
          urlPersonImg="https://media.licdn.com/dms/image/D4D03AQHSt2e3NV36UQ/profile-displayphoto-shrink_800_800/0/1701376969887?e=1723075200&v=beta&t=ASkrYiMs9h9QH0P5z1pPIKtTsT7cJaw46ubnL9Dhayc"
        ></ContactComponent>
      </div>
    </div>
  );
};

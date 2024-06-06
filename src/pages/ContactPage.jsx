import { ContactComponent } from "../components/ContactComponent";

export const ContactPage = () => {
  return (
    <div>
      <div className="titlepage">
        <h2>Kontakt z nami</h2>
        <div className="title-page-icon text-green-500"></div>
      </div>
      <ContactComponent namePerson="Michał"></ContactComponent>
    </div>
  );
};

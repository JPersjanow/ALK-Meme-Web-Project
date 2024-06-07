import { MemeListComponent } from "../components/MemeListComponent";
import { BsFire } from "react-icons/bs";

export const HotPage = () => {
  return (
    <div className="bg-[url('https://merkuriusz.pl/wp-content/uploads/2024/06/membgc.png')] bg-repeat">
      <div className="titlepage">
        <h2>Hot Page</h2>
        <div className="title-page-icon text-red-500">
          <BsFire></BsFire>
        </div>
      </div>
      <MemeListComponent></MemeListComponent>
    </div>
  );
};

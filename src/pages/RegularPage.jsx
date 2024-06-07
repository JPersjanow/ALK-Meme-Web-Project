import { MemeListComponent } from "../components/MemeListComponent";
import { BiSolidHome } from "react-icons/bi";

export const RegularPage = () => {
  return (
    <div className="bg-[url('https://merkuriusz.pl/wp-content/uploads/2024/06/membgc.png')] bg-repeat" >
      <div className="titlepage">

      <h2>Regular Page</h2>
      <div className="title-page-icon text-green-500">
          <BiSolidHome></BiSolidHome>
        </div>

      </div>
      <MemeListComponent></MemeListComponent>
    </div>
  );
};

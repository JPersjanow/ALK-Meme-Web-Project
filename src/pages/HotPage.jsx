import { MemeListComponent } from "../components/MemeListComponent";

export const HotPage = () => {
  return (
    <div className="">
      <div className="titlepage bg-black ">
        <h2>Hot Page</h2>
        <img src="/fire.png"></img>
      </div>
      <MemeListComponent></MemeListComponent>
    </div>
  );
};

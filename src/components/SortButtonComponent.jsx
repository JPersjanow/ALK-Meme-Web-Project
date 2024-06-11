import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

export const SortButtonComponent = ({ sortState, handleFunction }) => {
  return (
    <div onClick={handleFunction} className="button-sort group">
      {sortState ? (
        <FaArrowAltCircleDown className="button-sort-icon group-hover:rotate-180" />
      ) : (
        <FaArrowAltCircleUp className="button-sort-icon group-hover:rotate-180" />
      )}
      <button>{sortState ? "Show newest" : "Show oldest"}</button>
    </div>
  );
};

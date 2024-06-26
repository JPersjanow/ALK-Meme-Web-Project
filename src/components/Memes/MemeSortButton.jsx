import PropTypes from "prop-types";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

export const MemeSortButton = ({ sortState, handleFunction }) => {
  return (
    <button className="button-sort group" onClick={handleFunction}>
      {sortState ? (
        <FaArrowAltCircleDown className="button-sort-icon group-hover:rotate-180" />
      ) : (
        <FaArrowAltCircleUp className="button-sort-icon group-hover:rotate-180" />
      )}
      {sortState ? "Show newest" : "Show oldest"}
    </button>
  );
};

MemeSortButton.propTypes = {
  sortState: PropTypes.bool.isRequired,
  handleFunction: PropTypes.func.isRequired,
};

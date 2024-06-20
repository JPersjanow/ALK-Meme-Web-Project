import PropTypes from "prop-types";
import { FaUserPlus } from "react-icons/fa6";

export const RegisterButton = ({ handleOnClick }) => {
  return (
    <button onClick={handleOnClick} className="button-login group">
      <FaUserPlus className="button-submit-icon group-hover:text-2xl" />
      Register
    </button>
  );
};

RegisterButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

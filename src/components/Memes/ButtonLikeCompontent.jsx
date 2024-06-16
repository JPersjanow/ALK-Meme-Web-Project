import PropTypes from "prop-types";

export const ButtonLikeComponent = ({
  updateLikes,
  buttonText,
  updateLikeSwitch,
  buttonClass,
  numberVotes,
}) => {
  return (
    <button
      className={`button-like ${buttonClass}`}
      onClick={updateLikes(updateLikeSwitch)}
    >
      <div className="container-like">
        <div>{buttonText}</div>
        <div>{numberVotes}</div>
      </div>
    </button>
  );
};

ButtonLikeComponent.propTypes = {
  updateLikes: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  updateLikeSwitch: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  numberVotes: PropTypes.number,
};

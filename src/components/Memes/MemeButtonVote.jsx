import PropTypes from "prop-types";

export const ButtonLikeComponent = ({
  updateLikes,
  buttonText,
  updateLikeSwitch,
  buttonClass,
  numberVotes, disabled=false
}) => {
  return (
    <button disabled={disabled}
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
  buttonText: PropTypes.object.isRequired || PropTypes.string.isRequired,
  updateLikeSwitch: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  numberVotes: PropTypes.number,
  disabled: PropTypes.bool
};

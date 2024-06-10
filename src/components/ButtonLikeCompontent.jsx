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

export const ButtonLikeComponent = ({
  updateLikes,
  buttonText,
  updateLikeSwitch,
}) => {
  return <button onClick={updateLikes(updateLikeSwitch)}>{buttonText}</button>;
};

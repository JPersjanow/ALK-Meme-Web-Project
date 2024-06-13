import { toast, Bounce } from "react-toastify";

const options = {
  position: "bottom-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
};

export const notify = (text) => {
  toast(text, options);
};

export const notifySuccess = (text) => {
  toast.success(text, options);
};

export const notifyError = (text) => {
  toast.error(text, options);
};

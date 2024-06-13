import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imgPlaceholder from "../../assets/img-placeholder.png";
import * as constants from "../../constants/index.js";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useCookies } from "react-cookie";
import {
  notifyError,
  notifySuccess,
} from "../Notifications/ToastNotification.jsx";

export const MemeFormComponent = () => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  let titlePlaceholder = "This will be your Meme Title, start typing..."
  const [title, setTitle] = useState(titlePlaceholder);
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(imgPlaceholder);
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.value.length <= 15) {
      setTitle(event.target.value);
    } else {
      notifyError("Meme title is too loong! 15 characters max")
    }

  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (!file.type.match(imageMimeType)) {
        alert("We only accept png, jpg or jpeg!");
        return;
      }
      setFile(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(title===titlePlaceholder) {
      notifyError("Be a little bit more creative! Change the title");
      return undefined;
    }
    if(img===imgPlaceholder) {
      notifyError("Be a little bit more creative! Change the image");
      return undefined;
    }

    const payload = {
      title: title,
      upvotes: 0,
      downvotes: 0,
      img: img,
      added_at: Date.now(),
      added_by_user: cookies.userData.username,
    };
    axios
      .post(constants.endpoints.MEMES, payload)
      .then((response) => {
        notifySuccess("Meme added");
        navigate(constants.routes.REGULARPAGEROUTE);
      })
      .catch((error) => {
        notifyError("Error occurred while adding meme!");
        navigate(constants.routes.ERRORROUTE, { state: { error: error.message, errorCode: error.code } });
      });
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (event) => {
        const { result } = event.target;
        if (result && !isCancel) {
          setImg(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div className="add-meme-container">
      <div className="meme-container--no-margin">
        <h1 className="meme-title--small">{title}</h1>
        <img src={img} alt={`Meme containing ${title}`} />
        <br></br>
        <h1 className="meme-title--small">Hilarious!</h1>
      </div>
      <div className="add-meme-form-container">
        <form onSubmit={handleSubmit} className="add-meme-form">
          <div className="add-meme-form-input-container">
            <label className="add-meme-form-label" htmlFor="memeUploadTitle">
              Meme Title
            </label>
            <input
              id="memeUploadTitle"
              className="add-meme-form-input"
              onChange={handleChange}
              placeholder=""
            ></input>
          </div>
          <div className="add-meme-form-input-container">
            <div className="file-upload">
              <FaCloudUploadAlt></FaCloudUploadAlt>
              <h3>Click box to upload</h3>
              <p>Maximun file size 10mb</p>
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>
          <button className="button-submit group" type="submit">
            <IoIosAddCircle className="button-submit-icon group-hover:rotate-180"></IoIosAddCircle>
            Add the Meme!
          </button>
        </form>
      </div>
    </div>
  );
};

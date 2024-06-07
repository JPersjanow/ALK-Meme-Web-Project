import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imgPlaceholder from "../img-placeholder.png";
import * as constants from "../constants";

export const MemeFormComponent = () => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [title, setTitle] = useState(
    "This will be your Meme Title! Start typing..."
  );
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(imgPlaceholder);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTitle(event.target.value);
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

    const payload = {
      title: title,
      upvotes: 0,
      downvotes: 0,
      img: img,
      added_at: Date.now(),
    };
    axios
      .post(constants.endpoints.MEMES, payload)
      .then((response) => {
        navigate(constants.routes.REGULARPAGEROUTE);
      })
      .catch((error) => {
        navigate(constants.routes.ERRORROUTE);
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
    <div className="add-mem-container">
      
      <div className="add-mem-img">
        <h2>{title}</h2>
        <img src={img} alt={`Meme containing ${title}`} />
      </div>
      <div className="add-mem-form-container">
        <form onSubmit={handleSubmit} className="add-mem-form">
          <label >
            Mem Title
          </label>
          <input className="add-mem-form-input" onChange={handleChange} placeholder=""></input>
          <div className="add-mem-form-choose">
            <label for="memeUpload" class="btn">
              Choose your Meme!
            </label>
            <br></br>
            <input id="memeUpload" type="file" onChange={handleFileChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import imgPlaceholder from "../img-placeholder.png";
import axios from "axios";
import * as constants from "../constants/constants";

const MemeFormComponent = () => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const [title, setTitle] = useState(
    "This will be your Meme Title! Start typing..."
  );
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(imgPlaceholder);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleFileChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (!file.type.match(imageMimeType)) {
        alert("Image mime type is not valid");
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
    axios.post(constants.endpoints.MEMES, payload);
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
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Meme Title"></input>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>{title}</h2>
        <img src={img} alt={`Meme containing ${title}`} />
      </div>
    </div>
  );
};

export default MemeFormComponent;

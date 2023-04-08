import "./style.css";
import { useEffect, useState } from "react";

function Meme() {
  const [image, setImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllMemes(data.data.memes);
      })
      .catch(() => console.log("Failed To Fetch API"));
  }, []);

  const generateImage = () => {
    const getRandomMeme = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[getRandomMeme];

    setImage((preMeme: any) => ({
      ...preMeme,
      randomImage: url,
    }));
  };
  function handleOnChange(event: any) {
    const { name, value } = event.target;

    setImage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="--form">
        <input
          type="text"
          className="--form-input"
          placeholder="Top Text"
          name="topText"
          value={image.topText}
          onChange={handleOnChange}
        />
        <input
          type="text"
          className="--form-input"
          placeholder="Bottom Text"
          name="bottomText"
          value={image.bottomText}
          onChange={handleOnChange}
        />
        <button className="--form-button" onClick={generateImage}>
          Generate Meme
          <img
            className="--button-img"
            src="https://apimeme.com/static/img/logo.png"
            alt=""
          />
        </button>
      </div>
      <div className="--meme">
        <img src={image.randomImage} className="--meme-img" />
        <h2 className="--meme-text top">{image.topText}</h2>
        <h2 className="--meme-text bottom">{image.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;

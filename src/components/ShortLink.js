import { useState } from "react";
import axios from "axios";

function ShortLink() {
  const [inputLink, setInputLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
        "https://api.allorigins.win/raw?url=https://api.shrtco.de/v2/shorten?url=" + inputLink,
      {
        url: inputLink,
      }
    );
    setShortLink(response.data.result.short_link);
  };

  return (
    <div className="shorten">
      <form onSubmit={handleSubmit}>
        <label>
          Nhập link muốn rút gọn:
          <input
            type="text"
            value={inputLink}
            onChange={(e) => setInputLink(e.target.value)}
          />
        </label>
        <button type="submit">Shorten</button>
      </form>
      {shortLink && (
        <div>
          <p>Link rút gọn:</p>
          <a href={shortLink} target="_blank" rel="noopener noreferrer">{shortLink}</a>
        </div>
      )}
    </div>
  );
}

export default ShortLink;
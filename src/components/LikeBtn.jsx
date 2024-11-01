import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  const LikeNumber = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  const message = `Liked By you and other ${LikeNumber} people !!`;
  return (
    <button className="like-button" onClick={handleLikeClick}>
      <span className="like-icon">{isLiked ? "❤️" : <BiLike />}</span>
      <span className="like-text">{isLiked ? message : "Like"}</span>
    </button>
  );
}

export default LikeButton;

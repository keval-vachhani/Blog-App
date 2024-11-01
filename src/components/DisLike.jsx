import React, { useState } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

function DislikeButton() {
  const [isDisliked, setIsDisliked] = useState(false);

  const handleDislikeClick = () => {
    setIsDisliked(!isDisliked);
  };

  return (
    <button className="like-button " onClick={handleDislikeClick}>
      <span className="Dislike-icon disLikeBtn">
        {isDisliked ? <AiFillDislike></AiFillDislike> : <AiOutlineDislike />}
      </span>
      Dislike
    </button>
  );
}

export default DislikeButton;

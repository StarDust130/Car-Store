import  { useState } from "react";
import { AiFillHeart } from "react-icons/ai";


function HeartIcon() {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed); // Toggle the state
  };

  return (
    <div className="like">
      <AiFillHeart className={isRed ? "red-heart" : ""} onClick={handleClick} />
    </div>
  );
}

export default HeartIcon;

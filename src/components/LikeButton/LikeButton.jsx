import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button className="like-btn" onClick={() => handleClick()}>
      {count}
    </button>
  );
}

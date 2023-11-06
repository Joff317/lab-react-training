import "./rating.css";
export default function Rating({ children }) {
  const ratingValue = Math.round(children);

  const star = [];

  for (let i = 0; i < 5; i++) {
    if (i < ratingValue) {
      star.push("★");
    } else {
      star.push("☆");
    }
  }

  return <div>{star.join(" ")}</div>;
}

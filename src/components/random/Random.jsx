import "./random.css";
export default function Random(props) {
  const { min, max } = props;

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const random = randomNumber(min, max);

  return (
    <div>
      <p className="para">
        Random Value between {min} and {max} = {random}
      </p>
    </div>
  );
}

import "./driverCard.css";
export default function DriverCard({ name, rating, img, car }) {
  const ratingValue = Math.round(rating);

  const star = [];

  for (let i = 0; i < 5; i++) {
    if (i < ratingValue) {
      star.push("★");
    } else {
      star.push("☆");
    }
  }

  return (
    <div className="driver-card">
      <img className="img" src={img} alt="" />
      <div className="right-container">
        <p className="name">{name}</p>
        <div className="rating">{star.join(" ")}</div>
        <p className="car">
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

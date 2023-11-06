import "./creditCard.css";
export default function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const lastDigits = number.slice(-4);

  return (
    <div
      style={{ background: `${bgColor}`, color: `${color}` }}
      className="credit-card-container"
    >
      <div className="up-container">
        <p className="type">{props.type}</p>
      </div>
      <div className="middle-container">**** **** **** {lastDigits}</div>
      <div className="bottom-container">
        <div className="up-bottom">
          <p>
            Expires : 0{expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
}

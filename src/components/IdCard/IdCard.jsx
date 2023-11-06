import "./idCard.css";
export default function IdCard(props) {
  return (
    <div className="cards">
      <div className="first-card">
        <img src={props.picture} alt="test" />
        <div className="left-container">
          <p>Last Name : {props.lastName}</p>
          <p>First name : {props.firstName}</p>
          <p>gender : {props.gender}</p>
          <p>height : {props.height}</p>
          <p>birth : {props.birth}</p>
        </div>
      </div>
    </div>
  );
}

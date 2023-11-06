export default function BoxColor(props) {
  const { r, g, b } = props;

  const style = {
    width: "200px",
    height: "200px",
    background: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div style={style}>
      <p>{`RGB(${r},${g},${b})`}</p>
    </div>
  );
}

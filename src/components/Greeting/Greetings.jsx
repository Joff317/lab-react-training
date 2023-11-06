import "./greeting.css";
export default function Greetings({ lang, children }) {
  let text = "";

  switch (lang) {
    case "de":
      text = "Halo";
      break;
    case "es":
      text = "hola";
      break;
    case "fr":
      text = "Bonjour";
      break;
    default:
      text = "Hello";
  }

  return (
    <>
      <p className="greeting">
        {text}, {children}
      </p>
    </>
  );
}

import { whatsappUrl } from "../data.js";
import Icon from "./Icon.jsx";

export default function ContactButton({
  children = "Vamos conversar?",
  className = "",
  highlight = false,
  whatsappIcon = false,
}) {
  const showWhatsapp = highlight || whatsappIcon;

  return (
    <a
      className={`button ${highlight ? "whatsapp-highlight" : ""} ${className}`}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {showWhatsapp && <Icon name="whatsapp" size={20} />}
      {children}
      {!showWhatsapp && <Icon name="diagonal" size={19} />}
    </a>
  );
}

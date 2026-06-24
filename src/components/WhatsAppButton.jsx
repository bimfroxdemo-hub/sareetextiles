import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917737221049"
      target="_blank"
      rel="noreferrer"
      className="
      fixed bottom-6 right-6 z-50
      flex items-center gap-3
      bg-green-500
      text-white
      px-5 py-3
      rounded-full
      shadow-xl
      hover:bg-green-600
      hover:scale-105
      transition-all duration-300
      "
    >

      <FaWhatsapp className="text-2xl" />

      

    </a>
  );
}

export default WhatsAppButton;
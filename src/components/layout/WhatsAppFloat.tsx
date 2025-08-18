import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Gostaria de fazer um pedido pelo site da Gás Ideal.";
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
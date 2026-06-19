import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);

    const whatsappNumber = "923021556001"; // Replace with your WhatsApp number (country code + number without +)
    const message = "Hi EuroPathways! I'd like to know more about studying abroad.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Chat with us on WhatsApp"
        >
            {/* Label that appears on hover */}
            {isHovered && (
                <div
                    className="rounded-full px-4 py-2.5 shadow-lg whitespace-nowrap text-sm"
                    style={{
                        background: "#183a5c",
                        color: "#ffffff",
                        fontWeight: 600,
                        animation: "slideIn 0.2s ease-out",
                    }}
                >
                    Chat with us
                </div>
            )}

            {/* WhatsApp Button */}
            <div
                className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                    background: "#25D366",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
            >
                <MessageCircle size={28} color="white" strokeWidth={1.5} />
            </div>

            <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </a>
    );
}

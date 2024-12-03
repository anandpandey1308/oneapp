import { MessageCircle } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export const HomePageConfig = {
    title: "Hello, OneApp Creator!",
    noticeText: "Welcome to OneApp. Here’s a special message from our team.",
    telegram: {
        icon: FaTelegramPlane,
        title: "Join Our Telegram Channel",
        description: "A community of 10k+ aspiring creators.",
        link: "https://t.me/YourChannel",
        buttonLabel: "Join Now",
        buttonColor: "bg-orange-500",
        textColor: "text-black"
    },
    whatsApp: {
        icon: MessageCircle,
        title: "Insider WhatsApp Community",
        description: "Exclusive content and pro creator tips.",
        link: "https://wa.me/YourNumber",
        buttonLabel: "Unlock Access",
        buttonColor: "bg-green-500",
        textColor: "text-white"
    }
};

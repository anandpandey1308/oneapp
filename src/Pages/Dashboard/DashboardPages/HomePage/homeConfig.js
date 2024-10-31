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
        buttonColor: "bg-white",
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
    },
    inspirationCards : [
        { image: '/api/placeholder/400/320', text: 'Discover beauty in everyday moments. A kind word, a sunset, or a simple smile can inspire and uplift your spirit.' },
        { image: '/api/placeholder/400/320', text: 'Inspiration can be found in the most unexpected places. Embrace the beauty around you, whether it’s a stunning sunset, a captivating book, or a heartfelt conversation. Every moment offers a chance to learn and grow. Keep your eyes open, your heart receptive, and let creativity guide your journey forward.' },
        { image: '/api/placeholder/400/320', text: 'Build your personal brand' },
        { image: '/api/placeholder/400/320', text: 'Craft compelling stories' },
        { image: '/api/placeholder/400/320', text: 'Make professional videos' },
        { image: '/api/placeholder/400/320', text: 'Design eye-catching graphics' },
      ]
};

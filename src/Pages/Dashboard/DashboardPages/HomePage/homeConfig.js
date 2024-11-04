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
        { image: '', text: 'Discover beauty in everyday moments. A kind word, a sunset, or a simple smile can inspire and uplift your spirit.' },
        { image: '', text: 'Inspiration can be found in the most unexpected places. Embrace the beauty around you, whether it’s a stunning sunset, a captivating book, or a heartfelt conversation. Every moment offers a chance to learn and grow. Keep your eyes open, your heart receptive, and let creativity guide your journey forward.' },
        { image: '', text: 'Build your personal brand' },
        { image: '', text: 'Craft compelling stories' },
        { image: '', text: 'Make professional videos' },
        { image: '', text: 'Design eye-catching graphics' },
    ],
    exclusiveCourses: [
        { image: '', altText: 'Facebook', title: 'Facebook Marketing', description: 'OneApp . 10 Video', isLocked: true},
        { image: '', altText: 'Youtube', title: 'Youtube Marketing', description: 'OneApp . 12 Video', isLocked: true },
        { image: '', altText: 'Full Stack', title: 'Full Stack Developer', description: 'OneApp . 13 Video', isLocked: true },
        { image: '', altText: 'Email', title: 'Email Marketing', description: 'OneApp . 9 Video', isLocked: true },
    ],
    topResources: [
        {
          image: "",
          altText: "Resource 1",
          title: "Getting Started Guide",
          description: "Essential resources for beginners"
        },
        {
          image: "",
          altText: "Resource 2",
          title: "Advanced Techniques",
          description: "In-depth tutorials and guides"
        }
    ]
};

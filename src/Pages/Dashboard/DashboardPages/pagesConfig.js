import { GoPlus } from "react-icons/go";
import { FaCalendarAlt, FaDiscord, FaLock, FaTelegramPlane, FaChartBar } from "react-icons/fa";

export const pagesConfig = {
  eventsPage: {
    title: "Event Page",
    button: {
      label: "Create Event",
      icon: GoPlus,
      ariaLabel: "Create Event",
    },
    bgGradient: "bg-gradient-to-b from-[#ADD8E6] to-[#FFD700]",
    noContent: [
      {
        title: "No Published events yet",
        description: "No event yet? No problem! Create a new event now and start generating income.",
        buttonTitle: "Create Event",
        isButton: true,
      },
      {
        title: "No unpublished events yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
      {
        title: "No draft events yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
    ],
    tabs: [
      {
        title: "Published Events",
        value: "0",
        content: [
          { title: "Event 1", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 2", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 3", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 4", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 5", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 6", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 7", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 8", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 9", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 10", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 11", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 12", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 13", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 14", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 15", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          

        ],
      },
      {
        title: "Unpublished Events",
        value: "0",
        content: [],
      },
      {
        title: "Draft Events",
        value: "0",
        content: [],
      },
    ],
    icon: FaCalendarAlt,
    cardData: [
      {
        title: "TOTAL SALE",
        value: "0",
        description: "The total amount of revenue generated this month.",
      },
      {
        title: "TOTAL REVENUE",
        value: "$ 0",
        description: "The number of payments currently pending.",
      },
      {
        title: "CONVERSION RATE",
        value: "0",
        description: "The total number of successful transactions this month.",
      },
    ],
    path: '/app/create-event'
  } ,
  discordPage: {
    title: "Discord Page",
    button: {
      label: "Create Discord Group",
      icon: GoPlus,
      ariaLabel: "Create Discord Group",
    },
    bgGradient: "bg-gradient-to-b from-[#87CEEB] to-[#B0E0E6]",
    noContent: [
      {
        title: "No published discord yet!",
        description: "No discord yet? No problem! Create a new discord now and start generating income.",
        buttonTitle: "Create Discord Group",
        isButton: true,
      },
      {
        title: "No unpublished discord yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
      {
        title: "No draft discord yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
    ],
    tabs: [
      {
        title: "Published Discord",
        value: "0",
        content: [
          { title: "Event 1", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 2", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 3", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 4", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 5", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 6", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 7", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 8", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 9", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 10", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 11", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 12", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 13", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 14", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 15", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
        ],
      },
      { title: "Unpublished Discord", value: "1", content: [] },
      { title: "Draft Discord", value: "2", content: [] },
    ],
    icon: FaDiscord,
    cardData: [
      {
        title: "TOTAL SALE",
        value: "0",
        description: "The total amount of revenue generated this month."
      },
      {
        title: "TOTAL REVENUE",
        value: "$ 0",
        description: "The number of payments currently pending."
      },
      {
        title: "CONVERSION RATE",
        value: "0",
        description: "The total number of successful transactions this month."
      }
    ],
  },

  lockedContentPage: {
    title: "Locked Content",
    button: {
      label: "Create Locked Item",
      icon: GoPlus,
      ariaLabel: "Create Locked Item",
    },
    bgGradient: "bg-gradient-to-b from-[#FFD700] to-[#FF8C00]",
    noContent: [
      {
        title: "No Published locked content yet",
        description: "No locked content yet? No problem! Create a new locked content now and start generating income.",
        buttonTitle: "Create Locked Item",
        isButton: true,
      },
      {
        title: "No Unpublished locked content",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
      {
        title: "No Draft locked content",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
    ],
    tabs: [
      {
        title: "Published Locked Items",
        value: "0",
        content: [
          { title: "Event 1", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 2", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 3", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 4", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 5", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 6", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 7", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 8", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 9", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 10", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 11", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 12", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 13", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 14", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 15", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
        ],
      },
      { title: "Unpublished Locked Items", value: "1", content: [] },
      { title: "Draft Locked Items", value: "2", content: [] },
    ],
    icon: FaLock,
    path: '/app/create-locked-content',
    cardData: [
      {
        title: "TOTAL SALE",
        value: "0",
        description: "The total amount of revenue generated this month."
      },
      {
        title: "TOTAL REVENUE",
        value: "$ 0",
        description: "The number of payments currently pending."
      },
      {
        title: "CONVERSION RATE",
        value: "0",
        description: "The total number of successful transactions this month."
      }
    ],
  },

  telegramPage: {
    title: "Telegram Page",
    button: {
      label: "Create Telegram",
      icon: GoPlus,
      ariaLabel: "Create Telegram",
    },
    bgGradient: "bg-gradient-to-b from-[#40E0D0] to-[#48D1CC]",
    noContent: [
      {
        title: "No Published telegram yet",
        description: "No telegram yet? No problem! Create a new telegram now and start generating income.",
        buttonTitle: "Create Telegram",
        isButton: true,
      },
      {
        title: "No unpublished telegram yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
      {
        title: "No draft telegram yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
    ],
    tabs: [
      {
        title: "Published Telegram",
        value: "0",
        content: [
          { title: "Event 1", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 2", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 3", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 4", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 5", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 6", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 7", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 8", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 9", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 10", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 11", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 12", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 13", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 14", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 15", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
        ],
      },
      { title: "Unpublished Telegram", value: "1", content: [] },
      { title: "Draft Telegram", value: "2", content: [] },
    ],
    icon: FaTelegramPlane,
    cardData: [
      {
        title: "TOTAL SALE",
        value: "0",
        description: "The total amount of revenue generated this month."
      },
      {
        title: "TOTAL REVENUE",
        value: "$ 0",
        description: "The number of payments currently pending."
      },
      {
        title: "CONVERSION RATE",
        value: "0",
        description: "The total number of successful transactions this month."
      }
    ],
  },

  paymentPage: {
    title: "Payment Page",
    button: {
      label: "Create Payment Page",
      icon: GoPlus,
      ariaLabel: "Create Payment Page",
    },
    bgGradient: "bg-gradient-to-b from-[#87CEEB] to-[#4682B4]",
    noContent: [
      {
        title: "No Published payment page yet",
        description: "No payment page yet? No problem! Create a new payment page now and start generating income.",
        buttonTitle: "Create Payment Page",
        isButton: true,
      },
      {
        title: "No unpublished payment page yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
      {
        title: "No draft payment page yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
    ],
    tabs: [
      {
        title: "Published Payment Pages",
        value: "0",
        content: [
          { title: "Event 1", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 2", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 3", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 4", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 5", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 6", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 7", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 8", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 9", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 10", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 11", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 12", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 13", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 14", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 15", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
        ],
      },
      { title: "Unpublished Payment Pages", value: "1", content: [] },
      { title: "Draft Payment Pages", value: "2", content: [] },
    ],
    icon: FaChartBar,
    path: '/app/payment',
    cardData: [
      {
        title: "TOTAL SALE",
        value: "0",
        description: "The total amount of revenue generated this month."
      },
      {
        title: "TOTAL REVENUE",
        value: "$ 0",
        description: "The number of payments currently pending."
      },
      {
        title: "CONVERSION RATE",
        value: "0",
        description: "The total number of successful transactions this month."
      }
    ],
  },

  coursesPage: {
    title: "Courses",
    button: {
      label: "Create Course",
      icon: GoPlus,
      ariaLabel: "Create Course",
    },
    bgGradient: "bg-gradient-to-b from-[#8A2BE2] to-[#9370DB]",
    noContent: [
      {
        title: "No Published courses yet!",
        description: "No course yet? No problem! Create a new course now and start generating income.",
        buttonTitle: "Create Course",
        isButton: true,
      },
      {
        title: "No unpublished courses yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
      {
        title: "No draft courses yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
    ],
    tabs: [
      {
        title: "Published Courses",
        value: "0",
        content: [
          { title: "Event 1", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 2", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 3", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 4", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 5", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 6", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 7", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 8", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 9", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 10", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 11", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 12", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 13", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true },
          { title: "Event 14", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
          { title: "Event 15", price: "$200", sale: 30, revenue: "$6000", paymentEnabled: false },
        ],
      },
      { title: "Unpublished Courses", value: "1", content: [] },
      { title: "Draft Courses", value: "2", content: [] },
    ],
    icon: GoPlus,
    path: '/app/create-course',
    cardData: [
      {
        title: "TOTAL SALE",
        value: "0",
        description: "The total amount of revenue generated this month."
      },
      {
        title: "TOTAL REVENUE",
        value: "$ 0",
        description: "The number of payments currently pending."
      },
      {
        title: "CONVERSION RATE",
        value: "0",
        description: "The total number of successful transactions this month."
      }
    ],
  },
  
};

export default pagesConfig;

import { GoPlus } from "react-icons/go";
import { FaCalendarAlt, FaDiscord, FaLock, FaTelegramPlane, FaChartBar } from "react-icons/fa";

export const pagesConfig = {
  webinarPage: {
    title: "Webinar Page",
    button: {
      label: "Create Webinar",
      icon: GoPlus,
      ariaLabel: "Create Webinar",
    },
    bgGradient: "bg-gradient-to-b from-[#ADD8E6] to-[#FFD700]",
    noContent: [
      {
        title: "No Published webinar yet",
        description: "No event yet? No problem! Create a new event now and start generating income.",
        buttonTitle: "Create Webinar",
        isButton: true,
      },
      {
        title: "No unpublished webinar yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
      {
        title: "No draft webinar yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
    ],
    tabs: [
      {
        title: "Published webinar",
        value: "0",
        content: []
      },
      {
        title: "Unpublished webinar",
        value: "0",
        content: [],
      },
      {
        title: "Draft webinar",
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
    path: '/app/create-webinar'
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
        content: [],
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
        content: [],
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
        content: [],
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

  payingUp: {
    title: "Paying Up",
    button: {
      label: "Create paying up",
      icon: GoPlus,
      ariaLabel: "Create paying up",
    },
    bgGradient: "bg-gradient-to-b from-[#87CEEB] to-[#4682B4]",
    noContent: [
      {
        title: "No Published paying up yet",
        description: "No paying up yet? No problem! Create a new paying up now and start generating income.",
        buttonTitle: "Create paying up",
        isButton: true,
      },
      {
        title: "No unpublished paying up yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
      {
        title: "No draft paying up yet!",
        description: "",
        buttonTitle: "",
        isButton: false,
      },
    ],
    tabs: [
      {
        title: "Live",
        value: "1",
        content: [],
      },
      // { title: "Unpublished paying ups", value: "1", content: [] },
      { title: "Draft Paying up", value: "2", content: [] },
    ],
    icon: FaChartBar,
    path: '/app/create-paying-up',
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
          { title: "Event 1", price: "$100", sale: 50, revenue: "$5000", paymentEnabled: true, shareLink:"" }
        ]
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

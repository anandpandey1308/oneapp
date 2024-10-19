export const KYCStatus = [
    { status: "Pending KYC", color: "bg-yellow-500" },
    { status: "Verified", color: "bg-green-400" },
    { status: "Under Review", color: "bg-yellow-500" },
    { status: "Rejected", color: "bg-red-500" },
  ];

export const cardData = [
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
  ];


export const tabContent = [
  {
    title: "Published",
    content: "",
    value: 0
  },
  {
    title: "Unpublished",
    content: "",
    value: 0
  },
  {
    title: "Draft",
    content: "",
    value: 0
  },
  // {
  //   title: "Published",
  //   content: "Content for Tab 1",
  //   value: 0
  // },
  // {
  //   title: "Unpublished",
  //   content: "Content for Tab 2",
  //   value: 0
  // },
  // {
  //   title: "Draft",
  //   content: "Content for Tab 3",
  //   value: 0
  // },
];

export const noContentData = {
  discord: [
    {
      title: "No published discord yet!",
      description: "No discord yet? No problem! Create a new discord now and start generating income.",
      button_title: "Create Discord Group",
      isbutton: true,
    },
    {
      title: "No unpublished discord yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
    {
      title: "No draft discord yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
  ],
  courses: [
    {
      title: "No Published courses yet!",
      description: "No course yet? No problem! Create a new course now and start generating income.",
      button_title: "Create Course",
      isbutton: true,
    },
    {
      title: "No unpublished courses yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
    {
      title: "No draft courses yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
  ],
  payment: [
    {
      title: "No Published payment page yet",
      description: "No payment page yet? No problem! Create a new payment page now and start generating income.",
      button_title: "Create Payment Page",
      isbutton: true,
    },
    {
      title: "No unpublished payment page yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
    {
      title: "No draft payment page yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
  ],
  events: [
    {
      title: "No Published events yet",
      description: "No event yet? No problem! Create a new event now and start generating income.",
      button_title: "Create Event",
      isbutton: true,
    },
    {
      title: "No unpublished events yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
    {
      title: "No draft events yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
  ],
  telegram: [
    {
      title: "No Published telegram yet",
      description: "No telegram yet? No problem! Create a new telegram now and start generating income.",
      button_title: "Create Telegram",
      isbutton: true,
    },
    {
      title: "No unpublished telegram yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
    {
      title: "No draft telegram yet!",
      description: "",
      button_title: "",
      isbutton: false,
    },
  ],
  lockedContent: [
    {
      title: "No Published locked content yet",
      description: "No locked content yet? No problem! Create a new locked content now and start generating income.",
      isbutton: true,
      button_title: "Create Locked Item",
    },
    {
      title: "No Unpublished locked content",
      description: "",
      isbutton: false,
      button_title: "",
    },
    {
      title: "No Draft locked content",
      description: "",
      isbutton: false,
      button_title: "",
    },
  ],
};

export const audienceTabContent = [
  {
    title: "Customers",
    content: "",
    value: 0
  },
  {
    title: "Followers",
    content: "",
    value: 0
  }
  // {
  //   title: "Customers",
  //   content: "Content for Tab 1",
  //   value: 0
  // },
  // {
  //   title: "Followers",
  //   content: "Content for Tab 2",
  //   value: 0
  // }
];

export const audienceTabContentData = {
  customers: {
    title: "One place to view, manage, and know your customers",
    description: [
      "Find customers giving you the maximum revenue",
      "Assess the best performing marketing campaigns",
      "Filter out the customers who's subscriptions are ending in a click"
    ],
    buttonTitle: "Watch how it works"
  },
  followers: {
    title: "Build your own audience with followers on OneApp",
    description: [
      "Visitors to your SuperProfile can now follow you for email or sms updates",
      "Export your follower list with ease to send out emails or WhatsApp messages",
      "Easily convert your followers into paid customers and track conversion"
    ],
    buttonTitle: "Enable followers"
  }
}
import { Home, BarChart, Users, Settings } from "lucide-react";

export const dashboardConfig = {
  logo: {
    src: "https://via.placeholder.com/150",
    alt: "Logo",
    title: "MyApp",
  },
  sidebar: [
    { label: "Home", icon: Home, path: "/home" },
    { label: "Analytics", icon: BarChart, path: "/analytics" },
    { label: "Users", icon: Users, path: "/users" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ],
  mainContent: [
    { title: "Overview", description: "Here's a quick overview of the stats." },
    {
      title: "Analytics",
      description: "Track the latest trends and performance data here.",
    },
    {
      title: "User Growth",
      description: "Check user sign-ups and engagement metrics here.",
    },
    {
      title: "Settings",
      description: "Manage your app settings and configurations.",
    },
  ],
};

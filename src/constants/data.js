import {
  Cloud,
  Security,
  IntegrationInstructions,
  AutoAwesomeMotion,
} from "@mui/icons-material";

export const servicesData = [
  {
    id: "cloud-infra",
    category: "Cloud & Infrastructure",
    description: "Modern cloud solutions tailored to your business needs",
    items: [
      {
        id: "cloud-migration",
        title: "Cloud Migration",
        description:
          "Seamless transition to cloud platforms with zero downtime",
        icon: <Cloud fontSize="large" color="primary" />,
      },
      {
        id: "security-solutions",
        title: "Security Solutions",
        description:
          "Comprehensive protection for your digital assets and data",
        icon: <Security fontSize="large" color="primary" />,
      },
    ],
  },
];

export const featuresData = [
  {
    id: "custom-design",
    title: "Custom Web Design",
    description:
      "Tailored designs that reflect your brand identity and engage your audience.",
    icon: "design",
  },
  {
    id: "responsive-dev",
    title: "Responsive Development",
    description:
      "Flawless performance across all devices with modern development practices.",
    icon: "responsive",
  },
  {
    id: "seo-opt",
    title: "SEO Optimization",
    description:
      "Built-in search engine optimization to help you rank higher in search results.",
    icon: "seo",
  },
];

export const pricingData = [
  {
    id: "basic-plan",
    name: "basic",
    title: "Basic",
    description:
      "Perfect for individuals looking to streamline their scheduling with essential features.",
    price: { monthly: 7.9, annually: 27.9 },
    features: [
      "Automated Meeting Scheduling",
      "Basic Calendar Sync",
      "Daily Schedule Overview",
      "Email Reminders",
      "Task Management",
      "24/7 Customer Support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    id: "pro-plan",
    name: "pro",
    title: "Pro",
    description:
      "Most for small teams needing advanced scheduling and customization options.",
    price: { monthly: 14.9, annually: 99.9 },
    features: [
      "All Basic Plan Features",
      "Advanced Calendar Integrations",
      "Customizable Notifications",
      "Priority Support",
      "Analytics and Insights",
      "Group Scheduling",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    id: "enterprise-plan",
    name: "enterprise",
    title: "Enterprise",
    description:
      "Tailored for large organizations requiring enterprise-grade features and integrations.",
    price: { monthly: "Custom", annually: "Custom" },
    features: [
      "All Pro Plan Features",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Advanced Security Features",
      "Team Collaboration Tools",
      "Onboarding and Training",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export const testimonialsData = [
  {
    id: "testimonial-1",
    text: "Pixel Forge transformed our online presence completely. Our conversion rates increased by 150% within three months!",
    name: "Fatima Khoury",
    role: "CEO, TechSolutions",
    initials: "FK",
  },
  {
    id: "testimonial-2",
    text: "The website they built for us exceeded all expectations. The user experience is flawless and our sales have doubled.",
    name: "Hassan Ali",
    role: "Marketing Director, InnovateCo",
    initials: "HA",
  },
];

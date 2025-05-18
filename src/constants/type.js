import { ReactNode } from "react";

// Service Types
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ServiceData {
  id: string;
  category: string;
  description: string;
  items: ServiceItem[];
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Feature Types
export interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Pricing Types
export interface PriceOption {
  monthly: number | string;
  annually: number | string;
}

export interface PricingPlan {
  id: string;
  name: string;
  title: string;
  description: string;
  price: PriceOption;
  features: string[];
  cta: string;
  highlight: boolean;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  text: string;
  name: string;
  role: string;
  initials: string;
}

import { Tracking, EmergencyCare, DetailsInfo, Consultation, OnlinePharmacy, SearchDoctor } from "../assets/services/SVGImages";
import bloodtest from "../assets/testimonials/bloodtest.png";
import laboratory from "../assets/testimonials/laboratory.png";
import faceMask from "../assets/testimonials/faceMask.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "findADoctor",
    title: "Find a Doctor",
  },
  {
    id: "apps",
    title: "Apps",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "about",
    title: "About Us",
  },
];

export const services = [
  {
    id: "",
    title: "Search Doctor",
    description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    icon: SearchDoctor,
  },
  {
    id: "Online pharmacy",
    title: "Online pharmacy",
    description: "Buy  your medicines with our mobile application with a simple delivery system",
    icon: OnlinePharmacy,
  },
  { id: "", title: "Consultation", description: "Free consultation with our trusted doctors and get the best recommendations", icon: Consultation },
  { id: "", title: "Details info", description: "Free consultation with our trusted doctors and get the best recommendations", icon: DetailsInfo },
  {
    id: "",
    title: "Emergency care",
    description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
    icon: EmergencyCare,
  },
  { id: "", title: "Tracking", description: "Track and save your medical history and health data ", icon: Tracking },
];

export const articles = [
  {
    id: "bloodtest",
    title: "Disease detection, check up in the laboratory",
    description: "In this case, the role of the health laboratory is very important to do a disease detection...",
    image: bloodtest,
  },
  {
    id: "laboratory",
    title: "Herbal medicines that are safe for consumption",
    description: "Herbal medicine is very widely used at this time because of its very good for your health...",
    image: laboratory,
  },
  {
    id: "faceMask",
    title: "Natural care for healthy facial skin",
    description: "A healthy lifestyle should start from now and also for your skin health. There are some...",
    image: faceMask,
  },
];

export const about = [
  { id: "Company", title: "Company", items: ["About", "Testimonials", "Find a doctor", "Apps"] },
  { id: "Region", title: "Region", items: ["Indonesia", "Singapore", "Hongkong", "Canada"] },
  { id: "Help", title: "Help", items: ["Help center", "Contact support", "Instructions", "How it works"] },
];

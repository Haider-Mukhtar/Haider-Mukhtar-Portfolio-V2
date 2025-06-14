import { BriefcaseBusiness, FolderGit2, House, Star } from "lucide-react";
import Photo from "../assets/img/myProfilePhoto.jpg";
import EventHubProject from "../assets/img/projects/eventhubProject.png";
import MaxFitProject from "../assets/img/projects/maxfitProject.png";
import TagExtractorProject from "../assets/img/projects/tagextractor.png";
import TestImage from "../assets/img/slider/test.png";
import Test1Image from "../assets/img/slider/test1.png";
import MaleAvator from "../assets/img/icons/male-avatar.png";
import FemaleAvator from "../assets/img/icons/female-avatar.png";
import ReactIcon from "../assets/img/icons/skills-tools/react.png";
import AndroidStudioIcon from "../assets/img/icons/skills-tools/androidstudio.png";
import BootstrapIcon from "../assets/img/icons/skills-tools/bootstrap.png";
import ChromeIcon from "../assets/img/icons/skills-tools/chrome.png";
import CSSIcon from "../assets/img/icons/skills-tools/css.png";
import ExpoIcon from "../assets/img/icons/skills-tools/expo.png";
import FirebaseIcon from "../assets/img/icons/skills-tools/firebase.png";
import GithubIcon from "../assets/img/icons/skills-tools/github.png";
import HTMLIcon from "../assets/img/icons/skills-tools/html.png";
import JavaScriptIcon from "../assets/img/icons/skills-tools/javascript.png";
import TailwindCSSIcon from "../assets/img/icons/skills-tools/tailwindcss.png";
import TypeScriptIcon from "../assets/img/icons/skills-tools/typescript.png";
import VSCodeIcon from "../assets/img/icons/skills-tools/vscode.png";
import LinkedInIcon from "../assets/img/icons/social-icons/linkedin.png";
import DiscordIcon from "../assets/img/icons/social-icons/discord.png";
import InstagramIcon from "../assets/img/icons/social-icons/instagram.png";
import MediumIcon from "../assets/img/icons/social-icons/medium.png";

export const NavLinks = [
  { id: 1, name: "Home", url: "/#Hero", icon: House },
  { id: 2, name: "Experience", url: "/#Experience", icon: BriefcaseBusiness },
  { id: 3, name: "Work", url: "/#Work", icon: FolderGit2 },
  { id: 3, name: "Testimonials", url: "/#Testimonials", icon: Star },
];

export const firstName = "Haider";
export const lastName = "Mukhtar";
export const fullName = "Haider Mukhtar";
export const profilePhoto = Photo;

// Social Links
export const GitHubProfile = "https://github.com/Haider-Mukhtar";
export const LinkedInProfile = "https://www.linkedin.com/in/haider-mukhtar/";
export const MediumProfile = "https://medium.com/@haidermukhtar";
export const InstagramProfile = "https://www.instagram.com/haider_mukhtar_ch/";

// Hero Section
export const HeroSectionHeading =
  "Frontend Developer </br> for  Web & Mobile Apps";
// export const HeroSectionHeading = "Creative Frontend Developer <br/> for Scalable Web & Mobile Apps ";
export const HeroSectionSubHeading =
  "Building fast, elegant interfaces with React, React Native, and Tailwind CSS.";
export const HeroLetsConnectButton = "Let's Connect";
export const HeroLetsSeeMyWorkButton = "See My Work";

// Image Slider Section
export const SliderImagesData = [
  {
    id: 1,
    type: "phone",
    image: TestImage,
  },
  {
    id: 2,
    type: "web",
    image: Test1Image,
  },
  {
    id: 3,
    type: "phone",
    image: TestImage,
  },
  {
    id: 4,
    type: "web",
    image: Test1Image,
  },
  {
    id: 5,
    type: "phone",
    image: TestImage,
  },
  {
    id: 6,
    type: "web",
    image: Test1Image,
  },
];

// Project Section
export const ProjectsSectionHeading = "My Recent Work";
export const ProjectsSectionSubHeading =
  "Check out what I've been working on lately.";
export const ProjectsSectionGithubButton = "View More on";
export const ProjectsCardViewLiveSiteButton = "View Live Site";
export const ProjectCardsData = [
  {
    id: 1,
    title: "EventHub App",
    description:
      "EventHub App, developed in React Native & Firebase, served as my internship practice application at MikroStar Tech.",
    image: EventHubProject,
    type: "Personal",
    year: "2023",
    technologies: ["React Native", "JavaScript", "FireBase"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl:
      "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App/tree/main/EventHubAppScreenshots",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
  },
  {
    id: 2,
    title: "Maxfit App",
    description: "MaxFit App, developed in React Native & Firebase.",
    image: MaxFitProject,
    type: "Personal",
    year: "2024",
    technologies: ["React Native", "JavaScript", "FireBase"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl: "https://github.com/Haider-Mukhtar/ReactNative-MaxFit-App",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-MaxFit-App",
  },
  {
    id: 3,
    title: "Tag Extractor",
    description:
      "Youtube Tag Extractor using Vite, React, TypeScript, Tailwind CSS.",
    image: TagExtractorProject,
    type: "Personal",
    year: "2025",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl: "https://tag-extractor.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Tag-Extractor",
  },
  {
    id: 4,
    title: "Firebase Push Notifications",
    description: "React Native - Push Notification - Firebase",
    image: TagExtractorProject,
    type: "Personal",
    year: "2025",
    technologies: [
      "React Native",
      "TypeScript",
      "FireBase",
      "Push Notification",
    ],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl:
      "https://github.com/Haider-Mukhtar/ReactNative-Push-Notification?tab=readme-ov-file#demo",
    githubUrl:
      "https://github.com/Haider-Mukhtar/ReactNative-Push-Notification",
  },
];

// Testimonials Section
export const TestimonialsSectionHeading = "What Clients Say About Me";
export const TestimonialsSectionSubHeading =
  "Don't just take my word for it. See what my clients have to say about my work.";
export const testimonialsData = [
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: FemaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
];

// Experience Section
export const ExperienceSectionHeading = "Work Experience";
export const ExperienceSectionSubHeading =
  "Here's a look at my current role and previous experiences.";
export const ExperienceData = [
  {
    company: "DigiMark Developers",
    position: "Junior Software Engineer",
    duration: "Dec 2024 - Present",
    location: "Johar Town, Lahore, Pakistan",
    description:
      "Acquired proficiency in Tailwind CSS, JavaScript, TypeScript, React, React Native and Expo. Gained hands-on experience in developing visually appealing and user-friendly web and mobile interfaces. Crafted responsive web designs that enhance user experience.",
    technologies: [
      "Tailwind CSS",
      "React",
      "JavaScript",
      "TypeScript",
      "React Native",
      "Expo",
      "GitHub",
    ],
    type: "current",
  },
  {
    company: "MikroStar Tech (SMC-Pvt.) Ltd.",
    position: "Mobile Application Development - Internship",
    duration: "Oct 2023 - Jan 2024",
    location: "Green Acres Housing Society, Lahore, Pakistan",
    description:
      "Developed interactive mobile applications using Android Studio, Java, JavaScript, and Firebase. Dedicated significant time to mastering React Native for enhanced mobile solutions. Completed a comprehensive project demonstrating advanced mobile app development skills.",
    technologies: [
      "JavaScript",
      "React Native",
      "Android Studio",
      "Firebase",
      "GitHub",
    ],
    type: "previous",
  },
  {
    company: "Cosmosoft Business Solutions Pvt. Ltd.",
    position: "Front-End Web Development - Internship",
    duration: "July 2022 - Sep 2022",
    location: "Johar Town, Lahore, Pakistan",
    description:
      "Acquired proficiency in HTML, CSS, Tailwind CSS, Bootstrap, and jQuery. Gained hands-on experience in developing visually appealing and user-friendly web interfaces. Crafted responsive web designs that enhance user experience.",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "JavaScript",
    ],
    type: "previous",
  },
];

// About Section
export const AboutSectionHeading = "A Glimpse into My World";
export const AboutSectionSubHeading =
  "Here, you'll find a snapshot of my coding activity, the tools I master, my key skills, and ways to connect with me.";
export const AboutSectionSkillsHeading = "My Skills & Tools";
export const SkillsData = [
  {
    id: 1,
    name: "Android Studio",
    icon: AndroidStudioIcon,
  },
  {
    id: 2,
    name: "BootStrap",
    icon: BootstrapIcon,
  },
  {
    id: 3,
    name: "Chrome",
    icon: ChromeIcon,
  },
  {
    id: 4,
    name: "CSS",
    icon: CSSIcon,
  },
  {
    id: 5,
    name: "Expo",
    icon: ExpoIcon,
  },
  {
    id: 6,
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    id: 7,
    name: "Github",
    icon: GithubIcon,
  },
  {
    id: 8,
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    id: 9,
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    id: 10,
    name: "React",
    icon: ReactIcon,
  },
  {
    id: 11,
    name: "React Native",
    icon: ReactIcon,
  },
  {
    id: 12,
    name: "Tailwind CSS",
    icon: TailwindCSSIcon,
  },
  {
    id: 13,
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    id: 14,
    name: "VS Code",
    icon: VSCodeIcon,
  },
];
export {
  LinkedInIcon,
  DiscordIcon,
  InstagramIcon,
  MediumIcon,
  GithubIcon,
};

// Footer Section
export const FooterSectionHeading = "Anything in Mind?";
export const FooterSectionSubHeading = "Let's Talk";
export const FooterSectionBtn = "Let's Talk"
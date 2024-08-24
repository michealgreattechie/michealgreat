export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize client's urgencies, bringing mindful projects to reality",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bg.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications across the globe",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Building with powerful tools",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Developing a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Hey Champ, do you wanna work with me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// PROJECT CARDS SECTION

export const projects = [
  {
    id: 1,
    title: "IdeaPilot AI",
    des: "AI-Powered Business Model Generation. Helping thousands of business owners across africa and beyond",
    img: "/first-card.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/first-card",
  },
  {
    id: 2,
    title: "Tulus",
    des: "A custom E-commerce web-application,seamlessly built for fashion enthusiasts",
    img: "/card-2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/card-2.png",
  },
  {
    id: 3,
    title: "Cepol",
    des: "A custom built FinTech-Application that serves as embedded payment gateway for a client's business",
    img: "/card-3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Reservation Dashboard",
    des: "A medical web-application specifically used for checking patients information, and also for the usefulness of reserving meetings with patients",
    img: "/card-4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Micheal Great is a true professional in every sense of the word. His expertise in software development and IT consulting is unparalleled. He took the time to understand our unique needs and delivered a custom solution that exceeded our expectations. The level of detail and creativity he brought to the project was impressive. We highly recommend Micheal to anyone seeking top-tier tech services!",
    name: "Eimiana",
    title: "Chairman Of Great Carson Schools",
  },
  {
    quote:
      "Working with Micheal was a game-changer for my company. His ability to translate complex ideas into simple, effective software solutions is nothing short of remarkable. He was always available to answer questions and provided invaluable insights throughout the project. The end product was not only functional but also beautifully designed. We couldn't be happier with the results",
    name: "Micheal Oresegun",
    title: "Director of CZS",
  },
  {
    quote:
      "Micheal Great's expertise in digital creation and web development is truly exceptional. He brought our vision to life with a website that is both visually stunning and incredibly user-friendly. His attention to detail and commitment to delivering a top-notch product made the entire process smooth and enjoyable. We would gladly work with him again on future projects.",
    name: "Heeziaq Isaac",
    title: "President at Great Light Academy- Tech-Educationa Consultant",
  },
  {
    quote:
      "Working with Micheal Great for the past 1.5 years has been an incredible honor. He is one of the most delightful and hardworking individuals I've ever had the pleasure of collaborating with. His dedication and commitment to excellence are truly inspiring, making every project not just successful but also enjoyable. I highly recommend Micheal to anyone looking for a reliable and talented professional",
    name: "Abdul Hanan",
    title: "Php | Laravel |Python | Django Developer",
  },
  {
    quote:
      "Collaborating with Micheal Great was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "Oluwafemi Adeoti",
    title: "Full-stack and a Cyber-security Developer",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: "GitHub",
    link: "https://github.com/michealgreattechie",
  },
  {
    id: 2,
    img: "/twit.svg",
    name: "Twitter",
    link: "https://x.com/michealgreatt",
  },
  {
    id: 3,
    img: "/link.svg",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michealgreat/",
  },
];

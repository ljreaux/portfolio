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
      "I prioritize continuous learning to stay ahead in the ever-evolving tech landscape",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-primary",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm highly adaptable to multiple working environments",
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
    description: "I constantly try to expand",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Former educator turned software engineer.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Online Classroom Platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MeadTools",
    des: "An all-in-one mead, wine, and cider recipe building calculator built using a PERN stack. I have been making mead for four years now and my biggest issue with developing recipes has always been the resources available to create them. MeadTools solves two major issues. It automatically calculates the volume added by ingredients like fruit and it consolidates all of the needed tools in one place. MeadTools has dozens of users and is under an MIT license on github.",
    img: "/meadTools.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "icons8-express-js.svg",
      "/postgresql-icon.svg",
    ],
    link: "https://github.com/ljreaux/MeadTools-React",
  },
  {
    id: 2,
    title: "Zoom Clone Project",
    des: "This project follows the JS Mastery tutorial on YouTube. It's a step-by-step guide to building a Zoom clone with Next.js and TypeScript.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/s.svg", "/c.svg"],
    link: "https://github.com/ljreaux/js-mastery-zoom-clone",
  },
  {
    id: 3,
    title: "Culinary Chronicle",
    des: "Culinary Chronicle is a PERN stack recipe review website. It allows users to register and sign in to an account, view, comment, and review recipes. This was the capstone project for Fullstack Academy Web Development Bootcamp. I primarily worked on building the API, styling, and various UI components.",
    img: "/culinary.png",
    iconLists: [
      "/re.svg",
      "/w3_css-icon.svg",
      "/logo-javascript.svg",
      "icons8-express-js.svg",
      "/postgresql-icon.svg",
    ],
    link: "https://github.com/Lab-Rats-Fullstack/Lab-Rats",
  },
  {
    id: 4,
    title: "Discord Bot Admin Dashboard",
    des: "This is an admin dashboard for controlling commands for a Discord.js bot.",
    img: "/adminDashboard.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/shadcn.png",
      "/ts.svg",
      "/c.svg",
      "/js_discord-icon.svg",
      "/mongodb-icon.svg",
    ],
    link: "https://github.com/ljreaux/discord-bot-interface",
  },
];

export const testimonials = [
  {
    quote:
      "Mead tools is a website that has contributed to this community and is an impressive body of work that handles a lot of thing related to brewing mead. \nIt also has a login screen and a front end and backend.",
    name: "Taylor Coon",
    title: "MeadTools User, Software Engineer",
  },
  {
    quote:
      "When Larry puts his mind to something, he absolutely obliterates it. He took an entire series of complex calculations, programmed them into a website, and summoned an army of community users to test everything, and fixed all the bugs single-handedly.",
    name: "Jake Tweedy",
    title: "MeadTools User",
  },
  {
    quote:
      "Larry poured a lot of time, effort, and insight into creating a much-needed tool for meadmakers around the world. Incorporating best practices for meadmaking into an intuitive online calculator was no small task — especially dealing with all the schools of thought around best practices for the hobby. Larry has been quick to roll out new features and bug fixes, making meadtools now the most trustworthy way of building batches, calculating nutrients, and other important meadmaking tasks. I’ve deleted all my other mead app bookmarks at this point thanks to this handy new tool!",
    name: "BC Phillips",
    title: "MeadTools User, Content Creator",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Fullstack Engineer",
    desc: "Developer and maintainer of MeadTools, a PERN stack application for creating mead, wine, and cider recipes.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "API and Frontend Developer",
    desc: "Designed and developed the API for Culinary Chronicle, the Capstone project for my Fullstack Academy Bootcamp.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Music Teacher",
    desc: "Rebuilt and maintained junior high choral program. Lead daily rehearsals to prepare students for various concerts and events.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Fullstack Academy Student",
    desc: "Completed the Fullstack Academy Web Development Bootcamp through Emory University.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ljreaux",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ljreaux/",
  },
  {
    id: 3,
    img: "https://img.icons8.com/ios/50/FFFFFF/domain--v1.png",
    link: "https://drive.google.com/file/d/1PYM-dillFHdcStMO5MukmxGJR9lrch6l/view",
  },
];

export const companies = [
  {
    id: 1,
    name: "Ole Miss",
    img: "/olemiss.png",
  },
  {
    id: 2,
    name: "Emory University",
    img: "/emory2.png",
  },
  {
    id: 3,
    name: "Fullstack Academy",
    img: "https://welcome.fullstackacademy.com/assets/hanover-square-logo-white.png",
  },
  {
    id: 4,
    name: "VWSD",
    img: "https://cmsv2-assets.apptegy.net/uploads/14465/file/1672183/8df97ca9-c5f3-4608-b6c6-aa7a00c881ce.png",
  },
];

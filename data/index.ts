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
  {
    quote:
      "Meadtools is the next big thing for any and all meadmakers who want to hone in their craft. From the recipe builder to the calculators, it has everything you need to confidently make mead. Larry has worked diligently to make it a simple and approachable website and it is incredible. In addition to his great work coding the website, he has also made the Man Made Mead discords newest bot and dashboard. This has also been revolutionary for the discord as we look to make our community an easier place to share and find information!",
    name: "Garrett Freeman",
    title: "MeadTools User, Content Creator",
  },
  {
    quote:
      "Larry Reaux has consistently demonstrated the passion, drive, and tenacity to learn any language, framework, or technology he has needed to in order to finish a project. What Larry may lack in years of experience, he makes up for in his ability to quickly learn and apply new concepts. Larry has the mind of a creative problem solver and will be an invaluable asset to any team he joins.",
    name: "Kyle Mayer",
    title: "Frontend Engineer, Discovery Education",
  },
  {
    quote:
      "Larry has never been afraid to learn something new, even when nobody is expecting it from him. While working with him in class, I was often surprised when he would implement extra features into our projects, such as React Icons or Cloudinary. This was at a time when many of his peers, including me, were content with just working with the fundamentals of React.js and Express.js. This goes to show how Larry often works with an end in mind, and will educate himself to whatever extent necessary in order to achieve that end goal. He was a wonderful classmate, and will go on to have a very successful career in tech.",
    name: "Jared May",
    title: "Software Engineer, Classmate at Fullstack Academy",
  },
  {
    quote:
      "Larry's commitment to meadtools.com has been made my life easier and more enjoyable as a mead maker.  His dedication to making meaningful updates, based on real feedback has positive impact on our ability to use the tool.  Additionally he is great at immediately updating us and communicating changes so we know we can have the most up to date experience",
    name: "JJ Ocampo",
    title: "MeadTools User, Senior Analyst",
  },
  {
    quote:
      "MeadTools is quickly becoming the de facto planning tool for a wide variety of homebrewers making everything from mead to fruit wines to cider. No previous calculator has been capable of estimating batch volumes for a large number of diverse ingredients using high quality data from the USDA. MeadTools also performs complex yeast nutrient calculations that previously required a separate tool. And by providing a comprehensive set of additional brewing calculators, it is a one-stop shop, including functionality that was previously spread across a half dozen web sites. By combining strong domain knowledge, extensive research, and a solid software implementation, Larry has built a tool that is not only provides much richer functionality than existing tools, but exceeds what most people in the community would have imagined possible.",
    name: "Matthew Allen",
    title: "MeadTools User, Software Engineer",
  },
  {
    quote:
      "MeadTools, developed by Larry Reaux, is a comprehensive tool that has become indispensable for my mead-making process, providing everything I need from recipe planning and seamless unit conversion (metric <-> US) to a suite of calculators that would otherwise be scattered across the internet. I followed the project's development and was consistently impressed by Larry Reaux's pragmatic problem-solving skills and commitment to user feedback. I contributed German translations to the project, which were quickly and seamlessly integrated, broadening the tool's accessibility. Their friendly and responsive communication made providing feedback enjoyable, and I appreciated their ability to quickly address issues. Larry Reaux's adaptability and efficiency would make them a valuable asset to any development team.",
    name: "Drews C.",
    title: "Senior Android Developer",
  },
  {
    quote:
      "Driven, self-starter, quick on the uptake and always meets his deadlines. I enjoyed being his mentor during bootcamp and helping him with his projects because you could tell he was passionate about learning and improving his skills even if it meant going off and doing research on his own. Any team would be lucky to have him.",
    name: "Brian Mui",
    title: "Education Mentor, Fullstack Academy",
  },
  {
    quote: "Since I met Larry, he has been extremely passionate about turning his ideas into well researched web products. Within a few weeks of starting class, he had turned a spreadsheet project into a fully functioning front end website (Mead Tools.) While working with him on Culinary Chronicle, he was very aware of the potential security vulnerabilities of managing various levels of accounts, and made sure we closed those vulnerabilities on both front end, back end, and in the seed data itself. He’s very easy to work with as far as feedback and is always offering constructive solutions from design decisions to hunting down merge conflicts as a team. I feel he would be an amazing addition to any development team.",
    name: "Lisa Barry",
    title: "Animator, Web Developer, Fullstack Academy classmate"
  }
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

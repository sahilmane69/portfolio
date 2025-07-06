const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 5, suffix: "+", label: "Relevant Experience" },
    { value: 2, suffix: "+", label: "Satisfied Clients" },
    { value: 8, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: " C Programmer",
        imgPath: "/images/logos/c1.png",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

// const techStackIcons = [
//     {
//         name: "React Developer",
//         modelPath: "/models/react_logo-transformed.glb",
//         scale: 1,
//         rotation: [0, 0, 0],
//     },
//     {
//         name: "Python Developer",
//         modelPath: "/models/python-transformed.glb",
//         scale: 0.8,
//         rotation: [0, 0, 0],
//     },
//     {
//         name: "Backend Developer",
//         modelPath: "/models/node-transformed.glb",
//         scale: 5,
//         rotation: [0, -Math.PI / 2, 0],
//     },
//     {
//         name: "Interactive Developer",
//         modelPath: "/models/three.js-transformed.glb",
//         scale: 0.05,
//         rotation: [0, 0, 0],
//     },
//     {
//         name: "Project Manager",
//         modelPath: "/models/git-svg-transformed.glb",
//         scale: 0.05,
//         rotation: [0, -Math.PI / 4, 0],
//     },
// ];

const expCards = [
    {
        review: "Sahil brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/eagle.png",
        logoPath: "/images/eagle.png",
        title: "Frontend Developer – Eagle Team (Blog Website)",
        date: "January 2024 - Present",
        responsibilities: [
            "Collaborated in a 4-member team to build a responsive blog website.",
            "Handled all core frontend tasks using React.js and Tailwind CSS.",
            "Designed reusable components for posts, navbar, and comment section.",
            "Ensured responsiveness and mobile-first design with smooth UI flow.",
        ],
    },

];



const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Sahil. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Himanshu Kumar Singh",
        mentions: "@HimanshuKumarSingh",
        review:
            "Working with Sahil was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/hks.png",
    },
    {
        name: "Pranav Khaushik",
        mentions: "@PranavKhaushik",
        review:
            "Collaborating with Sahil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sahil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Sahil was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Sahil’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Sahil was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url:"https://www.instagram.com/sahil_mane_developer/",
        imgPath: "/images/insta.png",
    },
    {
        name: "github",
        url:"https://github.com/sahilmane69",
        imgPath: "/images/github-mark-white.png",
    },
    {
        name: "x",
        url:"https://x.com/SahilMane_code",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url:"www.linkedin.com/in/sahilmane74",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,

    testimonials,
    socialImgs,

    techStackImgs,
    navLinks,
};
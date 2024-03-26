export const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Services",
    url: "/services",
    children: [
      {
        id: 6,
        name: "Websites",
        url: "/services/web-development",
      },
      {
        id: 4,
        name: "Custom Applications",
        url: "/services/custom-application",
      },
      {
        id: 5,
        name: "Front-end Development",
        url: "/services/front-end-development",
      },
      {
        id: 7,
        name: "Hybrid Apps Development",
        url: "/services/hybrid-mobile-app",
      },
    ],
  },
  {
    id: 8,
    name: "Blog",
    url: "https://blog.zysk.tech/",
    type: "external",
  },
  {
    id: 10,
    name: "Contact",
    url: "/contact",
  },
];

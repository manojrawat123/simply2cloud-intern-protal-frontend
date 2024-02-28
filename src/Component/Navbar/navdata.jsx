import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const navItem = [
  {
    id: 1,
    label: "Home",
    link: "/",
    visibility: "both",
    user: "any",
  },
  {
    id: 2,
    label: "Internship",
    link: "/nm-jobs",
    visibility: "logout",
    user: "user",
  },
  {
    id: '2a',
    label: "Internship",
    link: "/nm-jobs",
    visibility: "login",
    user: "user",
  },
  {
    id: 3,
    label: "Manage Jobs",
    link: "/post-jobs",
    visibility: "login",
    user: "company",
  },
  {
    id: 4,
    label: "Post New Jobs",
    link: "/post-new-jobs",
    visibility: "login",
    user: "company",
  },
  {
    id: 5,
    label: "Job Application",
    link: "#",
    visibility: "login",
    user: "company",
    option: [
      {
        id: 6,
        label: "Approved Application",
        link: "/job-application-approved",
        visibility: "login",
        user: "company",
      },
      {
        id: 7,
        label: "Job Application",
        link: "/job-application",
        visibility: "login",
        user: "company",
      },
      {
        id: 8,
        label: "Rejected Application",
        link: "/job-application-rejected",
        visibility: "login",
        user: "company",
      },
    ],
  },
  {
    id: 9,
    label: "My Application",
    link: "/my-application",
    visibility: "login",
    user: "user",
  },
  {
    id: 11,
    label: "Logout",
    link: "/logout",
    visibility: "login",
    user: "button",
  },
  {
    id: 12,
    label: "Sign Up",
    link: "/signup",
    visibility: "logout",
    user: "any",
  },
  {
    id: 13,
    label: "Login",
    link: "/login",
    visibility: "logout",
    user: "any",
  },
  {
    id: 14,
    label: <AccountCircleIcon />,
    link: "/profile",
    visibility: "login",
    user: "user",
  },
  
];

export default navItem;

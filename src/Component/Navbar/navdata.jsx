import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const navItem = [
    {
      "id": 1,
      "label": "Home",
      "link": "/",
      "visibility": "login",
      "user": "both"
    },
    {
      "id": 2,
      "label": "Jobs",
      "link": "/jobs",
      "visibility": "login",
      "user": "user"
    },
    {
      "id": 2,
      "label": "Manage Jobs",
      "link": "/post-jobs",
      "visibility": "login",
      "user": "company"
    },
    {
      "id": 2,
      "label": "Post New Jobs",
      "link": "/post-new-jobs",
      "visibility": "login",
      "user": "company"
    },
    {
      "id": 3,
      "label": "Add Skills",
      "link": "/addskill",
      "visibility": "login",
      "user": "user"
    },
    {
      "id": 4,
      "label": "Contact",
      "link": "/contact",
      "visibility": "login",
      "user": "user"
    },
    {
      "id": 4,
      "label": "Logout",
      "link": "/logout",
      "visibility": "login",
      "user": "button"
    },
    {
      "id": 5,
      "label": "Sign Up",
      "link": "/signup",
      "visibility": "logout",
      "user": "any"
    },
    {
      "id": 6,
      "label": "Login",
      "link": "/login",
      "visibility": "logout",
      "user": "any"
    },
    {
      "id": 4,
      "label": <AccountCircleIcon />,
      "link": "/profile",
      "visibility": "login",
      "user": "user"
    },
  ]

  export default navItem;
  
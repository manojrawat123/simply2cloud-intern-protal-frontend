import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700`;
const compnayInpArr = [{
    "type": "email",
   "id": "username",
    "name": "username",
    "required": true,
    "placeholder": "Enter Company Email",
    "icon": <PersonIcon className={iconCss} />
  }, {
    "type": "password",
   "id": "password",
    "name": "password",
    "required": true,
    "placeholder": "Enter Company Password",
    "icon": <LockIcon className={iconCss} />
  }]

  export default compnayInpArr;
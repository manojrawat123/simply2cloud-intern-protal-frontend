import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700`;


const InternJobProfilieInputArr = [
  {
    type: "dynamic",
    id: "job_categoery",
    name: "job_categoery",
    required: true,
    placeholder: "Select Job Profile",
    icon: <WorkIcon className={iconCss} />,
  },
    {
      type: "text",
      id: "title",
      name: "title",
      required: true,
      placeholder: "Enter Job Title",
      helpingtext : "Example - MERN Devloper",
      icon: <WorkIcon className={iconCss} />,
    },
    {
      type: "number",
      id: "expectedSalary",
      name: "expected_salary",
      required: true,
      placeholder: "Enter Expected Salary",
      icon: <AttachMoneyIcon className={iconCss} />,
    },
    {
      type: "number",
      id: "experienceYears",
      name: "experience_years",
      required: true,
      placeholder: "Enter Years of Experience",
      icon: <WorkHistoryIcon className={iconCss} />,
    },
    {
      type: "array",
      id: "desc",
      name: "desc",
      required: true,
      placeholder: "Describe Your Experience",
      icon: <WorkIcon className={iconCss} />,
    }
  ];

  export default InternJobProfilieInputArr
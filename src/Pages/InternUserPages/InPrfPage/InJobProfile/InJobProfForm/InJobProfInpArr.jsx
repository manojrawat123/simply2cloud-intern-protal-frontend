import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const iconCss = `absolute top-2 border-r border-black peer-focus:text-violet-700`;

const InternJobProfilieInputArr = [
  {
    type: "file",
    id: "user_image",
    name: "user_image",
    required: false,
    placeholder: "Upload Your Image",
    icon: <WorkIcon className={iconCss} />,
  },
  {
    type: "dynamic",
    id: "job_categoery",
    name: "job_categoery",
    required: true,
    placeholder: "Select Job Profile",
    icon: <WorkIcon className={iconCss} />,
  },
  
  {
    type: "dynamic",
    id: "sub_categoery",
    name: "sub_categoery",
    required: true,
    placeholder: "Select Job Sub Categoery",
    icon: <WorkIcon className={iconCss} />,
  },
    // {
    //   type: "text",
    //   id: "title",
    //   name: "title",
    //   required: true,
    //   placeholder: "Enter Job Title",
    //   helpingtext : "Example - MERN Devloper",
    //   icon: <WorkIcon className={iconCss} />,
    // },
    // {
    //   type: "number",
    //   id: "expectedSalary",
    //   name: "expected_salary",
    //   required: true,
    //   placeholder: "Enter Expected Salary",
    //   icon: <AttachMoneyIcon className={iconCss} />,
    // },
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
    },
    {
      type: "url",
      id: "portfolio_link",
      name: "portfolio_link",
      required: true,
      placeholder: "Your Portfolio Link",
      icon: <WorkIcon className={iconCss} />,
    },
    {
      type: "url",
      id: "linkedin_profile",
      name: "linkedin_profile",
      required: true,
      placeholder: "Linkdin Profile Link",
      icon: <WorkIcon className={iconCss} />,
    },
    // {
    //   type: "url",
    //   id: "github_profile",
    //   name: "github_profile",
    //   required: true,
    //   placeholder: "GitHub Profile Link",
    //   icon: <WorkIcon className={iconCss} />,
    // },

  ];

  export default InternJobProfilieInputArr
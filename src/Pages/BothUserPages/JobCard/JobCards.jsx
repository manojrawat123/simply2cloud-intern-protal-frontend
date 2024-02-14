import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  CircularProgress,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { format } from "date-fns";
import Cookies from "js-cookie";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import axios from "axios";
import API_BASE_URL from "../../../config";
import { ToastContainer, toast } from "react-toastify";
import InternJobProfileModal from "../../InternUserPages/InPrfPage/InJobProfile/InJobProfileDis/InJobProfModl/InJobProfModal";
import { DataContext } from "../../../context";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function JobCard({ jobs }) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [applyButton, setApplyButton] = React.useState(false);
  const profile_id = Cookies.get("profile_id");
  const { getJobsForStudentFunc } = React.useContext(DataContext);

  const applyJobFunc = () => {
    setApplyButton(true);

    const user_id = Cookies.get("user");
    const token = Cookies.get("token");

    axios
      .post(
        `${API_BASE_URL}/intern-job-apply/`,
        {
          user: user_id,
          job: jobs.id,
          company_user: jobs.company.company_user.id,
          intern_job_profile: profile_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        getJobsForStudentFunc();
        toast.success("Skill Added Sucessfully!", {
          position: "top-center",
        });
      })
      .catch((err) => {
        toast.error("Internal Server Error", {
          position: "top-center",
        });
        console.log(err);
      })
      .finally(() => {
        setApplyButton(false);
      });
  };

  const fieldsArray = {
    Location: jobs.location,
    "Posted at": format(new Date(jobs.posted_at), "dd MMM yy h a"),
    "Application Deadline": format(
      new Date(jobs.application_deadline),
      "dd MMM yy"
    ),
    Education: jobs.education,
    "Required Experience": jobs.experience,
    Salary: jobs.salary,
    // 'Skills Required': jobs.skills,
    // 'Skills Preferred': jobs.,
    // 'Responsibilities': jobs.respon,
    // 'Benefits': jobs.
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {jobs.company.company_name.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {Cookies.get("user_type") == "company" ? <MoreVertIcon /> : null}
          </IconButton>
        }
        title={
          <Typography variant="div" fontWeight="bold" className="text-lg">
            {jobs.job_title}
          </Typography>
        }
        subheader={`Posted On ${format(
          new Date(jobs.updated_at),
          "dd MMM yy h a"
        )}`}
      />
      <CardContent>
        <table>
          {Object.entries(fieldsArray).map(([key, value]) => {
            return (
              <tr key={key} variant="tr">
                <td
                  key={key}
                  variant="th"
                  fontSize={"1rem"}
                  className="font-bold"
                >
                  {key}&nbsp;&nbsp;
                </td>
                <td variant="td" fontSize={"1rem"} fontWeight="400">
                  {value}
                </td>
                <br />
              </tr>
            );
          })}
        </table>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}

        {Cookies.get("user_type") == "user" ? (
          isNaN(Cookies.get("profile_id")) ? (
            <InternJobProfileModal
              fromJobPage={true}
              applyJobFunc={applyJobFunc}
              applyButton={applyButton}
            />
          ) : (
            <div className="text-center mx-auto">
              <button
                className="px-4 py-2 font-semibold border border-blue-700 border-solid  outline-blue-500  text-blue-500 rounded hover:bg-blue-700 hover:text-white"
                onClick={() => {
                  if (Cookies.get("token")) {
                    applyJobFunc();
                  } else {
                    navigate("/signup");
                  }
                }}
              >
                {applyButton ? (
                  <CircularProgress color="inherit" size={19} />
                ) : (
                  "Apply Now"
                )}
              </button>
            </div>
          )
        ) : 
         !Cookies.get("token") ? <div className="text-center mx-auto">
          <button
            className="px-4 py-2 font-semibold border border-blue-700 border-solid  outline-blue-500  text-blue-500 rounded hover:bg-blue-700 hover:text-white"
            onClick={() => {
              navigate("/signup")
            }}
          >
            {applyButton ? (
              <CircularProgress color="inherit" size={19} />
            ) : (
              "Apply Now"
            )}
          </button>
        </div> : ""}
        
        <IconButton aria-label="add to favorites">
          <TurnedInNotIcon />
        </IconButton>

        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}

//       :
//      : ""}

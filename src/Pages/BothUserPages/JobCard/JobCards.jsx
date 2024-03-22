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
    console.log("Debug");
    
    setApplyButton(true);
    const user_id = Cookies.get("user");
    const token = Cookies.get("token");
    console.log("Debug");

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
        toast.success("Applied Sucessfully!", {
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
        {!Cookies.get("token") ? (
          <div className="text-center mx-auto">
            <button
              className="px-4 py-2 font-semibold border border-blue-700 border-solid  outline-blue-500  text-blue-500 rounded hover:bg-blue-700 hover:text-white"
              onClick={() => {
                navigate("/login");
              }}
            >
              {applyButton ? (
                <CircularProgress color="inherit" size={19} />
              ) : (
                "Apply Now"
              )}
            </button>
          </div>
        ) : Cookies.get("user_type") == "user" ? (
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
                onClick={()=>{
                  applyJobFunc()
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
        ) : (
          ""
        )}
        {/* <IconButton aria-label="add to favorites">
          <TurnedInNotIcon />
        </IconButton> */}
      </CardActions>
      
    </Card>
  );
}


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { format } from "date-fns";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ jobs }) {

  const [expanded, setExpanded] = React.useState(false);

  const fieldsArray = {
    'Location': jobs.location,
    'Posted at': format(new Date(jobs.posted_at), "dd MMM yy h a"),
    'Application Deadline': format(new Date(jobs.application_deadline), "dd MMM yy"),
    'Education': jobs.education,
    'Required Experience': jobs.experience,
    'Salary': jobs.salary,
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
            <MoreVertIcon />
          </IconButton>
        }

        title={<Typography variant="div" fontWeight="bold" className='text-lg'>
          {jobs.job_title}
        </Typography>}
        subheader={`Posted On ${format(new Date(jobs.updated_at), "dd MMM yy h a")}`}
      />
      <CardContent>
        <table>
          {Object.entries(fieldsArray).map(([key, value]) => {
            return (
              <tr key={key} variant='tr'>
                <td key={key} variant='th' fontSize={"1rem"} className='font-bold' >
                  {key}&nbsp;&nbsp;
                </td>
                <td variant='td' fontSize={"1rem"} fontWeight="400">
                  {value}
                </td><br />
              </tr>
            )
          }
          )}
        </table>


      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
